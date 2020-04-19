/*'use strict';
const socket = io();

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
    created: function() {		
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
		    }
	  }

});

*/
