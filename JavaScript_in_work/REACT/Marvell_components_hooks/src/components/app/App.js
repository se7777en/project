<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";

import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="/comics/:comicId" element={<SingleComicPage />} />

                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
            </div>
        </Router >
    )

=======
import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";



import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = (id) => {
        setSelectedChar(id)
    }
    return (
        <div className="app">
            <AppHeader />
            <main>
                <ErrorBoundary>
                    <RandomChar />
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected} />
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
                <AppBanner />
                <ComicsList />
            </main>
        </div>
    )

<<<<<<< HEAD
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
>>>>>>> 9e18b2bd5 (-acastom__hooks)
}




export default App;