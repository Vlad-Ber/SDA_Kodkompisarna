<<<<<<< HEAD
"use strict";
=======
'use strict';
>>>>>>> 6a466ab82eead7e3f8cc992834b9c3a41ae7a9ca
const socket = io();

function setTable(tableToSet) {
<<<<<<< HEAD
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
    socket.on(
      "userTimer",
      function (data) {
        this.timer = data.timer;
        console.log(this.timer);
        TIME_LIMIT = this.timer;
        startTimer();
      }.bind(this)
    ),
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
=======
	  var table = document.getElementById("table" + tableToSet);
	  table.style.backgroundColor = "green";
}



const matchVue = new Vue ({
	  el: '#current_date',
	  data: {
        timer: 0,
		    p1:{
			      name: "Henrik",
			      age: 33,
			      gender: "M",
			      desc: "Gillar matlagning och annat som är jättekul och jättetrevligt. Jag är trevlig",
			      pic: "https://image.shutterstock.com/image-photo/handsome-man-vivid-poncho-holding-600w-273427037.jpg",
			      table: 5,
            
		    },
		    p2:{
			      name: "Mange",
			      age: 27,
			      gender: "M",
			      desc: "Gillar långa promenader på stranden i solnedgången men också katter.",
			      pic: "https://image.shutterstock.com/image-photo/young-bearded-guy-glasses-holding-260nw-589115231.jpg",
			      table: 3,
		    },
		    p3:{
			      name: "Karsten",
			      age: 30,
			      gender: "M",
			      desc: "Gillar långa promenader på stranden i solnedgången.",
			      pic: "https://ak0.picdn.net/shutterstock/videos/12008510/thumb/10.jpg",
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
    },
    
	mounted: function() {
		socket.on('redirectAdminInfo', function (matchProfile) {
			this.name = matchProfile.profile.name;
			this.desc = matchProfile.profile.desc;
			this.age = matchProfile.profile.age;
			this.pic = matchProfile.profile.pic;
			  this.table = matchProfile.table;
		}.bind(this));
	},
	mounted: function () {
		setTable(2);

	}

>>>>>>> 6a466ab82eead7e3f8cc992834b9c3a41ae7a9ca
});
