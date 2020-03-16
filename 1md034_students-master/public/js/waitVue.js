'use strict';
const socket = io();

const ind = new Vue({
    el:'#vueWait',
    data: {
	testNumber: 0,
	roundNumber: 0,
    },
    created: function () {
	socket.on('initialize', function (data) {
	    this.testNumber = data.data1;
	    console.log(4);
	}.bind(this));

	socket.on('skickaEtta',function(data) {
	    this.testNumber = data.ettan;
	    //location.href = "/date1";
	}.bind(this));
	socket.on('nyRunda', function(data) {
	    this.roundNumber = data.round;
	    console.log("RoundNumber is: " +this.roundNumber);
	    console.log("Allowed is: "+ data.allowed);
	    if(data.allowed){
		if (this.roundNumber == 1){
		    location.href = "/date1";
		}
		if(this.roundNumber == 2){
		    location.href = "date2";
		}
		if(this.roundNumber == 3){
		    location.href = "date3";
		}
	    }
	}.bind(this));
    },
});
