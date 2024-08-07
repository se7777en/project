import { Component } from 'react';

import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';


import './charInfo.scss';

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) { // prinemaet 2 parametra prevProps prevState
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    componentDidCatch(err, info) { // etot hook vizivaetsya togda kogda v komponente proizoshla oshibka
        console.log(err, info);
        this.setState({error: true});
    }

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    onCharLoaded = (char) => {
        this.setState({ char, loading: false })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }


    render() {
        const { char, loading, error } = this.state;

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


                    //  (
                    //     <ul>
                    //         {(function() {
                    //             let comicsItems = [];

                    //             for (let i = 0; i < comics.length; i++) {
                    //                 if (i > 9) break;

                    //                 comicsItems.push(
                    //                     <li key={i} className="char__comics-item">
                    //                         {comics[i].name}
                    //                     </li>
                    //                 );
                    //             }

                    //             return comicsItems;
                    //         })()}
                    //     </ul>
                    // )



                    // comics.map((item, i) => {
                    //     if (i > 9) return;
                    //     return (
                    //         <li key={i} className="char__comics-item">
                    //             {item.name}
                    //         </li>
                    //     )
                    // })
                }



            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;