// //Always put jquery tag in body section just above the js tag.
//$("h1").css("color","red");



// //If we are putting js and jquery script tags in head section then:
// $(document).ready(function(){
//     $("h1").css("color","red");
// });


//Manipulating Styles with jquery
//$("h1").addClass('big-title margin-50');
//$("h1").removeClass("big-title");
//$("h1").hasClass("margin-50");      //It will give true as it is a class of h1

//Manipulating text with jquery
//$("h1").text("Bye");   //It will change the text
//$("button").text("Don't Click Me");
//$("button").html("<em>Hey</em>");
//$("button").text("<em>Hey</em>");



// //Using attributes:
// //1.)Get Attributes
// $("h1").attr("class");   //to get the name of class...try this in console


// //2.) Set Attributes
// console.log($("img").attr("src","goal1.png")); //to set an image

// $("a").attr("href" , "https://www.yahoo.com"); //to set an href tag



// //Using Event Listener
// *****$("h1").click(function() {
//     $("h1").css("color","purple");
// });

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }
// or
// $("button").click(function() {
//     $("h1").css("color","purple");
// });

//keypress
// $("input").keypress(function(event) {
//        console.log(event.key);
//     });

// $("document").keypress(function(event) {
//         console.log(event.key);
// });

//****** */ $("document").keypress(function(event) {
//    $("h1").text(event.key);
// });

// $("h1").on("mouseover",function() {
//     $("h1").css("color","purple");
// })

// $("h1").on("click",function() {
//         $("h1").css("color","purple");
//     })

// $("button").on("click",function() {
      
//         $("h1").toggle();
//         //$("h1").hide();
//         //$("h1").show();
//         // $("h1").fadeOut();
//         // $("h1").fadeIn();
//         //$("h1").fadeToggle();
//         //$("h1").sildeUp();
//         //$("h1").slideToggle();
//     })

    $("button").on("click",function() {
      
        //$("h1").animate({opacity:0.5});    //animate can only be used for changing numeric values. We can't change anything else like color as it doesn't contain color. 
       // $("h1").animate({margin: "20%"});  
        //$("h1").animate({margin: 20});  
        $("h1").slideUp().slideDown().animate({opacity:0.5});  
    })
      

// //in console
//$("h1").before("<button>New</button>");     //to add a button before h1 tag
//$("h1").after("<button>New</button>");     //to add a button after h1 tag
//$("h1").prepend("<button>New</button>");     //to add a button inside h1 tag before text of h1
//$("h1").append("<button>New</button>");     //to add a button inside h1 tag after text of h1

//$("button").remove();