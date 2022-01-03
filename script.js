 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function show()
{
var reservation=document.querySelector('.reservation')
reservation.style.display = (reservation.style.display == "none") ? "block" : "none";
}
document.getElementById('close_reservation').onclick = function() {
	var reservation=document.querySelector('.reservation')
	reservation.style.display = "none";
}
document.getElementById('close_successfully').onclick = function() {
	var successfully=document.querySelector('.successfully')
	successfully.style.display = "none";
}
document.getElementById('submit').onclick = function() {
	var successfully=document.querySelector('.successfully')
	successfully.style.display = "block";
    var reservation=document.querySelector('.reservation')
	reservation.style.display = "none";
}

