function _load(){
	
	function clickEvent(){

		document.querySelector("body").classList.toggle("clicked");
	}
	
	document.getElementById("open").addEventListener("click", clickEvent);
}


window.addEventListener("load", _load);

var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

     
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

