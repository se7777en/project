async function checkInternetSpeed(callback, numOfTests = 5, intervalSeconds = 2) {
    let speeds = [];

    async function runTest() {
        const startTime = new Date().getTime();
        const fileSizeMB = 0.0814; // Размер файла для загрузки (в мегабайтах)
       // const fileUrl = `https://raw.githubusercontent.com/ant7777ant/TM/master/bin/${fileSizeMB}MB.bin`;
        const fileUrl = `https://drive.google.com/file/d/1i67WxgPMcjkRIuHDX7a0z8A4fUlDXlhq/view?usp=sharing`;

        try {
            const response = await fetch(fileUrl);
            await response.arrayBuffer(); // Дожидаемся загрузки всего файла
            const endTime = new Date().getTime();
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

    // Очищаем массив speeds после завершения всех тестов
    speeds = [];
}

function displaySpeedResult(speedMbps) {
    const speedResultElement = document.getElementById('speedResult');
    if (speedMbps !== null) {
        speedResultElement.textContent = `Скорость интернета: ${speedMbps.toFixed(2)} Mbps`;
    } else {
        speedResultElement.textContent = 'Не удалось проверить скорость интернета';
    }
}

// Вызываем функцию проверки скорости интернета
checkInternetSpeed(displaySpeedResult, 10, 2); // Провести 5 тестов с интервалом в 10 секунд
