'use strict';
const socket = io();



const ind = new Vue({
    el:'#msgTest',
    data: {
	      testNumber: 0,
        surname: "",
        password: "",
        
        
        
        allUsers: {},
        currentUser: '',
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

    methods: {	
        login: function () {
            console.log(this.gender);
            if (this.surname in this.allUsers &&
                this.allUsers[this.surname]['password'] == this.password) {

                this.currentUser = this.allUsers[this.surname];
                this.contacts = this.currentUser.matches;

                socket.emit('loggedIn', this.currentUser);
                sessionStorage.setItem("currentUser", JSON.stringify(this.currentUser));
                window.location.href = "/user"
            } else {
                document.getElementById("loginInfo").style.display = "block";
            }
        }
    }
});




/*export default {
  name: 'Login',
  data() {
  return {
  input: {
  name: "",
  password: ""
  }
  }
  },
  methods: {
  /*login() {
  if(this.input.username != "" && this.input.password != "") {
  if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
  this.$emit("authenticated", true);
  this.$router.replace({ name: "secure" });
  } else {
  console.log("The username and / or password is incorrect");
  }
  } else {
  console.log("A username and password must be present");
  }
  }

  login: function () {
  console.log(this.gender);
  if (this.name in this.allUsers &&
  this.allUsers[this.name]['password'] == this.password) {

  this.currentUser = this.allUsers[this.name];
  this.contacts = this.currentUser.matches;

  socket.emit('loggedIn', this.currentUser);
  sessionStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  window.location.href = "/user"
  } else {
  document.getElementById("loginInfo").style.display = "block";
  }
  }
  }
  }*/

