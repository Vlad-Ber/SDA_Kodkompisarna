'use strict';
const socket = io();

const vm = new Vue({
    el:'#messages',
    data:{
	seen: false,
	matchSeen: false,
	recievedMessage: false,
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	connectedUsers: 1,
	meetAgainDone: 0,
	gotConnectedUsers: false,
	myName: "",
	p1:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound1")),
	    age: "",
	    tel: "07073170987",
	    loc: "Uppsala", 
	    img: "",
	},
	p2:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound2")),
	    age: "",
	    tel: "0120871213",
	    loc: "Uppsala", 
	    img: "",
	},
	p3:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound3")),
	    age: "",
	    tel: "098097773",
	    loc: "Uppsala", 
	    img: "",
	},
    },
    created: function () {
	socket.emit('getNoOfUsers', {});
	socket.on('sendNoOfUsers', function(data) {
	    console.log(data.connectedUsers);
	    vm.connectedUsers = data.connectedUsers;	  
	    vm.printMatches(); 
	});
    },
    methods:{
	refresh: function(){
	    socket.emit("getMessage");
	},
	printMatches: function(){
	    console.log("he2222j");
	    this.myName = this.currentProfile.name;
	    if(this.p1.name != null || this.p2.name != null || this.p3.name != null){
		socket.emit('getMeetAgain', {});
		socket.on('gettingMeetAgain', function(data){
		    vm.meetAgainDone = data.meetAgain.length;		    
		    for(var l = 0; l < data.meetAgain.length; l++){
			if(data.meetAgain[l].myName.localeCompare(vm.p1.name) == 0){
			    if(data.meetAgain[l].meetAgain.p1.match != true){
				vm.p1.name = null;
			    }
			}
			if(data.meetAgain[l].myName.localeCompare(vm.p2.name) == 0){
			    if(data.meetAgain[l].meetAgain.p2.match != true){
				vm.p2.name = null;
			    }
			}
			if(data.meetAgain[l].myName.localeCompare(vm.p3.name) == 0){
			    if(data.meetAgain[l].meetAgain.p3.match != true){
				vm.p3.name = null;
			    }
			}
		    }
		});
		console.log(this.connectedUsers);	    
		socket.emit("getAllProfiles", {});
		socket.on("sendingAllProfiles", function(data){
		    if(vm.connectedUsers == vm.meetAgainDone) {
			this.recievedMessage = true;
			for(var i = 0; i < data.profiles.length; i++){
			    if(data.profiles[i].male.name.localeCompare(vm.p1.name) == 0){
				console.log("p1");			
				var current = data.profiles[i].male;
				vm.p1.age = current.age;
				vm.p1.img = current.pic;
				vm.p1.match = true;
			    } else if(data.profiles[i].male.name.localeCompare(vm.p2.name) == 0){
				console.log("p2");
				var current = data.profiles[i].male;
				vm.p2.age = current.age;
				vm.p2.img = current.pic;
				vm.p2.match = true;
			    } else if(data.profiles[i].male.name.localeCompare(vm.p3.name) == 0){
				console.log("p3");
				var current = data.profiles[i].male;
				vm.p3.age = current.age;
				vm.p3.img = current.pic;
				vm.p3.match = true;
			    } else if(data.profiles[i].female.name.localeCompare(vm.p1.name) == 0){
				console.log("p1");
				var current = data.profiles[i].female;
				vm.p1.age = current.age;
				vm.p1.img = current.pic;
				vm.p1.match = true;
			    } else if(data.profiles[i].female.name.localeCompare(vm.p2.name) == 0){
				console.log("p2");
				var current = data.profiles[i].female;
				vm.p2.age = current.age;
				vm.p2.img = current.pic;
				vm.p2.match = true;
			    } else if(data.profiles[i].female.name.localeCompare(vm.p3.name) == 0){
				console.log("p3");
				var current = data.profiles[i].female;
				vm.p3.age = current.age;
				vm.p3.img = current.pic;
				vm.p3.match = true;
			    }
			}
		    }
		    
		}.bind(this));
		
	    };
	}
    }
    
});


