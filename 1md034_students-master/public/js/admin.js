for(var i = 0; i<20; i++){
   let id = document.getElementById("sec"+i);
    // NAME
    let name = document.createElement('h4');
    let htext = document.createTextNode(users[i].name);
    name.appendChild(htext);
    id.appendChild(name);
    //AGE
    let age = document.createElement('p');
    let ageInfo = document.createTextNode(users[i].age);
    age.appendChild(ageInfo);
    id.appendChild(age);
    // Gender
    let gender = document.createElement('p');
    let genderInfo = document.createTextNode(users[i].gender);
    gender.appendChild(genderInfo);
    id.appendChild(gender);
    // Desc 
    let desc = document.createElement('p');
    let descInfo = document.createTextNode(users[i].desc);
    desc.appendChild(descInfo);
    id.appendChild(desc);
    //Pic
    let idPic = document.getElementById("user"+i+"pic");
    idPic.className = "column";
    let img = document.createElement('IMG');
    img.src = users[i].pic;
    img.width = 100;
    img.height = 68;
    idPic.appendChild(img);
};

//Funktioner för att dra sections

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("hejsan");
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
