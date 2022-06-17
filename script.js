//example of how DOM API handle events click mouse over etc
document.getElementById("box2").addEventListener("click", changeColor);
function changeColor() {
    document.getElementById("box2").innerHTML="CLICK";
    document.getElementById("box2").style.backgroundColor="orange";

};
