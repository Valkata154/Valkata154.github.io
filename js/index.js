// Makes the navbar change background when scrolling and add active class to nav links
$(document).ready(function(){    
    // Declare all the variables for each section   
    var scroll_start = 0;
    var header = $('.header').offset().top;
    var about = $('.about').offset().top;
    var education = $('.education').offset().top;
    var skills = $('.skills').offset().top;
    var contact = $('.contact').offset().top;
    
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        var bool = $(window).scrollTop() + $(window).height() == $(document).height();
        // When in section HEADER
        if(scroll_start >= header && scroll_start < about){
            // Change background of the navbar
            if($('.about').width() > 901){
                $(".navbar").css('background-image', 'none');
                $(".navbar").css('background-color', 'transparent');
            } else {
                $(".navbar").css('background-image', 'linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7))');
                $(".navbar").css('background-color', 'none');
            }

            // Make HOME link active and remove from others
            $("#home").addClass("nav-active");
            $("#about").removeClass("nav-active");
        // When in section ABOUT
        }else if(scroll_start >= about && scroll_start < education){
            // Change background of the navbar
            $(".navbar").css('background-image', 'linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7))');
            $(".navbar").css('background-color', 'none');

            // Make ABOUT link active and remove from others
            $("#home").removeClass("nav-active");
            $("#about").addClass("nav-active");
            $("#education").removeClass("nav-active");
        // When in section EDUCATION
        }else if(scroll_start >= education && scroll_start < skills){
            // Change background of the navbar
            if($('.about').width() > 901){
                $(".navbar").css('background-image', 'none');
                $(".navbar").css('background-color', 'transparent');
            } else {
                $(".navbar").css('background-image', 'linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7))');
                $(".navbar").css('background-color', 'none');
            }

            // Make EDUCATION link active and remove from others
            $("#home").removeClass("nav-active");
            $("#education").addClass("nav-active");
            $("#about").removeClass("nav-active");
            $("#skills").removeClass("nav-active");
        // When in section SKILLS
        }else if(scroll_start >= skills && scroll_start < contact && bool === false){
            // Change background of the navbar
            $(".navbar").css('background-image', 'linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7))');
            $(".navbar").css('background-color', 'none');

            // Make EDUCATION link active and remove from others
            $("#home").removeClass("nav-active");
            $("#education").removeClass("nav-active");
            $("#skills").addClass("nav-active");
            $("#contact").removeClass("nav-active");
        }else if(scroll_start >= contact || bool === true){
            // Change background of the navbar
            // if($('.about').width() > 901){
            //     $(".navbar").css('background-image', 'none');
            //     $(".navbar").css('background-color', 'transparent');
            // } else {
            $(".navbar").css('background-image', 'linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7))');
            $(".navbar").css('background-color', 'none');

            // Make EDUCATION link active and remove from others
            $("#home").removeClass("nav-active");
            $("#skills").removeClass("nav-active");
            $("#contact").addClass("nav-active");
        }
    });
 });

 // Function to close navbar after click
 $('.nav-link').click(function(){
    $('.navbar-collapse').removeClass('show');
 });

 // SMOOTH SCROLLING
$('a[href*="#"]').click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top + 10
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Makes the SHINE animation dissapear when hovering the image due to glitch
 $('.about__img-container').hover(function (){
    // When hovering add overflow and remove the shine class
    $(".about__img-shine").css('overflow', 'visible');
    $(".about__img-remove").removeClass("about__img-shine");
    }, function (){
    // When hover stops remove overflow and add the class back
    $(".about__img-remove").addClass("about__img-shine");
    $(".about__img-shine").css('overflow', 'hidden');
 });


 // Splits the motivational and personal parts in the about section
