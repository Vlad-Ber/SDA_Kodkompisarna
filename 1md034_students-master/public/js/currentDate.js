'use strict'
const socket = io();

//Updates the 
function setTable(tableToSet) {
	var table = document.getElementById("table" + tableToSet);
	table.style.backgroundColor = "green";
}

const matchVue = new Vue({
	el: '#current_date',
	data: {
		p1:{
			name: "Henrik",
			age: 33,
			gender: "M",
			desc: "Gillar matlagning och annat som är jättekul och jättetrevligt. Jag är trevlig",
			pic: "https://image.shutterstock.com/image-photo/handsome-man-vivid-poncho-holding-600w-273427037.jpg",
			table: 5,
		},
		p2:{
			name: "Mange",
			age: 27,
			gender: "M",
			desc: "Gillar långa promenader på stranden i solnedgången men också katter.",
			pic: "https://image.shutterstock.com/image-photo/young-bearded-guy-glasses-holding-260nw-589115231.jpg",
			table: 3,		
		},
		p3:{
			name: "Karsten",
			age: 30,
			gender: "M",
			desc: "Gillar långa promenader på stranden i solnedgången.",
			pic: "https://ak0.picdn.net/shutterstock/videos/12008510/thumb/10.jpg",
			table: 0,
		},
	},
	mounted: function() {
		socket.on('getMatch', function (matchProfile) {
			this.name = matchProfile.profile.name;
			this.desc = matchProfile.profile.desc;
			this.age = matchProfile.profile.age;
			this.pic = matchProfile.profile.pic;
			this.table = matchProfile.table;
		}.bind(this));
	},
	mounted: function () {
		setTable(2);
	}
});
