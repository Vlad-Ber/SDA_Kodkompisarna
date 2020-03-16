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
	    }),
	    console.log("vueTest");
	    console.log("Roundnumber is : " + roundNumber);
	}
    }
});
		  
