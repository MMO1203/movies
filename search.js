// Search Filter Function
function searchFilter ()
{
    let searchList = document.querySelectorAll( '.animeCardTitle' );
    let searchable = Array.from( searchList );
    const searchInput = document.querySelector( '#search' );
    const resDisplay = document.querySelector( '#searchedList' );
    searchInput.addEventListener( 'input', () =>
    {
        // console.time('TESTING')
        const searched = searchable.filter( item =>
        {
            return item.innerHTML.toLowerCase().includes( searchInput.value.toLowerCase() )
        } );

        display( searched );
        // console.timeEnd('TESTING')
    } );

    function display(searchList) {
        const listItem = searchList.map(item => {
            const words = item.innerHTML;
            return `<a href="./displayed movie.html">${words}</a>`;
        }).join('');

        if (searchInput.value === '') {
            return resDisplay.innerHTML = '';
        };

        resDisplay.innerHTML = listItem;
    }
};

// Play Anime toggle
function playVideo() {
    const moviePlayer = document.querySelector('#moviePlayer');
    const closeMovieBtn = document.querySelector('#close');
    const video = document.querySelector('#video');

    moviePlayer.style.transform = 'translateY(0)';
    video.play();

    closeMovieBtn.addEventListener( 'click', () =>
    {
        moviePlayer.style.transform = 'translateY(-100%)';
        video.pause();
    } );
}

export {searchFilter, playVideo}