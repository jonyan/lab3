'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Hello Brian");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);

}

function submitClick(e) {
	e.preventDefault();

	var projectID = $("#project").val();
	var replaceDescription = $("#description").val();

	$(projectID).animate({
		width: $("#width").val()
	}, 700);
	var containingProject = $("a.thumbnail").closest(".project"); 
	var description = $(containingProject).find(".project-description");
	if (description.length > 0) {
		description.text(replaceDescription);
	}
}


function projectClick(e) { 
	// Cancel the default action, which prevents the page from reloading
  e.preventDefault();

  // In an event listener, $(this) is the element that fired the event
  var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);
  var containingProject = $(this).closest(".project"); 
  var description = $(containingProject).find(".project-description");
  if (description.length == 0) { 
     $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
     $(".project-description").hide();
     $(".project-description").fadeIn();
  } else { 
  		$(".project-description").fadeToggle();
     // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
  }
}

