import { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
<<<<<<< HEAD
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
=======
import ErrorMessage from '../errorMessage/errorMessage';
import MarvelService from '../../services/MarvelService';
>>>>>>> 80c569597 (-ajavascript_in_work)
import './charList.scss';


const CharList = (props) => {


    const [charList, setCharList] = useState([]);
<<<<<<< HEAD
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
=======
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
>>>>>>> 80c569597 (-ajavascript_in_work)
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    // state = {
    //     charList: [],
    //     loading: true,
    //     error: false,
    //     newItemLoading: false,
    //     offset: 210,
    //     charEnded: false
    // }

<<<<<<< HEAD
    const { loading, error, getAllCharacters } = useMarvelService();

=======
    const marvelService = new MarvelService();
>>>>>>> 80c569597 (-ajavascript_in_work)

    // componentDidMount() {
    //     this.onRequest()
    // }

    useEffect(() => {
<<<<<<< HEAD
        onRequest(offset, true)
=======
        onRequest()
>>>>>>> 80c569597 (-ajavascript_in_work)
    }, [])



<<<<<<< HEAD
    const onRequest = (offset, initial) => {
        // onCharListLoading();
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        // setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
        // .catch(onError)
    }

    // const onCharListLoading = () => {
    //     setNewItemLoading(true)
    // }
=======
    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        setNewItemLoading(true)
    }
>>>>>>> 80c569597 (-ajavascript_in_work)

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
<<<<<<< HEAD
        // setLoading(loading => false);
=======
        setLoading(loading => false);
>>>>>>> 80c569597 (-ajavascript_in_work)
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

<<<<<<< HEAD
    // const onError = () => {
    //     setLoading(false);
    //     setError(true);
    // }
=======
    const onError = () => {
        setLoading(false);
        setError(true);
    }
>>>>>>> 80c569597 (-ajavascript_in_work)

    const itemRefs = useRef([]);
    const focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

        // По возможности, не злоупотребляйте рефами, только в крайних случаях
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

<<<<<<< HEAD


   
=======
>>>>>>> 80c569597 (-ajavascript_in_work)
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }

            return (
                <li
                    className="char__item"
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
<<<<<<< HEAD
                    key={`${item.id}-${i * i}`}
=======
                    key={item.id}
>>>>>>> 80c569597 (-ajavascript_in_work)
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>
            )

        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }


    // const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;

    const items = renderItems(charList)

    const errorMessage = error ? <ErrorMessage /> : null;
<<<<<<< HEAD
    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    // const content = !(loading || error) ? items : null;
=======
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;
>>>>>>> 80c569597 (-ajavascript_in_work)

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
<<<<<<< HEAD
            {/* {content} */}
            {items}
=======
            {content}
>>>>>>> 80c569597 (-ajavascript_in_work)
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}

            >
                <div className="inner">load more</div>
            </button>
        </div>
    )

}


CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;