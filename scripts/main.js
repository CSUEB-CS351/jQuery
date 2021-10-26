"use strict"

const setupArticles = ()=> {
    $('.top-section p').hide();
    $(".top-article .article-header").on("mouseenter", function() {
        $(this).siblings('p').slideDown(1000, function (){
            $(this).addClass('attention');
        });
    })
    
    $('.top-article').on('mouseleave', function(){
        $(this).children('p')
            .slideUp(200)
            .removeClass('attention');
    })
    
    $('.top-article button').on('click', function(){
        $(this).parent().css('background-color', 'lightblue');
    })
    
}

let isLeft = true;

const setupBox = ()=> {
    
    $('.grab').on('click', function (){
        if(isLeft) {
            const button_text = $(this).text();
            $('#box').text(button_text);
            $("#box").append(' Lives!');
            
            $('#box').append(`<img src="images/${$(this).data('photo')}">`);
        }
    })
    
    
    $('.animate button').on('click', function(){
        if(isLeft) {
            $('#box').animate({

                left: '250px',
                width: '400px',
                height: '200px',
                fontSize: '3em',
                backgroundColor: 'green'
            }).animate({
                backgroundColor: 'purple',
                fontSize: '2em'
            })
            isLeft = false;
        } else {
            $('#box').animate({
                left: '50px',
                width: '100px',
                height: '100px',
                fontSize: '1em',
                backgroundColor: 'black'
                
            })
            isLeft = true;
        }
    })
}

$(function () {
    // $("p").hide().fadeIn(3000);
    // $("#button1").on("click", function() {
    //     $("#article1 p").toggle();
    // })
    
    setupArticles();
    setupBox();
})