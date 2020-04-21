'use strict';
const socket = io();

const ind = new Vue({
    el:'#log',
    data: {
    },
    methods: {
	newUser: function () {
	    socket.emit('newUser');
	},	
    },
});
