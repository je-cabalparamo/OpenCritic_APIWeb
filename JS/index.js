//const contenido = document.querySelector('#contenido')
let gameDB = []

document.addEventListener('DOMContentLoaded', () => {
    loadReviews()
})

const loadReviews = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ad36e289afmshec1552907ff42a0p187d4cjsna8c0ba4a092a',
                'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
            }
        };
        
        fetch('https://opencritic-api.p.rapidapi.com/game/reviewed-this-week', options)
            .then(response => response.json())
            .then(response => {
                gameDB = response
                console.log('Games', gameDB)
            })
            .catch(err => console.error(err));
}