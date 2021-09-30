var days = document.querySelector('.days');



var hours = document.querySelector('.hours');

var minutes = document.querySelector('.minute');

var seconds = document.querySelector('.seconds');

days.innerHTML = new Date().getDate();

hours.innerHTML = new Date().getHours();


minutes.innerHTML = new Date().getMinutes();

seconds.innerHTML = new Date().getSeconds();






const slides = document.querySelectorAll(".slide");

const numberOfSlides = slides.length;

var slideNumber = 0;










    



    var reapeter = () => {
Playslider = setInterval(function(){
slides.forEach((slide) => {
slide.classList.remove("active");


});


slideNumber++;


if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
}

slides[slideNumber].classList.add("active");






},4000);




    }


    reapeter();


  

    
 

       

   $(document).ready(function(){

$('.shop').click(function(){

    $('ul').toggleClass('show');
})


   })

   $(document).ready(function(){

    $('.sizing').click(function(){
    
        $('ul').toggleClass('visible');
    })
    
    
       })