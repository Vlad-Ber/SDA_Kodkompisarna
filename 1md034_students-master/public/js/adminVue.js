'use strict';
const socket = io();

const vm = new Vue({
    el: '#page',
    data: {
		testArray: 1,
		name: "pelle",
		conv: 0,
		intr: 0,
		match: 0,
    },
    created: function () {		
		    socket.on('redirectRating', function(data){
				this.conv = data.ratings[0];
				this.intr = data.ratings[1]; 
				this.match = data.ratings[2];
				console.log("Rating recieved" + this.conv + this.intr + this.match);
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
		  
