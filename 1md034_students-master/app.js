/* jslint node: true */
/* eslint-env node */
'use strict';

//number of participants
let joinedEvent = 0;

// Require express, socket.io, and vue
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

// Pick arbitrary port for server
const port = 3000;
app.set('port', (process.env.PORT || port));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from node_modules as vue/
app.use('/vue',
    express.static(path.join(__dirname, '/node_modules/vue/dist/')));
// Serve index.html directly as root page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
// Serve map.html as /map
app.get('/map', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/map.html'));
});
app.get('/reg', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/reg.html'));
});
app.get('/wait', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/waitForAdmin.html'));
});
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/admin.html'));
});

// Serve dispatcher.html as /dispatcher
app.get('/dispatcher', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/dispatcher.html'));
});
app.get('/loggedIn', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/loggedIn.html'));
});
app.get('/profile', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/profile.html'));
});
app.get('/messages', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/messages.html'));
});
app.get('/match', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate.html'));
});
app.get('/ryd2', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate2.html'));
});
app.get('/ryd3', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate3.html'));
});
app.get('/meetAgain', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/meetAgain.html'));
});
app.get('/yourMatches', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/yourMatches.html'));
});
app.get('/date1', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate.html'));
});
app.get('/date2', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate2.html'));
});
app.get('/date3', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate3.html'));
});

app.get('/dejt1', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer.html'));
});

app.get('/dejt2', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer2.html'));
});

app.get('/dejt3', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer3.html'));
});

app.get('/help', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/fragehjalp.html'));
});

app.get('/report', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/report.html'));
});

app.get('/report2', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/regret2.html'));
});

app.get('/report3', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/regret3.html'));
});
app.get('/regret2', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate2.html'));
});

app.get('/regret3', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate3.html'));
});



// Store data in an object to keep the global namespace clean and
// prepare for multiple instances of data if necessary
function Data() {
    this.timer = 0;
    this.reports = {};
    this.counter = 0;
    this.orders = {};
    this.femma = 5;
    this.users={};
    this.meetAgain = [];
    this.meetAgainCounter = 0; 
    this.connectedUsers = 0; 
    this.match = [ // this.match används för currentDate. TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem? (Om det finns tid)
        this.profile = {},
        this.table = 0,

    ],
    this.matches = {};// this.matches används för meetAgain. TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
    this.timer = 0;
    this.adminInfo = [];
    this.ratings = [];
    this.ratingsCounter = 0; 
    
};

Data.prototype.addUser = function () {
    this.connectedUsers++; 
};

Data.prototype.getConnected = function () {
    return this.connectedUsers; 
};

Data.prototype.getReports = function () {
    return this.reports;
};
/*TypeError: CanTypeError: Cannot set property 'getReports' of undefined
  not set property 'getReports' of undefined

  Adds an order to to the queue
*/
Data.prototype.addOrder = function (order) {
    // Store the order in an "associative array" with orderId as key
    this.orders[order.orderId] = order;
};

Data.prototype.sendConsole = function () {
    return this.femma;
};

Data.prototype.getAllOrders = function () {
    return this.orders;
};

Data.prototype.setRatings = function(newRatings) {    
    this.ratings[data.ratingsCounter] = newRatings;
    data.ratingsCounter++; 
};

Data.prototype.getRatings = function() {
    return this.ratings;
}; 

// Funktioner för currentDate 
// TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
Data.prototype.setMatch = function (newMatch) {
    this.match.profile = newMatch.profile;
    this.match.table = newMatch.table;
};

Data.prototype.sendMatch = function () {
    return this.match;
};

// Funktioner för meetAgain
// TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
Data.prototype.addMeetAgain = function (newMeetAgain) {
    this.meetAgain[this.meetAgainCounter] = newMeetAgain;
    this.meetAgainCounter++;
};

Data.prototype.getMeetAgain = function () {
    return this.meetAgain;
};



Data.prototype.setMatches = function (matches) {
    this.matches[0] = matches.p1;
    this.matches[1] = matches.p2;
    this.matches[2] = matches.p3;
};

Data.prototype.getMatches = function () {
    return this.matches;

};

Data.prototype.submitReports = function (hhg) {

    this.reports[this.counter] = hhg;
    this.counter++;
};

Data.prototype.setAdminInfo = function (adminInfo) {
    this.adminInfo[0] = adminInfo.date1;
    this.adminInfo[1] = adminInfo.date2;
    this.adminInfo[2] = adminInfo.date3;
    this.adminInfo[3] = adminInfo.date4;
    this.adminInfo[4] = adminInfo.date5;
    this.adminInfo[5] = adminInfo.date6;
    this.adminInfo[6] = adminInfo.date7;
    this.adminInfo[7] = adminInfo.date8;
    this.adminInfo[8] = adminInfo.date9;
    this.adminInfo[9] = adminInfo.date10;
};


