

if (localStorage.getItem('FirstName') == null) {

    document.getElementById('input').style.display = 'block';
    document.getElementById('output').style.display = 'none';
}

else{

document.getElementById('output').style.display = 'block';
var result ="User already Log In" + "<br>" + "First Name : " +  localStorage.getItem("FirstName") + "<br>" + "Last Name : " + localStorage.getItem("LastName");
document.getElementById('result').innerHTML = result;

}


function myfun(){

var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
localStorage.setItem("FirstName", fname);
localStorage.setItem("LastName", lname);
document.getElementById('input').style.display = 'none';
document.getElementById('output').style.display = 'block';
// var getfname = localStorage.getItem("FirstName");
// var getlname = localStorage.getItem("LastName");


// alert("First Name is " + getfname);
// alert("Last Name is " + getlname);
// console.log(getfname);
// console.log(getlname);
}
function logout(){
    
    document.getElementById('input').style.display = 'block';
document.getElementById('output').style.display = 'none';
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    document.getElementById('output').style.display = 'none';
}