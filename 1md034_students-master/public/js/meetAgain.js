'use strict';
const socket = io();


const vm = new Vue({
	el:"#vuePlace",
	data:{
		seen: false,
		p1:{
			match:true,
			name: "pelle",
			age: "19",
			tel: "0707070707",
			loc: "Malmö", 
			img: "https://image.shutterstock.com/z/stock-photo-half-body-shot-of-an-average-guy-wearing-a-blue-shirt-isolated-against-a-white-background-109512821.jpg",
		},
		p2:{
			match:true,
			name: "Palle",
			age: "20",
			tel: "123123123",
			loc: "Molma", 
			img: "https://thumbs.dreamstime.com/z/successful-deal-happy-person-powerful-manager-713736.jpg",
		},
		p3:{
			match:true,
			name: "Pille",
			age: "21",
			tel: "1122333444",
			loc: "Mölmö", 
			img: "https://previews.123rf.com/images/ljupco/ljupco1304/ljupco130400190/19122131-full-length-portrait-of-a-mature-gentleman-dancing-with-a-hula-hoop-isolated-on-white-background.jpg",
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