$(document).ready(function(){ 
    // Declare all the needed variables  
    var scroll_start = 0;
    var startchange = $('.about__information--personal');
    var offset = startchange.offset();
    // Add animations if width is more than 900px
    if($('.about').width() > 901){
        if (startchange.length){
            $(document).scroll(function() {
                // Hardcode the value so that is start a litle after the start of the section
                scroll_start = $(this).scrollTop() + 170;
                if(scroll_start  > offset.top) {
                    // Adding the split animation
                    $(".about__information--personal").css('animation', 'moveRight 2s ease forwards');
                    $(".about__information--motivational").css('animation', 'moveLeft 2s ease forwards');

                    // Adding the border where the parts were split
                    $(".about__information--personal").css('border-right', '.5rem solid white');
                    $(".about__information--motivational").css('border-left', '.5rem solid white');
                }
            });
        }
    }
});

 // Add dissapear animation when button is clicked and remove it after finish
 $(".education-uni__btn").click(function() {
    // Add the class animation if width is more than 900px 
    if($('.about').width() > 901){
        $('.education-uni__details').addClass("dissapear-anim");
        setTimeout(function() {   // Wait two seconds and remove class animation
            $('.education-uni__details').removeClass("dissapear-anim");
            $(".popup__details").css('visibility', 'hidden');  
            $(".popup__btn").css('visibility', 'hidden');
            $(".popup__subject").css('visibility', 'hidden'); 
        }, 2000);
    }
  });


// Expand pop-up on button click
$(".subject__button").click(function(){
    // Add expand class to show the popup
    $(".popup").addClass("popup-expand");
    setTimeout(function() { // After half a second do the following
        // Blur the body
        $(".body").addClass("blur"); 
        // Add animations to the different elements in the popup
        $(".popup__details").css('visibility', 'visible');
        $(".popup__btn").css('visibility', 'visible');
        $(".popup__subject").css('visibility', 'visible'); 
        $(".popup__btn").css('animation', 'appearTopRight 1s forwards');
        $(".popup__subject").css('animation', 'appearTop 1s forwards'); 
        $(".popup__details").css('animation', 'appearBottom 1s forwards');  
     }, 600);
});

// If popup exit button is clicked close the popup
$(".popup__btn").click(function(){
    // Add animation for popup to dissapear and blur
    $(".popup-expand").css('animation', 'dissapearLeft 1s forwards');
    $(".body").removeClass("blur");
    setTimeout(function() { // After a second do the following
        // Remove all of the added classes and css, so that they can be refreshed
        $(".popup-expand").css('animation', 'none');
        $(".popup").removeClass("popup-expand");
        $(".popup__btn").css('animation', 'none');  
        $(".popup__subject").css('animation', 'none');  
        $(".popup__details").css('animation', 'none');  
     }, 1000);
});

//////////////////////////////////////////////////////////////////
// LOGIC TO CHANGE THE TEXT FOR EACH SUBJECT IN DIFFERENT YEARS //
//////////////////////////////////////////////////////////////////

// If button for YEAR ONE is clicked
$(".education-uni__btn--1").click(function() {
    // Make it active and remove active from other buttons
    $('.education-uni__btn--1').addClass("active");
    $('.education-uni__btn--2').removeClass("active");
    $('.education-uni__btn--3').removeClass("active");
    $('.education-uni__btn--4').removeClass("active"); 

    // After 1 second change all the inner HTML for FIRST YEAR of university
    setTimeout(function() {    
        // Year
        document.getElementById('uni__year').innerHTML = "First Year";

        // Each subject name
        document.getElementById('subject--1').innerHTML = "Computer Systems 1";
        document.getElementById('subject--2').innerHTML = "Information Systems in Organisations";
        document.getElementById('subject--3').innerHTML = "Foundations of Software Design and Development";
        document.getElementById('subject--4').innerHTML = "Introduction to Human Computer Interaction";
        document.getElementById('subject--5').innerHTML = "Programming Fundamentals";
        document.getElementById('subject--6').innerHTML = "Mathematics for Software Engineering";

        // Each subject grade
        document.getElementById('grade--1').innerHTML = "94%";
        document.getElementById('grade--2').innerHTML = "66%";
        document.getElementById('grade--3').innerHTML = "98%";
        document.getElementById('grade--4').innerHTML = "74%";
        document.getElementById('grade--5').innerHTML = "92%";
        document.getElementById('grade--6').innerHTML = "83%";
     }, 1000);
  });

