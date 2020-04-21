'use strict';
const socket = io();

let vo = new Vue({
    el: "#vuePlace", 
    data:{
	dateName: "",
	dateImg: "",
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	name: "",
	conv: 5,
	intr: 5,
	match: 5,
	
    },
    created: function () {
	socket.emit("getProfiles", {}),
	this.name = this.currentProfile.name; 
	console.log("i am " + this.name);
	socket.on(this.name, function (data){
	    console.log(data);
	    if(this.currentProfile.gender == "M") {
		vo.dateName = data.adminInfo.female.name;
		vo.dateImg = data.adminInfo.female.pic;
	    }
	    if (this.currentProfile.gender == "F") {
		vo.dateName = data.adminInfo.male.name;
		vo.dateImg = data.adminInfo.male.pic; 
	    }
	    console.log("i am dating " + this.dateName);
	}.bind(this));
    },
    methods: {
	sendRating: function() {
	    socket.emit("sendRating", {
		conv: vo.conv,
		intr: vo.intr,
		match: vo.match,
		dateName: vo.dateName,
		myName: vo.currentProfile.name, 
	    }),
	    console.log("Rating sent");
	    console.log("sent: " + this.conv + " " + this.intr + " " + this.match + " " + this.dateName + " " + this.myName);
	}
    }	

});
