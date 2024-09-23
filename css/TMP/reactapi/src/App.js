import React, { useState, useEffect } from 'react';
import './css.css'

function CurrencyRates() {
  const [rates, setRates] = useState(null); // Состояние для хранения курсов валют
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    // Функция для получения данных с API
    const fetchRates = async () => {
      try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        if (!response.ok) {
          throw new Error('Ошибка получения данных');
        }
        const data = await response.json();
        setRates(data); // Устанавливаем курсы валют в состояние
        setLoading(false); // Отключаем индикатор загрузки
      } catch (err) {
        setError(err.message); // Обрабатываем ошибки
        setLoading(false);
      }
    };

    fetchRates();
  }, []); // Пустой массив зависимостей, чтобы запрос был выполнен один раз при монтировании

  // Отображение состояния загрузки
  if (loading) {
    return <p>Загрузка...</p>;
  }

  // Обработка ошибок
  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  // Отображение курсов валют
  return (
    <div className='wrapper'>
      <div className="wrapper__inner __container">
        <h2>Курсы валют:</h2>
        <ul>


          <li className='item'>{rates[0].txt} : {rates[0].rate} : {rates[0].exchangedate}</li>
          <li className='item'>{rates[60].txt} : {rates[60].rate} : {rates[60].exchangedate}</li>
          <li className='item'>{rates[55].txt} : {rates[55].rate} : {rates[55].exchangedate}</li>


          {/* {rates && rates.map((currency) => (
            <li key={currency.rate}>
              {currency.txt}: {currency.rate} : {currency.exchangedate}
            </li>
          ))} */}

        </ul>
      </div>
    </div>
  );
}

export default CurrencyRates;