// If button for YEAR TWO is clicked
  $(".education-uni__btn--2").click(function() {
    // Make it active and remove active from other buttons
    $('.education-uni__btn--2').addClass("active");
    $('.education-uni__btn--1').removeClass("active");
    $('.education-uni__btn--3').removeClass("active");
    $('.education-uni__btn--4').removeClass("active");
    
    // After 1 second change all the inner HTML for SECOND YEAR of university
    setTimeout(function() {    
        // Year
        document.getElementById('uni__year').innerHTML = "Second Year";

        // Each subject name
        document.getElementById('subject--1').innerHTML = "Operating Systems";
        document.getElementById('subject--2').innerHTML = "Database Systems";
        document.getElementById('subject--3').innerHTML = "Object Oriented Software Development";
        document.getElementById('subject--4').innerHTML = "Algorithms and Data Structures";
        document.getElementById('subject--5').innerHTML = "Mobile Applications Development";
        document.getElementById('subject--6').innerHTML = "Software Engineering Methods";

        // Each subject grade
        document.getElementById('grade--1').innerHTML = "98%";
        document.getElementById('grade--2').innerHTML = "79%";
        document.getElementById('grade--3').innerHTML = "90%";
        document.getElementById('grade--4').innerHTML = "---";
        document.getElementById('grade--5').innerHTML = "---";
        document.getElementById('grade--6').innerHTML = "---";
     }, 1000);
  });


// If button for YEAR THREE is clicked
  $(".education-uni__btn--3").click(function() {
    // Make it active and remove active from other buttons
    $('.education-uni__btn--3').addClass("active");
    $('.education-uni__btn--1').removeClass("active");
    $('.education-uni__btn--2').removeClass("active");
    $('.education-uni__btn--4').removeClass("active");   
    
    // After 1 second change all the inner HTML for THIRD YEAR of university
    setTimeout(function() {    
        // Year
        document.getElementById('uni__year').innerHTML = "Third Year";

        // Each subject name
        document.getElementById('subject--1').innerHTML = "Artificial Intelligence";
        document.getElementById('subject--2').innerHTML = "Data Analytics";
        document.getElementById('subject--3').innerHTML = "Software Engineering";
        document.getElementById('subject--4').innerHTML = "No Information At The Moment";
        document.getElementById('subject--5').innerHTML = "No Information At The Moment";
        document.getElementById('subject--6').innerHTML = "No Information At The Moment";

        // Each subject grade
        document.getElementById('grade--1').innerHTML = "91%";
        document.getElementById('grade--2').innerHTML = "71%";
        document.getElementById('grade--3').innerHTML = "81%";
        document.getElementById('grade--4').innerHTML = "---";
        document.getElementById('grade--5').innerHTML = "---";
        document.getElementById('grade--6').innerHTML = "---";
     }, 1000);
  });

// If button for YEAR FOUR is clicked
$(".education-uni__btn--4").click(function() {
    // Make it active and remove active from other buttons
    $('.education-uni__btn--4').addClass("active");
    $('.education-uni__btn--1').removeClass("active");
    $('.education-uni__btn--2').removeClass("active");
    $('.education-uni__btn--3').removeClass("active");

    // After 1 second change all the inner HTML for FOURTH YEAR of university
    setTimeout(function() {    
        // Year
        document.getElementById('uni__year').innerHTML = "Fourth Year";

        // Each subject name
        document.getElementById('subject--1').innerHTML = "No Information At The Moment";
        document.getElementById('subject--2').innerHTML = "No Information At The Moment";
        document.getElementById('subject--3').innerHTML = "No Information At The Moment";
        document.getElementById('subject--4').innerHTML = "No Information At The Moment";
        document.getElementById('subject--5').innerHTML = "No Information At The Moment";
        document.getElementById('subject--6').innerHTML = "No Information At The Moment";

        // Each subject grade
        document.getElementById('grade--1').innerHTML = "---";
        document.getElementById('grade--2').innerHTML = "---";
        document.getElementById('grade--3').innerHTML = "---";
        document.getElementById('grade--4').innerHTML = "---";
        document.getElementById('grade--5').innerHTML = "---";
        document.getElementById('grade--6').innerHTML = "---";
     }, 1000);
  });


///////////////////////////////////////////////////////////////////////
// LOGIC TO CHANGE THE TEXT FOR POPUP FOR EACH SUBJECT FOR EACH YEAR //
///////////////////////////////////////////////////////////////////////

