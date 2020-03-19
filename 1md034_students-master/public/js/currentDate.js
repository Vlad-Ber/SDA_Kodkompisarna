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
		name: "",
		desc: "",
		age: 0,
		pic: "",
		table: 0,
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
		setTable(this.table);
	}
});