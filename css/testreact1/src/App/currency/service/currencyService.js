class TbsCurrency {
    _apiBase = 'https://test-api.tbcbank.ge/v1/exchange-rates/commercial?currency=usd%2C%20eur';
    _apiKey = 'a8IUT1SEHjFLmZ129bhvkgwlbuTjpepL';

    header = {
        method: 'GET',
        headers:
        {
            accept: 'application/json',
            apikey: `${this._apiKey}`
        }
    };

    getResource = async (url, options) => {
        let res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getCurr = async () => {
        const res = await this.getResource(`${this._apiBase}`, this.header);
        return this._transformCurr(res.commercialRatesList);
    }

    _transformCurr = (currencyArr) => {
        return {
            eurBuy: currencyArr[0].buy,
            eurSell: currencyArr[0].sell,
            usdBuy: currencyArr[1].buy,
            usdSell: currencyArr[1].sell
        }
    }
}

export default TbsCurrency;


// fetch('https://jsonplaceholder.typicode.com/posts/1') // Тестовый URL
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json(); // Парсим JSON из ответа
//   })
//   .then(data => {
//     console.log(data); // Выводим данные в консоль
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });