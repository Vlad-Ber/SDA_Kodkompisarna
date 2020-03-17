'use strict';
const socket = io();

const vm = new Vue({
    el: '#page',
    data: {
		testArray: 1,
		conv: 0,
		intr: 0,
		match: 0,
    },
    created: function () {		
		    socket.on('redirectRating', function(data){
			/*this.conv = data.ratings[0];
			  this.intr = data[1]; */
			//this.match = data.ratings;
			console.log("Rating recieved");
		    }.bind(this));
		},	
    methods: {
	
		msgUser: function() {
			socket.emit("sendConsole", {
			    testArray: this.testArray,
			    round: roundNumber,
			    allowed: allowed,
			}),
			console.log("Roundnumber is : " + roundNumber);
			allowed = false;
		}
    }		
});
		  
