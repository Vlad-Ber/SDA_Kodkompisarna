'use strict';
const socket = io();

const ind = new Vue({
    el:'#msgTest',
    data: {
	testNumber: 0,
    },
    created: function () {
	socket.on('initialize', function (data) {
	    this.testNumber = data.data1;
	    console.log(this.testNumber);
	}.bind(this));

	socket.on('skickaEtta',function(data) {
	    this.testNumber = data.ettan;
	    console.log(this.testNumber);
	}.bind(this));
    },
});
