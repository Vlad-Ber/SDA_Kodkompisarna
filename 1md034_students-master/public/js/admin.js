for(var i = 0; i<10; i++){
    let id = document.getElementById("sec"+i);
    // NAME
    let name = document.createElement('h4');
    let htext = document.createTextNode(men[i].name);
    name.appendChild(htext);
    id.appendChild(name);
    //AGE
    let age = document.createElement('p');
    let ageInfo = document.createTextNode(men[i].age);
    age.appendChild(ageInfo);
    id.appendChild(age);
    // Gender
    let gender = document.createElement('p');
    let genderInfo = document.createTextNode(men[i].gender);
    gender.appendChild(genderInfo);
    id.appendChild(gender);
    // Desc 
    let desc = document.createElement('p');
    let descInfo = document.createTextNode(men[i].desc);
    desc.appendChild(descInfo);
    id.appendChild(desc);
    //Pic
    let idPic = document.getElementById("user"+i+"pic");
    idPic.className = "column";
    let img = document.createElement('IMG');
    img.src = men[i].pic;
    img.width = 100;
    img.height = 68;
    idPic.appendChild(img);
};

for(var i = 0; i<10; i++){
    var womenId = i+10;
    let id = document.getElementById("sec"+womenId);
    // NAME
    let name = document.createElement('h4');
    let htext = document.createTextNode(women[i].name);
    name.appendChild(htext);
    id.appendChild(name);
    //AGE
    let age = document.createElement('p');
    let ageInfo = document.createTextNode(women[i].age);
    age.appendChild(ageInfo);
    id.appendChild(age);
    // Gender
    let gender = document.createElement('p');
    let genderInfo = document.createTextNode(women[i].gender);
    gender.appendChild(genderInfo);
    id.appendChild(gender);
    // Desc 
    let desc = document.createElement('p');
    let descInfo = document.createTextNode(women[i].desc);
    desc.appendChild(descInfo);
    id.appendChild(desc);
    //Pic
    let idPic = document.getElementById("user"+womenId+"pic");
    idPic.className = "column";
    let img = document.createElement('IMG');
    img.src = women[i].pic;
    img.width = 100;
    img.height = 68;
    img.draggable = false;
    idPic.appendChild(img);
};

//Funktioner för att dra sections

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropmale(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    var gender = elem.children[3].textContent;
    if(gender == "M" && ev.target.className =="splitter"){
	ev.target.appendChild(elem);
    }
}
function dropfemale(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    var gender = elem.children[3].textContent;
    if(gender == "F" && ev.target.className == "splitter"){
	ev.target.appendChild(elem);
    }
}
function movef(secid){
    var secToMove = document.getElementById("femaleRight");
    secToMove.appendChild(secid);
}
function movem(secid){
    var secToMove = document.getElementById("maleRight");
    secToMove.appendChild(secid);
}
