//INIT MEN LEFT
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

function updateTableColor(){
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");
    for (var i = 0; i < 10; i++){
	var tableToChange = document.getElementById("table" + i);
	if( maleRight.children[i].className != undefined && femaleRight.children[i].className != undefined){
	    tableToChange.style.backgroundColor = "green";
	}
	else{
	    tableToChange.style.backgroundColor = "red";
	}
    }	
}

function tableRed(){
    for (var i = 0; i < 10; i++){
	var tableToChange = document.getElementById("table" + i);
	    tableToChange.style.backgroundColor = "red";
	}
    }	

//INIT WOMEN LEFT
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
    updateTableColor();
}
function dropfemale(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    var gender = elem.children[3].textContent;
    if(gender == "F" && ev.target.className == "splitter"){
	ev.target.appendChild(elem);
    }
    updateTableColor();
	
}
function movef(secid){
    var secToMove = document.getElementById("femaleRight");
    secToMove.appendChild(secid);
    updateTableColor();
}
function movem(secid){
    var secToMove = document.getElementById("maleRight");
    secToMove.appendChild(secid);
    updateTableColor();
}

function roundNumberMake(number){
    this.roundNumber = number;
    this.getRoundNumber = function(){
	return this.roundNumber;
    };
};

let round = new roundNumberMake(0);
let roundNumber = round.getRoundNumber();
let allowed = false;

//Maj-Britt är dens profil man är som klient
function getMajBrittsMatch() {
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");
    var profile = {};
    var table = 0;
    //Hitta Maj Britt för att få platsen, hämta bordet och dejt till adminVue.js
    for (var i = 0; i < 10; i++) {
        if (femaleRight.children[i].name == "Maj-Britt") {
            if (maleRight.children[i] != undefined) {
                profile = maleRight.children[i];
                table = i;
            }
        }
    }
    //Skicka Maj-Britts match till servern
    socket.emit("sendMatch", {
        profile: profile,
        table: table,
    });
}

function startRound(){
    //Check om alla matchningar är giltiga
    
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");
    var maleCheck = maleRight.children[9];
    var femaleCheck = femaleRight.children[9];
    if(maleCheck == undefined || femaleCheck == undefined){
	var statusM = document.getElementById("statusMessage");
	statusM.textContent = "Please match all dates!";
    }
    else{
	allowed = true;
        console.log(allowed);
        //Skicka profilen som matchats med Maj-Britt
        getMajBrittsMatch();
	//Lägg tillbaka alla sections
	var maleLeft = document.getElementById("maleLeft");
	var femaleLeft = document.getElementById("femaleLeft");
	var maleRight = document.getElementById("maleRight");
	var femaleRight = document.getElementById("femaleRight");
	var i = maleRight.children[0];
	
	//Flytta tillbaka män
	for(;i != undefined;){
	    var maleToMove = maleRight.children[0];
	    maleLeft.appendChild(maleToMove);
	    i = maleRight.children[0];
	}
	var a = femaleRight.children[0];
	//Flytta tillbaka kvinnor
	for(;a != undefined;){
	    var femaleToMove = femaleRight.children[0];
	    femaleLeft.appendChild(femaleToMove);
	    a = femaleRight.children[0];
	}
	tableRed();
	
	//Börja Nästa Runda
	if(roundNumber != 3){
	    //Lägg till info om personer som redan har träffats

	    //RoundNumber info
	    roundNumber++;
	    var adminStat = document.getElementById("adminStat");
	    adminStat.textContent = "Status: Round " + roundNumber + " is ongoing!";
	    var statusM = document.getElementById("statusMessage");
	    statusM.textContent = "Round " + roundNumber + " has now started!";
	}
	else{
	    var adminStat = document.getElementById("adminStat");
	    adminStat.textContent = "Status: Speeddating event is finished";
	    var statusM = document.getElementById("statusMessage");
	    statusM.textContent = "";
	}
    }
}


