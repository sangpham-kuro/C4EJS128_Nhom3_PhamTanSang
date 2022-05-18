// let buttonDelete = '<button onclick="myFunction()">Click to Delete</button>';
// document.getElementById("").innerHTML += buttonDelete;

function myFunction(i) {
    let item = document.getElementById(i);
    console.log(item);
    item.parentNode.removeChild(item);

}