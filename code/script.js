// Add your code here

let _inout = prompt("what is your name","");
if (_inout === "Admin"){
  let password = prompt("what is the password?","");
  if (password === "TheMaster"){
    alert("Welcome");
  }
  else if (password === "" || password === null){
    alert("canceled");
  }
  else {
    alert("wrong password");
  }
}
else if(_inout === "" || _inout === null){
  alert("canceled");
}
else{
  alert("i dont know you");
}
