document.addEventListener("DOMContentLoaded", function(event) {
    alert('Welcome to my first holberton project!');
var thumbnailElement = document.getElementById("smart_thumbnail")
    thumbnailElement.addEventListener("click", function() {
	alert("click again and see what happen");

	if (thumbnailElement.className == "") {
	    (thumbnailElement.className = "small")
	}else{
	    (thumbnailElement.className = "")
	}

    });
});
