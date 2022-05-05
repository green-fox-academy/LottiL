//vmi css, hogy látszon h melyikre klikkeltem

async function getMovies() {
    try {
        const name = document.querySelector('#name').value;
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}&format=json`);        

        if (response.ok) {
            const names = document.querySelector('#names');
            names.innerHTML = "";
            const data = await response.json();
            for (let i = 0; i < data.results.length; i++) {
                const oneName = document.createElement('li');
                names.appendChild(oneName);
                oneName.textContent = data.results[i].name;
                oneName.onclick = function(){
                    getTitle(data.results[i]);
                }
            }
        } else {
            alert(response.statusText);//vagy szépen beleírjuk egy hibaüzenetes ablakba
        }
    } catch (error) {
        alert(error);
    }
}

/* async function getTitle(name) {
    try {
        const films = document.querySelector('#films').value;
        const response = await fetch(`https://swapi.dev/api/films/?search=${films}&format=json`);        

        if (response.ok) {
            
            const films = document.querySelector('#films');
            const data = await response.json();
            for (let i = 0; i < name.films.length; i++) {
                console.log(i)
                console.log(films)
                console.log(data)
                const oneFilm = document.createElement('li');
                films.appendChild(oneFilm);
                oneFilm.textContent = data.title;
            }
        } else {
            alert(response.statusText);//vagy szépen beleírjuk egy hibaüzenetes ablakba
        }
    } catch (error) {
        alert(error);
    }
} */

/* function getTitle(name){
    const films = document.querySelector('#films');
    for (let i = 0; i < name.films.length; i++) {
        const oneFilm = document.createElement('li');
        films.appendChild(oneFilm);
        oneFilm.textContent = name.films[i];
    }    
} */

async function getTitle(name){
    const films = document.querySelector('#films');
    films.innerHTML = "";
    for (let i = 0; i < name.films.length; i++) {
        const oneFilm = document.createElement('li');
        films.appendChild(oneFilm);

        try {
            const film = name.films[i];
            const response = await fetch(`${film}?format=json`);    
    
            if (response.ok) {
                const data = await response.json();
                oneFilm.textContent = data.title;
            } else {
                alert(response.statusText);//vagy szépen beleírjuk egy hibaüzenetes ablakba
            }
        } catch (error) {
            alert(error);
        }
    }    
} 

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search').onclick = getMovies;
});