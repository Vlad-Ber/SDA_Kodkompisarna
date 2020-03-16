'use strict';
const socket = io();

const vm = new Vue({
    el: '#page',
    data: {
	testArray: 1,
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
		  
