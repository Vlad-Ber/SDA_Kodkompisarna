'use strict';
const socket = io();


const vm = new Vue({
	el:"#vuePlace",
	data:{
		seen: false,
		p1:{
			match:true,
			name: "Henrik",
			age: "33",
			tel: "0707070707",
			loc: "Malmö", 
			img: "https://image.shutterstock.com/image-photo/handsome-man-vivid-poncho-holding-600w-273427037.jpg",
		},
		p2:{
			match:true,
			name: "Mange",
			age: "27",
			tel: "123123123",
			loc: "Molma", 
			img: "https://image.shutterstock.com/image-photo/young-bearded-guy-glasses-holding-260nw-589115231.jpg",
		},
		p3:{
			match:true,
			name: "Karsten",
			age: "30",
			tel: "1122333444",
			loc: "Mölmö", 
			img: "https://ak0.picdn.net/shutterstock/videos/12008510/thumb/10.jpg",
		},
		
	},
	methods:{
		sendMatches: function() {
			this.seen = true;
			socket.emit("sendMatches", {
				p1: this.p1,
				p2: this.p2,
				p3: this.p3,
			}),
			console.log("Matches sent");
		}
	},

 });