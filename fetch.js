// function to get all the movies from a database Function
const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=23470';
function fetchRequest ( url, type )
{
    const options = {
        method: type,
        headers: {
            'X-RapidAPI-Key': '98ce6240e7msh9cac7e6fa9ba2ecp1fca1ejsnd327d564f380',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };

    fetch( url, options )
        .then( response => response.json() )
        .then( response =>
        {
            console.log( response.data )
            for ( let i = 0; i < 20; i++ )
            {
                console.log( response.data[ i ] );
            }
        } )
        .catch( err => console.error( err ) );
}

export default fetchRequest