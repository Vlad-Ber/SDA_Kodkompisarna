'use strict';
const socket = io();

//INIT MEN LEFT
for (var i = 0; i < 10; i++) {
    let id = document.getElementById("sec" + i);
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
    let idPic = document.getElementById("user" + i + "pic");
    idPic.className = "column";
    let img = document.createElement('IMG');
    img.src = men[i].pic;
    img.width = 100;
    img.height = 68;
    idPic.appendChild(img);
};

function updateTableColor() {
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");
    for (var i = 0; i < 10; i++) {
        var tableToChange = document.getElementById("table" + i);
        if (maleRight.children[i].className != undefined && femaleRight.children[i].className != undefined) {
            tableToChange.style.backgroundColor = "green";
        }
        else {
            tableToChange.style.backgroundColor = "red";
        }
    }
}

function tableRed() {
    for (var i = 0; i < 10; i++) {
        var tableToChange = document.getElementById("table" + i);
        tableToChange.style.backgroundColor = "red";
    }
}
function tableGreen() {
    for (var i = 0; i < 10; i++) {
        var tableToChange = document.getElementById("table" + i);
        tableToChange.style.backgroundColor = "green";
    }
}

//INIT WOMEN LEFT
for (var i = 0; i < 10; i++) {
    var womenId = i + 10;
    let id = document.getElementById("sec" + womenId);
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
    let idPic = document.getElementById("user" + womenId + "pic");
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
    if (gender == "M" && ev.target.className == "splitter") {
        ev.target.appendChild(elem);
    }
    updateTableColor();
}
function dropfemale(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    var gender = elem.children[3].textContent;
    if (gender == "F" && ev.target.className == "splitter") {
        ev.target.appendChild(elem);
    }
    updateTableColor();

}
function movef(secid) {
    var secToMove = document.getElementById("femaleRight");
    secToMove.appendChild(secid);
    updateTableColor();
}
function movem(secid) {
    var secToMove = document.getElementById("maleRight");
    secToMove.appendChild(secid);
    updateTableColor();
}

function roundNumberMake(number) {
    this.roundNumber = number;
    this.getRoundNumber = function () {
        return this.roundNumber;
    };
};

async function shuffle() {
    //Hämta alla sections som används
    var maleLeft = document.getElementById("maleLeft");
    var femaleLeft = document.getElementById("femaleLeft");
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");

    
    var adminStat = document.getElementById("statusMessage");
    adminStat.textContent = "Shuffling matches...";

    //Flytta  män randomly
    var firstMaleLeft = maleLeft.children[0];
    for (var i = 9; firstMaleLeft !=undefined;) {
	var randNumber = Math.round(Math.random() * i);
        var maleToMove = maleLeft.children[randNumber];
	await new Promise(r => setTimeout(r, 50));
	if (maleToMove != undefined){
            maleRight.appendChild(maleToMove); 
	}
	firstMaleLeft = maleLeft.children[0];
	i--;
    }
    //Flytta female randomly
    var firstFemaleLeft = femaleLeft.children[0];
    for (var i = 9; firstFemaleLeft != undefined;) {
	var randNumber = Math.round(Math.random() * i);
        var femaleToMove = femaleLeft.children[randNumber];
	await new Promise(r => setTimeout(r, 50));
	if (femaleToMove != undefined){
            femaleRight.appendChild(femaleToMove);
	}
        firstFemaleLeft = femaleLeft.children[0];
	i--;
    }
    //Ändra färgen på alla bord till grön (Vi antar att shuffle alltid funkar)
    tableGreen();
    //Ändra admin messageboxxen
    adminStat = document.getElementById("statusMessage");
    adminStat.textContent = "Matches have succesfully been shuffled.";
}

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

function getMatches() {
    var maleRight = document.getElementById("maleRight")
    var femaleRight = document.getElementById("femaleRight")

    //adminInfo = {(1, Maj-Britt, Klas), (2, Britta, Ingar), (3, Sofia, Oskar), etc}
    if (maleRight != undefined) {
        var adminInfo = {
          date1: {
            table: 1,
            male: maleRight.children[0], // table - 1, för arrayer börjar på 0!
            female: femaleRight.children[0],
          },
          date2: {
            table: 2,
            male: maleRight.children[1],
            female: femaleRight.children[1],
          },
          date3: {
            table: 3,
            male: maleRight.children[2],
            female: femaleRight.children[2],
          },
          date4: {
            table: 4,
            male: maleRight.children[3],
            female: femaleRight.children[3],
          },
          date5: {
            table: 5,
            male: maleRight.children[4],
            female: femaleRight.children[4],
          },
          date6: {
            table: 6,
            male: maleRight.children[5],
            female: femaleRight.children[5],
          },
          date7: {
            table: 7,
            male: maleRight.children[6],
            female: femaleRight.children[6],
          },
          date8: {
            table: 8,
            male: maleRight.children[7],
            female: femaleRight.children[7],
          },
          date9: {
            table: 9,
            male: maleRight.children[8],
            female: femaleRight.children[8],
          },
          date10: {
            table: 10,
            male: maleRight.children[9],
            female: femaleRight.children[9],
          },
        };
    }
    socket.emit("sendMatch", {
        adminInfo: adminInfo
    });
}

