<<<<<<< HEAD
<<<<<<< HEAD
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const { loading, request, error, clearError } = useHttp();

	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	const _apiKey = "apikey=4d466deb3be421a9b5ab16900a40f398";
	const _baseOffset = 210;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = 0) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description
				? `${char.description.slice(0, 210)}...`
				: "There is no description for this character",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
		};
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	return {
		loading,
		error,
		clearError,
		getAllCharacters,
		getCharacter,
		getAllComics,
		getComic,
	};
};

export default useMarvelService;
=======
//import { v4 as uuidv4 } from 'uuid';

=======
>>>>>>> 9e18b2bd5 (-acastom__hooks)
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const { loading, request, error, clearError } = useHttp();

	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	const _apiKey = "apikey=4d466deb3be421a9b5ab16900a40f398";
	const _baseOffset = 210;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = 0) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description
				? `${char.description.slice(0, 210)}...`
				: "There is no description for this character",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
		};
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	return {
		loading,
		error,
		clearError,
		getAllCharacters,
		getCharacter,
		getAllComics,
		getComic,
	};
};

<<<<<<< HEAD
    const _transformCharaster = (char) => {
        // let descr = char.description;
        // if(descr.length < 1) descr = 'Data not Found!'
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'Data not found!',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    return {loading, error, getCharacter, getAllCharacters}
} 

export default useMarvelService;



/////////////toje robochi metod no bez ispolzovaniya katomnogo hooka
///////////// kotori nezavisimi i ego mojno peremeshat iz proektav proekt kastomni hook on vishe


// //import { v4 as uuidv4 } from 'uuid';

// class MarvelService {   //funkciya polucheniya Api v object
//     _apiBase = 'https://gateway.marvel.com:443/v1/public/';
//     _apiKey = 'apikey=4d466deb3be421a9b5ab16900a40f398';
//     _baseOffset = 210;
//     getResource = async (url) => {
//         let res = await fetch(url);

//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//         }

//         return await res.json();
//     }



    


//     getAllCharacters = async (offset = this._baseOffset) => { /*personaji*/
//         const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
//         return res.data.results.map(this._transformCharaster);
//     }

//     getCharacter = async (id) => { /*personaj*/
//         const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
//         return this._transformCharaster(res.data.results[0]);
//     }

//     _transformCharaster = (char) => {
//         // let descr = char.description;
//         // if(descr.length < 1) descr = 'Data not Found!'
//         return {
//             id: char.id,
//             name: char.name,
//             description: char.description ? `${char.description.slice(0, 210)}...` : 'Data not found!',
//             thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
//             homepage: char.urls[0].url,
//             wiki: char.urls[1].url,
//             comics: char.comics.items
//         }
//     }
// } 

// export default MarvelService;
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
export default useMarvelService;
>>>>>>> 9e18b2bd5 (-acastom__hooks)
