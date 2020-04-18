let loggedIn = [];

/*function getUser(key, value, multiple, case_sense){
    let result = [];

    for(var index in men){

        var men = men[index];
        if(typeof men[key] != 'undefined'){
            var compare = user[key];

            if(case_sense){

                if(typeof compare == 'string')
                {
                    compare = compare.toLowerCase();
                }

                if(typeof value == 'string')
                {
                    value = value.toLowerCase();
                }
            }

            if (typeof value == 'undefined' || ((strict && compare === value) || (!strict && compare == value))) {
                // if we want multiple results
                if (multiple) {
                    // the result will be appended to the result array
                    result.push(user);
                } else {
                    // otherwise we just return it
                    return user;
                }
            }
        }
    }
     return multiple ? result : null;
}
*/
let men = [
	  {
        "password": "peter96",
		"name": "Peter",
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
		"name": "Pelle",
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
		"name": "Henrik",
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
		"name": "Janne",
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
		"name": "Berra",
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
		"name": "Mange",
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
		"name": "Sigmund",
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
		"name": "Karsten",
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
		"name": "James",
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
		"name": "Olof",
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
let women = [
	  {"password": "maggan17",
		"name": "Maj-Britt",
		"age": 65,
		"gender": "F",
		"desc": "Gillar katter.",
		"pic": "https://image.shutterstock.com/image-photo/funny-grandmother-portraits-senior-old-600w-1522642574.jpg",
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
	  {"password": "bakningefint",
		"name": "Ylva",
		"age": 25,
		"gender": "F",
		"desc": "Söker en soul mate.",
		"pic": "https://image.shutterstock.com/image-photo/attractive-teen-woman-holding-you-600w-1640366458.jpg",
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
/* 4 */
	  {"password": "hets",
		"name": "Anna",
		"age": 30,
		"gender": "F",
		"desc": "Gillar natur.",
		"pic": "https://image.shutterstock.com/image-photo/app-likes-comments-feed-composed-600w-1512048017.jpg",
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
	  {"password": "ingabinga",
		"name": "Inger",
		"age": 40,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://image.shutterstock.com/image-photo/smilling-attractive-middle-aged-woman-600w-411325876.jpg",
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
/* 8 */
	  {"password": "benefits",
		"name": "Benita",
		"age": 22,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://ak2.picdn.net/shutterstock/videos/4682612/thumb/2.jpg",
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
	  {"password": "barbo2w3",
		"name": "Barbro",
		"age": 43,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://image.shutterstock.com/image-photo/face-beautiful-young-girl-clean-260nw-328676489.jpg",
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
/* 12 */
	  {"password": "hewlöa",
		"name": "Helga",
		"age": 28,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://image.shutterstock.com/image-photo/closeup-portrait-elegant-middle-aged-260nw-95732242.jpg",
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

	  {"password": "berit12",
		"name": "Berit",
		"age": 23,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://image.shutterstock.com/image-photo/modern-business-woman-office-copy-260nw-95201956.jpg",
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
	  {"password": "helena1987",
		"name": "Helena",
		"age": 52,
		"gender": "F",
		"desc": "Gillar långa promenader på stranden i solnedgången.",
		"pic": "https://ak3.picdn.net/shutterstock/videos/16546513/thumb/1.jpg",
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
    {"password": "hejhej",
		"name": "Sanna",
		"age": 34,
		"gender": "F",
		"desc": "Gillar att baka bullar.",
		"pic": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PSBX4OCUT4I6VAGOG6UNIJTMBE.jpg",
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

]