function rating(maleRight, femaleRight, i) {
    var matchM = maleRight.children[i];
    var matchF = femaleRight.children[i];
    var pm = document.createElement('p');
    var pf = document.createElement('p');
    pm.setAttribute("class", "rate");
    pf.setAttribute("class", "rate");
    //Female rating index i
    
    if(typeof matchF.children[1].textContent == undefined){
	console.log("Undefined female at index :" + i);
    }
    else{
	let txtm = document.createTextNode("Rating: " + matchF.children[1].textContent);
	pm.appendChild(txtm);
	matchM.appendChild(pm);
    }
    //Male rating index i
    var maleText = matchM.children[1];
    if(maleText == undefined){
	console.log("Undefined male at index :" + i);
    }
    else{
	let txtf = document.createTextNode("Rating: " + matchM.children[1].textContent);
	pf.appendChild(txtf);
	matchF.appendChild(pf);
    }
}

function getTimerTime() {
    var minute = document.getElementById("minuteGet").value * 60;
    return minute;
}

function roundFinished() {
    
        //Skicka profilen som matchats med Maj-Britt
        //getMajBrittsMatch();
        var matchedMale = [];
        var matchedFemale = [];

        //Lägg tillbaka alla sections
        var maleLeft = document.getElementById("maleLeft");
        var femaleLeft = document.getElementById("femaleLeft");
        var maleRight = document.getElementById("maleRight");
        var femaleRight = document.getElementById("femaleRight");
        var i = maleRight.children[0];

        //Flytta tillbaka män
        for (; i != undefined;) {
            var maleToMove = maleRight.children[0];
            maleLeft.appendChild(maleToMove);
            i = maleRight.children[0];
        }
        var a = femaleRight.children[0];
        //Flytta tillbaka kvinnor
        for (; a != undefined;) {
            var femaleToMove = femaleRight.children[0];
            femaleLeft.appendChild(femaleToMove);
            a = femaleRight.children[0];
        }
        tableRed();
}

function startRound() {
    //Check om alla matchningar är giltiga
    var maleRight = document.getElementById("maleRight");
    var femaleRight = document.getElementById("femaleRight");
    var maleCheck = maleRight.children[9];
    var femaleCheck = femaleRight.children[9];
    if (maleCheck == undefined || femaleCheck == undefined) {
        var statusM = document.getElementById("statusMessage");
        statusM.textContent = "Please match all dates!";
    }   //Om alla matchningar är giltiga
    else {
        allowed = true;
        getMatches();
        for (var k = 0; k < 10; k++) {
            console.log("Inne i rating Loop med index: " + k);
            rating(maleRight, femaleRight, k);
        }

        //Börja Nästa Runda
        if (roundNumber != 3) {
            //Lägg till info om personer som redan har träffats

            //RoundNumber info
            roundNumber++;
            var adminStat = document.getElementById("adminStat");
            adminStat.textContent = "Status: Round " + roundNumber + " is ongoing!";
            var statusM = document.getElementById("statusMessage");
            statusM.textContent = "Round " + roundNumber + " has now started!";
            startTimer();
        }
        else {
            var adminStat = document.getElementById("adminStat");
            adminStat.textContent = "Status: Speeddating event is finished";
            var statusM = document.getElementById("statusMessage");
            statusM.textContent = "";
            startTimer();
        }
    }
}
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var TIME_LIMIT = 120;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function onTimesUp() {  
    roundFinished();
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
}

function endEarly() {
    roundFinished();
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    vm.msgEndTimer();
    
}

function startTimer() {
    TIME_LIMIT = getTimerTime();
    timerInterval = setInterval(() => {
	timePassed = timePassed += 1;
	timeLeft = TIME_LIMIT - timePassed;
	document.getElementById("base-timer-label").innerHTML = formatTime(
	    timeLeft
	);
	setCircleDasharray();
	setRemainingPathColor(timeLeft);
	
	if (timeLeft === 0) {
	    onTimesUp();
	}
    }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

const vm = new Vue({
    el: '#page',
    data: {
	userRatings: [],
	name: "maj-britt",
	showRatings: false,
	conv: 0,
	intr: 0,
	match: 0,
	a: 0,
	b: 0,
	c: 0,
        reports: "",

    },
    created: function () {		
	socket.on('redirectRating', function(data){
	    this.testArray = data.ratings;
	    console.log("Rating recieved" + this.testArray[0].conv + this.testArray[0].intr + this.testArray[0].match);
      
	    this.showRatings = true; 
	    this.a = Math.floor(Math.random()*(10)+1); 
	    this.b = Math.floor(Math.random()*(10)+1);
	    this.c = Math.floor(Math.random()*(10)+1);
	}.bind(this));
	      
        socket.on('report', function(data){
            this.reports = data.report;
        });
    },	
    methods: {
	      msgUser: function() {
		        socket.emit("sendConsole", {
			          testArray: this.testArray,
			          round: roundNumber,
			          allowed: allowed,
                timer: TIME_LIMIT,
		        }),
		        this.showRatings = false; 
		        console.log("Roundnumber is : " + roundNumber);
           
		        allowed = false;
		    },
        msgEndTimer: function() {
            socket.emit("endRound", {
                timer: 0
            });
        }
	  }

});

