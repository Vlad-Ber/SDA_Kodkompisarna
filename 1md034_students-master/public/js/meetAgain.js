'use strict';
const socket = io();


const vm = new Vue({
    el:"#vuePlace",
    data:{
	currentProfile: JSON.parse(window.sessionStorage.getItem("currentProfile")),
	myName: "",
	seen: false,
	
	p1:{
	    match:true,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound1")),
	    age: "33",
	    tel: "0707070707",
	    loc: "Uppsala", 
	    img: "https://image.shutterstock.com/image-photo/handsome-man-vivid-poncho-holding-600w-273427037.jpg",
	},
	p2:{
	    match:true,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound2")),
	    age: "27",
	    tel: "123123123",
	    loc: "Uppsala", 
	    img: "https://image.shutterstock.com/image-photo/young-bearded-guy-glasses-holding-260nw-589115231.jpg",
	},
	p3:{
	    match:true,
	    name: JSON.parse(window.sessionStorage.getItem("fromRound3")),
	    age: "30",
	    tel: "1122333444",
	    loc: "Uppsala", 
	    img: "https://ak0.picdn.net/shutterstock/videos/12008510/thumb/10.jpg",
	},
	
    },
    created: function () {
	console.log(this.p1.name);
	this.myName = this.currentProfile.name;
	socket.emit("getAllProfiles", {});
	socket.on("sendingAllProfiles", function(data){
	    console.log(data);
	    console.log(vm.p1.name);
	    console.log(vm.p2.name);
	    console.log(vm.p3.name);
	    for(var i = 0; i < data.profiles.length; i++){
		if(data.profiles[i].male.name.localeCompare(vm.p1.name) == 0){
		    console.log("p1");
		    var current = data.profiles[i].male;
		    vm.p1.age = current.age;
		    vm.p1.img = current.pic;
		} else if(data.profiles[i].male.name.localeCompare(vm.p2.name) == 0){
		    console.log("p2");
		    var current = data.profiles[i].male;
		    vm.p2.age = current.age;
		    vm.p2.img = current.pic;
		} else if(data.profiles[i].male.name.localeCompare(vm.p3.name) == 0){
		    console.log("p3");
		    var current = data.profiles[i].male;
		    vm.p3.age = current.age;
		    vm.p3.img = current.pic; 
		} else if(data.profiles[i].female.name.localeCompare(vm.p1.name) == 0){
		    console.log("p1");
		    var current = data.profiles[i].female;
		    vm.p1.age = current.age;
		    vm.p1.img = current.pic;		    
		} else if(data.profiles[i].female.name.localeCompare(vm.p2.name) == 0){
		    console.log("p2");
		    var current = data.profiles[i].female;
		    vm.p2.age = current.age;
		    vm.p2.img = current.pic;
		} else if(data.profiles[i].female.name.localeCompare(vm.p3.name) == 0){
		    console.log("p3");
		    var current = data.profiles[i].female;
		    vm.p3.age = current.age;
		    vm.p3.img = current.pic;		    
		}
	    }
	}.bind(this));
    },
    methods:{
	sendMatches: function() {
	    this.seen = true;
	    if(this.p1.match == false){
		window.sessionStorage.removeItem("fromRound1"); 
	    }
	    if(this.p2.match == false){
		window.sessionStorage.removeItem("fromRound2");		
	    }
	    if(this.p3.match == false){
		window.sessionStorage.removeItem("fromRound3");
	    }
	    console.log("sendToMessage");
	    socket.emit('sendMeetAgain', {
		meetAgain: {		    
		    p1: {
			name: vm.p1.name,
			match: vm.p1.match,

		    },
		    p2: {
			name: vm.p2.name,
			match: vm.p2.match,			
		    },
		    p3: {
			name: vm.p3.name,
			match: vm.p3.match,
		    },
		},
		myName: vm.myName,
	    });
	}
    },

});
