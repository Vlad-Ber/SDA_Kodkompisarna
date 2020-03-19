'use strict';
const socket = io();

new Vue({
	el:'#messages',
	data:{
		seen: false,
		matchSeen: false,
		recievedMessage: false,
		p1:{
			match:false,
			name: "kalle",
			age: "",
			tel: "",
			loc: "", 
			img: "",
		},
		p2:{
			match:false,
			name: "",
			age: "",
			tel: "",
			loc: "", 
			img: "",
		},
		p3:{
			match:false,
			name: "",
			age: "",
			tel: "",
			loc: "", 
			img: "",
		},
	},
    created: function () {
		    socket.on('sendMessage', function(data){
				this.p1 = data.match[0];
				this.p2 = data.match[1];
				this.p3 = data.match[2]; 
				console.log("message recieved"); 
				this.recievedMessage = true; 	
		    }.bind(this));
		
	},
	methods:{
		refresh: function(){
			socket.emit("getMessage");
		}
	}
	
});