// If button for FIRST subject is clicked
$("#subject__button--1").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Computer Systems 1";
        document.getElementById('popup__details').innerHTML = "<span>This module gave me</span> a practical introduction to the basic workings of computer systems. That included computer hardware architecture, operating systems like Windows and Linux and a practical understanding of the structure and operation of networks, including the Internet. <br><br><span>Learning outcomes</span> include being able to: Identify the main hardware components of a computer, understand the basic architecture and operating principles of a computer, identify the main components of computer networks, understand the basic principles of data communications and computer networks, understand the principles of Operating Systems and describe the main feature of two different common operating systems.<br><br><span> Assessment</span> was in the form of three class tests each having 33.3% of the final module mark: Computer Systems - <span>100%</span>, Networking - <span>95%</span>, Operating Systems - <span>87.5%</span>.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Operating Systems";
        document.getElementById('popup__details').innerHTML = "<span>In this module I gained</span> knowledge about fundamental areas of operating systems that underpin much of the technology of the internet age. Emphasising both on design issues and fundamental principles in contemporary systems and getting a solid understanding of the key structures and mechanisms of operating systems by focusing on Unix based Operating Systems and Windows. Additionally, I got practical experience on Windows command line, named Powershell understanding the similarities and differences between the two dominating operating systems.<br><br><span>Learning outcomes</span> include being able to: identify fundamental principles, security and design issues in modern operating systems, describe in detail how the key components of an operating system work and interact, demonstrate extended knowledge of UNIX and Windows through Linux and Powershell command lines usage, demonstrate the ability to develop robust Unix shell scripts through Linux. <br><br><span>Assessment</span> was in the form of one Linux group coursework (<span>100%</span>) having 40% of the final module mark and one class test (<span>97%</span>) having 60% of the final module mark.";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

// If button for SECOND subject is clicked
$("#subject__button--2").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Information Systems in Organisations";
        document.getElementById('popup__details').innerHTML = "<span>This module gave me knowledge about:</span> nature of data, information and knowledge in an organisational context, general systems theory, information systems in business, including B2B technologies, storage and security of business data, career roles in IT.<br>I achieved the following <span>skills</span>: interpersonal, generic technical, information and academic writing. <br><br><span>Learning outcomes</span> include being able to: identify the characteristics of business organisations and their use of information systems, extract and present oral and written technical information in a business context using business standards and formats,  identify and comment on a range of roles and responsibilities prevalent in the information systems field.<br><br><span> Assessment</span> was in the form of one class test (<span>---</span>) having 40% of the final module mark, one report (<span>---</span>) having 20% of the final module mark, two group oral presentations (<span>---</span>) having 13.3% of the final module mark each and one group report (<span>---</span>)  having 13.4% of the final module mark.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Database Systems";
        document.getElementById('popup__details').innerHTML = "<span>In this module I gained</span> knowledge about database theory, database design, database use, database administration, non-relational database systems and security. <br><br><span>Learning outcomes</span> include being able to: describe database architecture with reference to current standards, design and implement a relational database schema using standard techniques, use standard languages to access and manipulate data, perform basic administrative operations on an example database platform, secure database systems against unauthorised access.<br><br><span>Assessment</span> was in the form of one coursework (<span>92%</span>) having 50% of the final module mark and one written exam (<span>66%</span>) having 50% of the final module mark.";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

// If button for THIRD subject is clicked
$("#subject__button--3").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Foundations of Software Design and Development";
        document.getElementById('popup__details').innerHTML = "<span>In this module I learned</span> to design and write computer programs in Java, with an emphasis on object-oriented programming using Eclipse as an Integrated Development Environment. I learned Java basics, how to write OOP programs and how to make UML diagrams.<br><br><span>Learning outcomes</span> include being able to: design algorithms to solve simple problems, implement simple algorithms in Java, identify the key concepts of object-oriented programming, implement simple object-oriented designs in Java, identify key computing structures and concepts.<br><br><span> Assessment</span> was in the form of one class test (<span>96%</span>) having 25% of the final module mark, one group presentation (<span>100%</span>) having 15% of the final mark and one coursework (<span>96.4%</span>) having 60% of the final module mark.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Object Oriented Software Development";
        document.getElementById('popup__details').innerHTML = "<span>In this module I gained</span> knowledge about: problem solving approaches and algorithmic expression, object oriented software development in C#, introduction to data structures using C# collections, designing and developing user interfaces using C# controls, application design techniques, practical testing techniques. <br><br><span>Learning outcomes</span> include being able to: implement and debug C# applications using an integrated development environment, design, develop and test object-oriented C# applications, develop C# applications with graphical user interfaces, file handling and data structures, design test cases and generate test specifications and reports.<br><br><span>Assessment</span> was in the form of one coursework (<span>95%</span>) having 20% of the final module mark and another coursework (<span>88%</span>) having 80% of the final module mark.";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

