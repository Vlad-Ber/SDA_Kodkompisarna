let id = document.getElementById("user1");
// NAME

let name = document.createElement('h4');
let htext = document.createTextNode(users[0].name);
name.appendChild(htext);
id.appendChild(name);
//AGE

let age = document.createElement('p');
let ageInfo = document.createTextNode(users[0].age);
age.appendChild(ageInfo);
id.appendChild(age);
// Gender

let gender = document.createElement('p');
let genderInfo = document.createTextNode(users[0].gender);
gender.appendChild(genderInfo);
id.appendChild(gender);
// Desc 
let desc = document.createElement('p');
let descInfo = document.createTextNode(users[0].desc);
desc.appendChild(descInfo);
id.appendChild(desc);
//Pic
let idPic = document.getElementById("user1pic");
let img = document.createElement('IMG');
img.src = users[0].pic;
img.width = 200;
img.height = 125;
idPic.appendChild(img);
