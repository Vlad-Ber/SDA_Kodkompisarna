'use strict';
const socket = io();

let vo = new Vue({
    el: "#vuePlace", 
    data:{
	dateName: "",
	myName: "Peter", 
	conv: 5,
	intr: 5,
	match: 5,
	
    },
    created: function () {
	console.log(currentProfile);
    },
    methods: {
	sendRating: function() {
	    socket.emit("sendRating", {
		conv: this.conv,
		intr: this.intr,
		match: this.match,
		dateName: this.dateName,
		myName: this.myName
	    }),
	    console.log("Rating sent");
	    console.log("sent: " + this.conv + " " + this.intr + " " + this.match + " " + this.dateName + " " + this.myName);
	}
    }	

});
