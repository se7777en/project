// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import TbsCurrency from './service/currencyService'
import '../App.css';


const Form = () => {
    const [currency, setCurrency] = useState({
        eurBuy: 0,
        eurSell: 0,
        usdBuy: 0,
        usdSell: 0
    });

    const [loading, setLoading] = useState(true);
    const cur = new TbsCurrency();

    const fetchCurrency = () => {
        setLoading(true);
        cur.getCurr()
            .then(data => {
                setCurrency(data); // Сохраняем данные в состоянии
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error); // Логируем ошибки
                setLoading(false);
            });
    };


    useEffect(() => {
        fetchCurrency();
    }, []);

    console.log('ok');
    // console.log(currency.eurBuy);

    const setUserValueOnState = (e, valute) => {
        setCurrency((prev) => ({
            ...prev, [valute]: e.target.value
        }))
    };

    const { eurBuy, eurSell, usdBuy, usdSell } = currency;

    return (
        <>



            

            <div className="cotainer">
                <h1 className="header">form</h1>
                <form className="form">
                
                    <input value={eurBuy} onChange={(e) => setUserValueOnState(e, 'eurBuy')} type="text" placeholder="enter your name" />
                    <input value={eurSell} onChange={(e) => setUserValueOnState(e, 'eurSell')} type="text" placeholder="enter your email" />
                    <input value={usdBuy} onChange={(e) => setUserValueOnState(e, 'usdBuy')} type="text" placeholder="enter your name" />
                    <input value={usdSell} onChange={(e) => setUserValueOnState(e, 'usdSell')} type="text" placeholder="enter your email" />
                    <textarea className="textarea" placeholder='Text'></textarea>
                    {/* zapisivaem v textarea predidushee sostoyanie */}

                    {/* <div className="form__num">{val}</div> */}
                    <div className="form__btns">
                        <button onClick={fetchCurrency} className='submit' type='submit'>send form</button>
                        {loading ? (<h3>loading!!</h3>) : null}
                        <div className="form__btns-left">
                            <button className='btn'>+1</button>
                            <button className='btn' >-1</button>
                            <button className='btn'>+++</button>
                            
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}


function App() {
    return (
        <Form />
    )
}

export default App;