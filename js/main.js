$(document).ready(function(){
    //Navbar Shrink
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 100){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")
        }
    })


            // Video PopUp
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup-close").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open")
            $("#player-1").attr("src","")
        }
        else{
            $("#player-1").attr("src",videoSrc)
            $(".video-popup").addClass("open")
        
        }
    });

    //Features-carousel
    $('#owl-example').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
     //Screenshots-carousel
     $('#owl-example2').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    //Testimonial-carousel
    $('#owl-example3').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    //Team-carousel
    $('#owl-example4').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});