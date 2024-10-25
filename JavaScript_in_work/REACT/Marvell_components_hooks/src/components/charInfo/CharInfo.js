import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
<<<<<<< HEAD
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
=======
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
>>>>>>> 9e18b2bd5 (-acastom__hooks)
import Skeleton from '../skeleton/Skeleton';


import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const {loading, error, getCharacter, clearError} = useMarvelService();
=======
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const {loading, error, getCharacter, clearError} = useMarvelService();
>>>>>>> 9e18b2bd5 (-acastom__hooks)


    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
        
>>>>>>> 9e18b2bd5 (-acastom__hooks)
        const { charId } = props;
        if (!charId) {
            return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9e18b2bd5 (-acastom__hooks)
        clearError();
        // onCharLoading();
        // marvelService.getCharacter(charId)
         getCharacter(charId)
<<<<<<< HEAD
            .then(onCharLoaded)
            // .catch(onError)
    }

    const onCharLoaded = (char) => {
        // setLoading(false);
        setChar(char);
    }

    // const onCharLoading = () => {
    //     setLoading(true);
    // }

    // const onError = () => {
    //     setError(true);
    //     setLoading(false);
    // }
=======
        onCharLoading();
        marvelService.getCharacter(charId)
=======
>>>>>>> 9e18b2bd5 (-acastom__hooks)
            .then(onCharLoaded)
            // .catch(onError)
    }

    const onCharLoaded = (char) => {
        // setLoading(false);
        setChar(char);
    }

    // const onCharLoading = () => {
    //     setLoading(true);
    // }

<<<<<<< HEAD
    const onError = () => {
        setError(true);
        setLoading(false);
    }
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
    // const onError = () => {
    //     setError(true);
    //     setLoading(false);
    // }
>>>>>>> 9e18b2bd5 (-acastom__hooks)

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;

    let style = { 'objectFit': 'cover' }
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        style = { 'objectFit': 'contain' }
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={style} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}


                {
                    comics.map((item, i) => i > 9 ? null : (
                        <li key={i} className="char__comics-item">
                            {item.name}
                        </li>
                    )
                    )
                }
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;