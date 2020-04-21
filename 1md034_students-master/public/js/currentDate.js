"use strict";

const socket = io();

function setTable(tableToSet) {
	var table = document.getElementById("table" + tableToSet);
	table.style.backgroundColor = "green";
}

let matchVue = new Vue({
    el: "#current_date",
    data: {
	timer: 0,
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	profileName: "",
	p1: {
	    name: "",
	    age: 0,
	    gender: "",
	    desc: "",
	    pic: "",
	    table: 0,
	},
    },
    created: function () {
	this.profileName = this.currentProfile.name;
        socket.on('userTimer', function (data) {
	    this.timer = data.timer;
            console.log(this.timer);
            TIME_LIMIT = this.timer;
            startTimer();
	}.bind(this));
        socket.on('endUserRound', function () {
            console.log("in currentDate.js");
            onTimesUp();
        }.bind(this));


	
	socket.emit("getProfiles", {}),
	console.log(this.currentProfile);
	socket.on(this.currentProfile.name, function (date) {
	    this.currentRound++;
	    console.log("received adminInfo!");
	    console.log(matchVue.currentProfile.gender);
            // If user is male, get the data of the female user.	   
            if (matchVue.currentProfile.gender == "M") {
		matchVue.p1.name = date.adminInfo.female.name;
		matchVue.p1.age = date.adminInfo.female.age;
		matchVue.p1.gender = date.adminInfo.female.gender;
		matchVue.p1.desc = date.adminInfo.female.desc;
		matchVue.p1.pic = date.adminInfo.female.pic;
		            matchVue.p1.table = date.adminInfo.table;
                console.log(matchVue.p1.table);
	setTable(matchVue.p1.table);
            }

            // If the current user is female, get the data of the male user.
            else if (matchVue.currentProfile.gender == "F") {
		matchVue.p1.name = date.male.name;
		matchVue.p1.age = date.male.age;
		matchVue.p1.gender = date.male.gender;
		matchVue.p1.desc = date.male.desc;
		matchVue.p1.pic = date.male.pic;
		            matchVue.p1.table = date.table;
                console.log(matchVue.p1.table);
	              setTable(matchVue.p1.table);
	    }
            else {
		console.log("Error: Could not identify user.")
            }
	})
    },
    /*mounted: function () {
        console.log(p1.table);
	setTable(p1.table);
    },*/

});

