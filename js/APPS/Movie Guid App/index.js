let movieNameRef = document.getElementById("movie-name"),
    searchBtn = document.getElementById("search-btn"),
    result = document.getElementById("result");

    //function to fetch daata from API

    let getMovie = () => {
        let movieName = movieNameRef.value;
        let url = `http://www.omdbapi.com/?i=tt3896198&t=${movieName}&apikey=${key}`;
        //http://www.omdbapi.com/?i=tt3896198&apikey=34c48b6

        //if input field is empty

        if(movieName.length <= 0){
            console.log('OK');
            result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
            
        }

        //if input isn't empty
            else {
                fetch(url).then((resp) => resp.json()).then((data)=>{
                        // if movie exist in database
                        if(data.Response == "True"){
                            console.log(data);
                            result.innerHTML = `
                            <div class="info">
                                <img src="${data.Poster}" class="poster">
                                <div>
                                    <h2>${data.Title}</h2>
                                    <div class="rating">
                                        <img src="star-icon.svg">
                                        <h4>${data.imdbRating}</h4>
                                    </div>
                                    <div class="details">
                                        <span>${data.Rated}</span>
                                        <span>${data.Year}</span>
                                        <span>${data.Runtime}</span>
                                    </div>
                                    <div class="genre">
                                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                                    </div> 
                                </div> 
                            </div>    
                            <h3>Plot:</h3>
                            <p>${data.Plot}</p>
                            <h3>Cast:</h3>
                            <p>${data.Actors}</p>          
                            `;
                        }

                        // if movie dosn't exist in database
                     else {
                        result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                     }   
                })
                //if error accurs
                .catch(()=>{
                    result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
                });
            }
         
    };


    searchBtn.addEventListener('click',getMovie);
   // window.addEventListener('load', getMovie);