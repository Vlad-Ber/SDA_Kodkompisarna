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
    methods: {
		msgUser: function() {
			socket.emit("sendConsole", {
			testArray: this.testArray,
			}),
			console.log("vueTest");
			console.log("Roundnumber is : " + roundNumber);
		},	
		getRatings: function() {
			socket.on('redirectRating', function(ratings){
				this.conv = ratings[0];
				this.intr = ratings[1]; 
				this.match = ratings[2];
				console.log("Rating recieved");
			})
		},
    }

			
});
		  
