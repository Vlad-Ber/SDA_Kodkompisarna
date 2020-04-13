export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
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
    }
}


'use strict';
const socket = io();

const ind = new Vue({
    el:'#msgTest',
    data: {
	      testNumber: 0,
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
});


