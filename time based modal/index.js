setTimeout(function() {
	$('#myModal').css("display", "block")

}, 3000)


var span = document.getElementsByClassName("close")[0];




span.onclick = function() {
   $('#myModal').css("display", "none")
}


};