// If button for FOURTH subject is clicked
$("#subject__button--4").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Introduction to Human Computer Interaction";
        document.getElementById('popup__details').innerHTML = "<span>In this module I learned</span> the basic theory and methods of HCI, including human-centred design, the human-centred development lifecycle to ensure creation of highly usable, and accessible, interactive applications and user experiences. The module also considered aspects of privacy and security and directly addresses a range of transferable skills including information literacy, team working and professional skills.<br><br><span>Learning outcomes</span> include being able to: explain how effective design can ensure usability and accessibility, apply human-centred approaches to the design of systems and experiences, design and evaluate a variety of interactive applications, deploy a range of strategies for the communication of technical material, work effectively as a member of a team.<br><br><span>Assessment</span> was in the form of one class test (<span>67%</span>) having 60% of the final module mark and one group project (<span>83%</span>) having 40% of the final mark.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Algorithms and Data Structures";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

// If button for FIFTH subject is clicked
$("#subject__button--5").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Programming Fundamentals";
        document.getElementById('popup__details').innerHTML = "<span>In this module I gained</span> a deeper understanding of programming by looking at how low-level concepts such as memory management and functions calls actually work.<br><br><span>Learning outcomes</span> include being able to: design, develop and test computer programs in a suitable systems programming language, develop applications that utilise low-level machine programming techniques, understand the concepts required to undertake low-level systems programming, develop problem solving skills involving low-level machine considerations, knowledge of secure coding standards as specified by appropriate certificating body. <br><br><span>Assessment</span> was in the form of two courseworks both having 60% of the final module mark. First (<span>100%</span>) was 40% of the coursework component and the second (<span>100%</span>) 60% of the coursework component. Also a written exam (<span>81%</span>) having 40% of the module final mark.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Mobile Applications Development";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

// If button for SIXTH subject is clicked
$("#subject__button--6").click(function() {
    // Check which year button is active and change the text to the appropriate subject and details
    // Year One
    if(document.querySelector("#education-uni__btn--1").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Mathematics for Software Engineering";
        document.getElementById('popup__details').innerHTML = "<span>In this module I learned</span> basic mathematical concepts, such as basic discrete mathematics, Boolean and other logics, set theory, and number theory. The aim was to improve the computational competence (i.e., the ability to implement and evaluate functions for basic visualisation, modelling and processing tasks) as well as 'basic mathematical thinking' (i.e., the ability to model problems and their solutions). The emphasis was on a practical, programming-oriented introduction to the materials, demonstrating the usefulness of mathematics as a tool for software engineering. I also wrote small programs that explore mathematical concepts using a functional language. <br><br><span>Learning outcomes</span> include being able to: understand basic mathematical concepts applicable for software engineering, write code that implements a programming solution to basic mathematical problems, develop basic mathematical problem solving skills, understand basic number theory and its application to cryptography.<br><br><span>Assessment</span> was in the form of two math tests both having 60% of the final module mark. First (<span>75.63%</span>) was 50% of the math test component and the second (<span>73.17%</span>) 50% of the math test component. Also a Haskell coursework (<span>97%</span>) having 40% of the module final mark.";
    // Year Two
    }else if(document.querySelector("#education-uni__btn--2").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "Software Engineering Methods";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Three
    }else if(document.querySelector("#education-uni__btn--3").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    // Year Four
    }else if(document.querySelector("#education-uni__btn--4").classList.contains("active")){
        document.getElementById('popup__subject').innerHTML = "No Information At The Moment";
        document.getElementById('popup__details').innerHTML = "No Information Available";
    }
});

  
