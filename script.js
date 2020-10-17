// Assignment Code
// program started
let generatepasswordBtn = document.querySelector("#generate");
// All the element are defined
let onlyupperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let onlylowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let onlynumbers=["0","1","2","3","4","5","6","7","8","9","0"]
let onlysymbols=["!","@","#","$","%","&","^","*","+","?"]
// welcomes you on the page
window.onload = alert("Welcome! Please click 'Generate password' to start!");
function generateOptions()
{
    // prompt the user to enter password size

 let length= parseInt(prompt("how many characters will your password contains?"));
  if (length<8)
  {
    alert("You must enter atleast 8 character please!!!");
    return;
  }
  if (length>128)
  {
    alert("Invalid entry!!! make sure its less that 128 character");
    return;
  }
//   Defining the element
  let includesymbols= confirm("Do you wants to have symbols in your password?");
  let includeupperCase= confirm("Do you wants to have uppercase in your password?");
  let includelowerCase= confirm("Do you wants to have lowercase in your password?");
  let includenumbers= confirm("Do you wants to have numbers in your password?");
  if (!includesymbols && !includenumbers && !includelowerCase && !includeupperCase)
  {
    alert("please try again with atlease one uppercase,one number,one symbols and onelowercase");
    return;
  
  
  }
 
let allvalue={
  length: length,
  lowerCase:includelowerCase,
  upperCase: includeupperCase,
  numeric:includenumbers,
  specialcharacters: includesymbols
}
return allvalue;
}

// Write password to the #password input
function writepassword(){
 let confirm=generateOptions();
 if (!confirm) {
    return;
 }
//  help to extract the password
  let passwordPool=[];
  console.log(passwordPool)
  if (confirm.lowerCase){
    for (let i = 0; i < onlylowerCase.length; i++) {
      passwordPool.push(onlylowerCase[i]);
    }
  }
  if (confirm.upperCase){
    for (let i = 0; i <onlyupperCase.length; i++) {
       passwordPool.push(onlyupperCase[i]);
    }
  }
  if (confirm.numeric){
    for (let i = 0; i <onlynumbers.length; i++) {
        passwordPool.push(onlynumbers[i]);
    }
  }
  if (confirm.specialcharacters){
    for (let i = 0; i < onlysymbols.length; i++) {
        passwordPool.push(onlysymbols[i]);
  }
}
 let lastpassword=[];
 for (let i = 0; i < confirm.length; i++) {
   let pickrandomly =Math.floor(Math.random()*Math.floor(passwordPool.length));
   lastpassword.push(passwordPool[pickrandomly]);
 }
 console.log(lastpassword)
 let finalpassword=lastpassword.join("");
 console.log(finalpassword);
 document.getElementById("password").value = finalpassword;
  } 
  
 
// Add event listener to generate button
generatepasswordBtn.addEventListener("click", writepassword);
