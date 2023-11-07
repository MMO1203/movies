import { searchFilter, playVideo } from './search.js'

// Variables
const scrollBtns = document.querySelectorAll( '.scroll' );
const scrolling = document.querySelector( '.inner' );
const previewBtn = document.querySelectorAll( '#animePreview' );
const playAniBtn = document.querySelector( '.playTrail' );
const images = document.querySelectorAll( 'img' );
// download buttons
const downloadEpisodeBtn = document.querySelectorAll( '.downBtn' );
const seasonDownloadBtn = document.querySelectorAll( '.seaDownBtn' );

// scroll through on click Function or on mouse movement
scrollBtns.forEach( btn =>
{
    btn.addEventListener( 'click', () =>
    {
        if ( window.innerWidth <= 650 )
        {
            switch ( btn.id )
            {
                case 'forwards':
                    scrolling.scrollBy( 210, 0 );
                    break;
                case 'backwards':
                    scrolling.scrollBy( -210, 0 );
                    break;
            }
        } else if ( window.innerWidth <= 1060 )
        {
            switch ( btn.id )
            {
                case 'forwards':
                    scrolling.scrollBy( 270, 0 );
                    break;
                case 'backwards':
                    scrolling.scrollBy( -270, 0 );
                    break;
            }
        } else
        {
            switch ( btn.id )
            {
                case 'forwards':
                    scrolling.scrollBy( 286, 0 );
                    break;
                case 'backwards':
                    scrolling.scrollBy( -286, 0 );
                    break;
            }
        }
    } );
} );

// Search Filter Function
searchFilter()

// Play Anime toggle
playAniBtn.addEventListener( 'click', playVideo );

// the download functionality
downloadEpisodeBtn.forEach( download =>
{
    download.addEventListener( 'click', ( e ) =>
    {
        e.target.setAttribute( 'download', 'Dororo.mp4' );
        e.target.href = './img/EP.5.v0.360p.mp4';
    } );
} );

seasonDownloadBtn.forEach( season =>
{
    season.addEventListener( 'click', ( e ) =>
    {
        e.target.setAttribute( 'download', `Dororo.mp4` );
        e.target.href = './img/EP.5.v0.360p.mp4';
    } );
} );

// Add the play trail button functionality for previewing the Anime
/* previewBtn.forEach( preview =>
{
    preview.addEventListener( 'click', ( e ) =>
    {
        assignEL( preview );
        // const previewPage = document.querySelector( 'a[href="./displayed movie.html"]' );
        // previewPage.click();
    })
} )

function assignEL(element) {
    const heroBg = document.querySelector( '.displayHero' );
    console.log(heroBg);
    console.log(element);
} */

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
            generateAnimes( Array.from( response.data ) );
        } )
        .catch( err => console.error( err ) );
}

fetchRequest( url, 'GET' );

function generateAnimes ( animes )
{
    console.log( animes );
    for ( let i = 0; i < 8; i++ )
    {
        let html = `
            <div style="background-image: url(${ animes[ i ].image });" class="animeCard">
                <div class="animeCardInfo">
                    <div class="shifted">
                        <div class="cardShift">
                            <h5 class="animeCardTitle">${ animes[ i ].title }</h5>
                            <p></p>
                        </div>
                            <button class="playTrail" id="animePreview">
                                <img loading="lazy" src="../../img/iconmonstr-caret-right-lined-240.png" alt="A play trailer image">
                            </button>
                    </div>
                </div>
            </div>
        `;

        let html2 = `
        <div style="background-image: url(${ animes[ i + 10 ].image });" class="animeCard">
            <div class="animeCardInfo">
                <div class="shifted">
                    <div class="cardShift">
                        <h5 class="animeCardTitle">${ animes[ i + 10 ].title }</h5>
                        <p></p>
                    </div>
                    <button class="playTrail" id="animePreview">
                        <img loading="lazy" src="../../img/iconmonstr-caret-right-lined-240.png" alt="A play trailer image">
                    </button>
                </div>
            </div>
        </div>
        `;

        document.querySelector( '#addedTo' ).innerHTML += html2;
        document.querySelector( '.inner' ).innerHTML += html;
    }
}