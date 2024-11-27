 // Отображаем результат
 function displaySpeedResult(speedMbps) {
  const speedResultElement = document.getElementById('speedResult');
  if (speedMbps !== null) {
    speedResultElement.textContent = `Скорость интернета: ${speedMbps.toFixed(2)} Mbps`;
  } else {
    speedResultElement.textContent = 'Не удалось проверить скорость интернета';
  }
}

async function checkInternetSpeed(callback, numOfTests = 5, intervalSeconds = 2) {
  const speeds = [];

  async function runTest() {
    const startTime = performance.now();
    const fileSizeMB = 24; // Размер файла для загрузки (в мегабайтах)
    const fileUrl = `https://raw.githubusercontent.com/ant7777ant/TM/master/bin/${fileSizeMB}MB.bin`;

    try {
      const response = await fetch(fileUrl);
      await response.arrayBuffer(); // Дожидаемся загрузки всего файла
      const endTime = performance.now();
      const durationSeconds = (endTime - startTime) / 1000;
      const fileSizeBits = fileSizeMB * 8 * 1024 * 1024; // Размер файла в битах
      const speedMbps = (fileSizeBits / durationSeconds) / (1024 * 1024); // Скорость в мегабитах в секунду
      speeds.push(speedMbps);
      callback(speedMbps); // Вызываем обратную функцию с текущей скоростью
    } catch (error) {
      console.error('Ошибка загрузки файла', error);
      callback(null);
    }
  }

  // Запускаем тесты последовательно с учетом интервала
  for (let i = 0; i < numOfTests; i++) {
    await runTest();
    if (i < numOfTests - 1) {
      await new Promise(resolve => setTimeout(resolve, intervalSeconds * 1000));
    }
  }

  // Вычисляем среднюю скорость
  const averageSpeed = speeds.reduce((a, b) => a + b) / speeds.length;

 

  displaySpeedResult(averageSpeed); // Вызовите displaySpeedResult со средней скоростью
}

// Вызываем функцию проверки скорости интернета
checkInternetSpeed(displaySpeedResult, 10, 2); // Провести 10 тестов с интервалом в 2 секунды
