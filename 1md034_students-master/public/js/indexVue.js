'use strict';
const socket = io();

let men = [
	  {
        "password": "peter96",
		    "surname": "Peter",
		    "age": 42,
		    "gender": "M",
		    "desc": "Har fyra barn.",
		    "pic": "https://image.shutterstock.com/image-photo/business-building-teamwork-gesture-people-600w-222756625.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
    /* 2 */
	  {
        "password": "pellegillarhets",
		    "surname": "Pelle",
		    "age": 25,
		    "gender": "M",
		    "desc": "Är ny i staden.",
		    "pic": "https://image.shutterstock.com/image-photo/young-male-architect-working-office-600w-1523629502.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },	
	  {
        "password": "henriksexkungen",
		    "surname": "Henrik",
		    "age": 33,
		    "gender": "M",
		    "desc": "Gillar matlagning.",
		    "pic": "https://image.shutterstock.com/image-photo/handsome-man-vivid-poncho-holding-600w-273427037.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
    /* 6 */
	  {
        "password": "racerjanne25",
		    "surname": "Janne",
		    "age": 22,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://image.shutterstock.com/z/stock-photo-half-body-shot-of-an-average-guy-wearing-a-blue-shirt-isolated-against-a-white-background-109512821.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
	  {
        "password": "bärsberra",
		    "surname": "Berra",
		    "age": 34,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://ak4.picdn.net/shutterstock/videos/12498524/thumb/2.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },

    /* 10 */

	  {
        "password": "mangemaker9612",
		    "surname": "Mange",
		    "age": 27,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://image.shutterstock.com/image-photo/young-bearded-guy-glasses-holding-260nw-589115231.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
	  {
        "password": "xxsigge17xx",
		    "surname": "Sigmund",
		    "age": 25,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://image.shutterstock.com/image-photo/attractive-stunning-manly-smiling-macho-260nw-1110990725.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
    /* 14 */
	  {
        "password":"karsetens",
		    "surname": "Karsten",
		    "age": 30,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://ak0.picdn.net/shutterstock/videos/12008510/thumb/10.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
	  {
        "password": "callmebond007",
		    "surname": "James",
		    "age": 59,
		    "gender": "M",
		    "desc": "Gillar långa promenader på stranden i solnedgången.",
		    "pic": "https://image.shutterstock.com/image-photo/portrait-young-man-squinting-his-260nw-412177746.jpg",
		    "history": {
			      "firstDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "secondDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
			      "thirdDate": {
				        "name": "", /* Namnet på personen de dejtade */
				        "givenRating": { /* Vilken rating hen gav */
					          "x": "",
					          "y": "",
					          "z": ""
				        },
				        "recievedRating": { /* Vilken rating hen fick */
					          "x": "",
					          "y": "",
					          "z": ""
				        }
			      },
		    }
	  },
    /* 18 */
	  {"password":"oloftheman17",
		 "surname": "Olof",
		 "age": 50,
		 "gender": "M",
		 "desc": "Gillar långa promenader på stranden i solnedgången.",
		 "pic": "https://ak0.picdn.net/shutterstock/videos/12973550/thumb/1.jpg",
		 "history": {
			   "firstDate": {
				     "name": "", /* Namnet på personen de dejtade */
				     "givenRating": { /* Vilken rating hen gav */
					       "x": "",
					       "y": "",
					       "z": ""
				     },
				     "recievedRating": { /* Vilken rating hen fick */
					       "x": "",
					       "y": "",
					       "z": ""
				     }
			   },
			   "secondDate": {
				     "name": "", /* Namnet på personen de dejtade */
				     "givenRating": { /* Vilken rating hen gav */
					       "x": "",
					       "y": "",
					       "z": ""
				     },
				     "recievedRating": { /* Vilken rating hen fick */
					       "x": "",
					       "y": "",
					       "z": ""
				     }
			   },
			   "thirdDate": {
				     "name": "", /* Namnet på personen de dejtade */
				     "givenRating": { /* Vilken rating hen gav */
					       "x": "",
					       "y": "",
					       "z": ""
				     },
				     "recievedRating": { /* Vilken rating hen fick */
					       "x": "",
					       "y": "",
					       "z": ""
				     }
			   },
		 }
	  }
]

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

