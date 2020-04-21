'use strict';
const socket = io();

const vm = new Vue({
    el:'#messages',
    data:{
	seen: false,
	matchSeen: false,
	recievedMessage: false,
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	myName: "",
	p1:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound1")),
	    age: "",
	    tel: "",
	    loc: "", 
	    img: "",
	},
	p2:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound2")),
	    age: "",
	    tel: "",
	    loc: "", 
	    img: "",
	},
	p3:{
	    match:false,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound3")),
	    age: "",
	    tel: "",
	    loc: "", 
	    img: "",
	},
    },
    created: function () {
	console.log(this.p1.name);
	this.myName = this.currentProfile.name; 
	if(this.p1.name != null || this.p2.name != null || this.p3.name != null){
	    this.recievedMessage = true;
	    socket.emit("getAllProfiles", {});
	    socket.on("sendingAllProfiles", function(data){
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
	    }.bind(this));	    
	};
	
    },
    methods:{
	refresh: function(){
	    socket.emit("getMessage");
	}
    }
    
});


