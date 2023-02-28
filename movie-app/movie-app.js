"use strict"


$('form').on('submit',function(evt){
    evt.preventDefault();
    let movieTitle = $('#movie-title').val();
    let rating = $('#rating').val();
    
    let movieListItem = $("<li>").text(`${movieTitle} ${rating}`);
    $("<button class='remove' value='remove'>").appendTo(movieListItem);
    $('.remove').css('height', '20px')
    movieListItem.appendTo($('ul'));
})

// $('.remove').css('height', '20px')