const data = new Data();

io.on('connection', function (socket) {
    // Send list of orders when a client connects
    socket.emit('initialize', { data1: data.sendConsole() });
    socket.emit('userTimer', {
        timer: data.timer
    });

    // When a connected client emits an "addOrder" message

    socket.on('addOrder', function (order) {
        data.addOrder(order);
        // send updated info to all connected clients,
        // note the use of io instead of socket
        io.emit('currentQueue', { orders: data.getAllOrders() });
    });
    socket.on('sendConsole', function (hej) {
        if (data.roundnumber == 3) {
            data.roundnumber = 0;
            console.log("Speedate event is now over!");

        }
        else {
            console.log("Round " + hej.round + " has started!");
            data.roundnumber = hej.round;
            data.timer = hej.timer;
            console.log("server timer = " + data.timer);
        };

        io.emit('skickaEtta', { ettan: data.sendConsole() });
        io.emit('nyRunda', {
            round: data.roundnumber,
            allowed: hej.allowed,

        });
        //Receive a profile from admin and send it to the user.
        socket.on('sendMatch', function (match) {
            data.setMatch(match);
            io.emit('getMatch', {
                match: data.sendMatch(),
            });
        });
    });
    socket.on('getRoundNumber', function() {
	io.emit('sendRoundNumber', {
	    roundNumber: data.roundnumber,
	});
    });
    socket.on('endRound', function (foo) {
        console.log("In server, timer should be 0: " + foo.timer);
        io.emit("endUserRound", {
            timer: foo.timer
        });
    });

    socket.on('sendRating', function (rate) {
        console.log("recieved" + rate.conv + rate.intr + rate.match);
        data.setRatings(rate);
	io.emit('sendRatingsToAdmin', { ratings: data.getRatings(), });
    });

    socket.on('getRatings', function () {
	io.emit('sendRatingsToAdmin', { ratings: data.getRatings(), });
    });

    socket.on('newUser', function() {
	console.log("new user");
	data.addUser(); 
	io.emit('newUser');
    });
    socket.on('sendToMessage', function(data) {
	io.emit('sendingToMessage', { yesNo: data });
    });

    socket.on('getMessage', function () {
        console.log("sending message");
        io.emit('sendMessage', { match: data.getMatches() });
    });

    socket.on('report', function (ihiog) {
        data.submitReports(ihiog.test);
        console.log(data.test);
        io.emit('report', { report: data.getReports() });
    });

    socket.on('sendMatch', function (receivedInfo) {
        console.log("Received adminInfo");
        data.setAdminInfo(receivedInfo.adminInfo);
        var name = "";
        var i;
        //Send date info to men
        for (i = 0; i < 10; i++) {
            ++joinedEvent;
            name = data.adminInfo[i].male.name;
            io.emit(name, { adminInfo: data.adminInfo[i]});
        } 
        //Send date info to women
        for (i = 0; i < 10; i++) {
            ++joinedEvent;
            name = data.adminInfo[i].female.name;   
            io.emit(name, { adminInfo: data.adminInfo[i] });
        }
	data.ratings = [];
	data.ratingsCounter = 0; 
    });
    //Add logged in users

    socket.on("getProfiles", function() {
	console.log("sending profiles");
	var name = "";
        var i;
        //Send date info to men
	for (i = 0; i < 10; i++) {
            ++joinedEvent;
            name = data.adminInfo[i].male.name;
            io.emit(name, { adminInfo: data.adminInfo[i]});
        } 
        //Send date info to women
        for (i = 0; i < 10; i++) {
            ++joinedEvent;
            name = data.adminInfo[i].female.name;
            io.emit(name, { adminInfo: data.adminInfo[i] });
        } 
	
    });
    socket.on("getAllProfiles", function() {
	console.log("i am here");
	io.emit("sendingAllProfiles", { profiles: data.adminInfo});
    });

    socket.on("getNoOfUsers", function() {
	io.emit("sendNoOfUsers", { connectedUsers: data.getConnected() });
    });

    socket.on('loggedIn', function(user){
	data.addLoggedIn(user);
        var users=[];

        var dict = data.getLoggedInUsers();
        for(var key in dict)
            users.push(dict[key]);
	console.log(users);
	console.log(dict);
        io.emit('currentLoggedIn', {loggedIn: users});
    });

    socket.on('sendMeetAgain', function(meetAgain){
	data.addMeetAgain(meetAgain);
    });
    socket.on('getMeetAgain', function(){
	console.log(data.getMeetAgain());
	io.emit('gettingMeetAgain', { meetAgain: data.getMeetAgain()});
    });
});



/* eslint-disable-next-line no-unused-vars */
const server = http.listen(3000, function () {
    console.log('Server listening on port ' + app.get('port'));
});
