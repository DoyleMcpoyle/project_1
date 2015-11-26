$(document).ready(function(){
	  //Take div into a js variable
	  var div = $("#section1");
	  var div1=$("#section2");
	  var div2=$("#section3");
	  var div3=$("#section4");

	  //Take the current position (vertical position from top) of your div in the variable
	  var pos = div.position();
	  var pos1= div1.position();
	  var pos2= div2.position();
	  var pos3= div3.position();

	  console.log(pos1.top);
	  //Now when scroll event trigger do following
	  $(window).scroll(function () {
	  	var windowpos = $(window).scrollTop();
	  	console.log(windowpos);
	   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
	   // I am taking 100px scroll, you can take whatever you need
	   if (windowpos >= (pos.top - 100)) {
	   	div.addClass("lightSpeedIn");
	   }
	   if (windowpos >= (pos1.top - 300)) {
	   	div1.addClass("rollIn");
	   }
	   if (windowpos >= (pos2.top - 600)) {
	   	div2.addClass("bounceInRight");
	   }
	   if (windowpos >= (pos3.top - 900)) {
	   	div3.addClass("flip");
	   }
	   //If scroll is less than 100px, remove the class wow so that your content will be hidden again 
	   //else {
	     //div.removeClass("wow");
	   //}

	   //Note: If I want the content to be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
	});

	  var lastScrollTop= 0;
	  $(window).scroll(function(event){
	  	var windowpos= $(this).scrollTop();

	  	if (windowpos > lastScrollTop){
	  		if (windowpos <= (pos.top - 100)) {
	  			div.addClass("lightSpeedIn");
	  		}
	  		if (windowpos <= (pos1.top - 300)) {
	  			div1.addClass("rollIn");
	  		}
	  		if (windowpos <= (pos2.top - 600)) {
	  			div2.addClass("bounceInRight");
	  		}
	  		if (windowpos <= (pos3.top - 900)) {
	  			div3.addClass("flip");
	  		}
	  	} else {

	  	}
	  	lastScrollTop= windowpos;
	  });


	});

	
$.ajax({
  url: 'https://api.github.com/user/repos?access_token=e7b0ce9fbdf5c5a95c2f720424f2488e8f45c97f',
  success: function(data) {
  	//console.log(data);
  	for(var i=0; i<data.length; i++) {
  		console.log(data[i].name);
  		$('.github').append("<p><a href='"+data[i].html_url+"'>"+data[i].name+"</a></p>");
  		console.log(data[i].html_url);
  	}
  	// write a loop to iterate over all the repos
  	// for each repo, run the code below
  	// replacing things as necessary
    
    // var repoLink = $('<a href=""></a>');
    repoLink.attr('href', data[0].html_url);


    repoLink.text(data[0].name);
    $('body').append(repoLink);

  	}
  });





