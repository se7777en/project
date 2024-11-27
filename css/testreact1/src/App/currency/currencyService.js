class TbsCurrency {
    _apiBase = 'https://test-api.tbcbank.ge/v1/exchange-rates/commercial?currency=usd%2C%20eur';
    _apiKey = '';

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