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
			matchVue.timer = data.timer;
			console.log(matchVue.timer);
			TIME_LIMIT = matchVue.timer;
			startTimer();
		}.bind(this));
		socket.on('endUserRound', function () {
			console.log("in currentDate.js");
			onTimesUp();
		}.bind(this));


		console.log(this.currentProfile);
		socket.on(matchVue.currentProfile.name, function (date) {
			matchVue.currentRound++;
			console.log("received adminInfo!");
			console.log(date);
			// If user is male, get the data of the female user.
			console.log(matchVue.currentProfile);
			if (matchVue.currentProfile.gender == "M") {
				if (matchVue.currentRound == 1) {
					matchVue.p1.name = date.female.name;
					matchVue.p1.age = date.female.age;
					matchVue.p1.gender = date.female.gender;
					matchVue.p1.desc = date.female.desc;
					matchVue.p1.pic = date.female.pic;
					matchVue.p1.table = date.table;
				}

				else if (matchVue.currentRound == 2) {
					matchVue.p2.name = date.female.name;
					matchVue.p2.age = date.female.age;
					matchVue.p2.gender = date.female.gender;
					matchVue.p2.desc = date.female.desc;
					matchVue.p2.pic = date.female.pic;
					matchVue.p2.table = date.table;
				}

				else if (matchVue.currentRound == 3) {
					matchVue.p3.name = date.female.name;
					matchVue.p3.age = date.female.age;
					matchVue.p3.gender = date.female.gender;
					matchVue.p3.desc = date.female.desc;
					matchVue.p3.pic = date.female.pic;
					matchVue.p3.table = date.table;
				}
			}

			// If the current user is female, get the data of the male user.
			else if (matchVue.currentProfile.gender == "F") {
				if (matchVue.currentRound == 1) {
					matchVue.p1.name = date.male.name;
					matchVue.p1.age = date.male.age;
					matchVue.p1.gender = date.male.gender;
					matchVue.p1.desc = date.male.desc;
					matchVue.p1.pic = date.male.pic;
					matchVue.p1.table = date.table;
				}

				else if (matchVue.currentRound == 2) {
					matchVue.p2.name = date.male.name;
					matchVue.p2.age = date.male.age;
					matchVue.p2.gender = date.male.gender;
					matchVue.p2.desc = date.male.desc;
					matchVue.p2.pic = date.male.pic;
					matchVue.p2.table = date.table;
				}

				else if (matchVue.currentRound == 3) {
					matchVue.p3.name = date.male.name;
					matchVue.p3.age = date.male.age;
					matchVue.p3.gender = date.male.gender;
					matchVue.p3.desc = date.male.desc;
					matchVue.p3.pic = date.male.pic;
					matchVue.p3.table = date.table;
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

