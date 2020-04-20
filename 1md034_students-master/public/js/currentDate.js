"use strict";

const socket = io();

function setTable(tableToSet) {
    var table = document.getElementById("table" + tableToSet);
    table.style.backgroundColor = "green";
}

const matchVue = new Vue({
    el: "#current_date",
    data: {
	timer: 0,
	currentRound: 0,
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	p1: {
	    name: "",
	    age: 0,
	    gender: "",
	    desc: "",
	    pic: "",
	    table: 0,
	},
	p2: {
	    name: "",
	    age: 0,
	    gender: "",
	    desc: "",
	    pic: "",
	    table: 0,
	},
	p3: {
	    name: "",
	    age: 0,
	    gender: "",
	    desc: "",
	    pic: "",
	    table: 0,
	},
    },
    created: function () {
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
	
	console.log(this.currentProfile);
	socket.on(this.currentProfile.name, function (date) {
            this.currentRound++;
            console.log("received adminInfo!");
            // If user is male, get the data of the female user.
            console.log(this.currentProfile);
            if (this.currentProfile.gender == "M") {
		if (this.currentRound == 1) {
		    this.p1.name = date.female.name;
		    this.p1.age = date.female.age;
		    this.p1.gender = date.female.gender;
		    this.p1.desc = date.female.desc;
		    this.p1.pic = date.female.pic;
		    this.p1.table = date.table;
		}

		else if (this.currentRound == 2) {
		    this.p2.name = date.female.name;
		    this.p2.age = date.female.age;
		    this.p2.gender = date.female.gender;
		    this.p2.desc = date.female.desc;
		    this.p2.pic = date.female.pic;
		    this.p2.table = date.table;
		}

		else if (this.currentRound == 3) {
		    this.p3.name = date.female.name;
		    this.p3.age = date.female.age;
		    this.p3.gender = date.female.gender;
		    this.p3.desc = date.female.desc;
		    this.p3.pic = date.female.pic;
		    this.p3.table = date.table;
		}
            }

            // If the current user is female, get the data of the male user.
            else if (this.currentProfile.gender == "F") {
		if (this.currentRound == 1) {
		    this.p1.name = date.male.name;
		    this.p1.age = date.male.age;
		    this.p1.gender = date.male.gender;
		    this.p1.desc = date.male.desc;
		    this.p1.pic = date.male.pic;
		    this.p1.table = date.table;
		}

		else if (this.currentRound == 2) {
		    this.p2.name = date.male.name;
		    this.p2.age = date.male.age;
		    this.p2.gender = date.male.gender;
		    this.p2.desc = date.male.desc;
		    this.p2.pic = date.male.pic;
		    this.p2.table = date.table;
		}

		else if (this.currentRound == 3) {
		    this.p3.name = date.male.name;
		    this.p3.age = date.male.age;
		    this.p3.gender = date.male.gender;
		    this.p3.desc = date.male.desc;
		    this.p3.pic = date.male.pic;
		    this.p3.table = date.table;
		}
            }
            else {
		console.log("Error: Could not identify user.")
            }
	})
    },
    mounted: function () {
	setTable(2);
    },

});

