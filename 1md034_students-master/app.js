/* jslint node: true */
/* eslint-env node */
'use strict';

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
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
// Serve map.html as /map
app.get('/map', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/map.html'));
});
app.get('/reg', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/reg.html'));
});
app.get('/wait', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/waitForAdmin.html'));
});
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/admin.html'));
});

// Serve dispatcher.html as /dispatcher
app.get('/dispatcher', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/dispatcher.html'));
});
app.get('/loggedIn', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/loggedIn.html'));
});
app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/profile.html'));
});
app.get('/messages', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/messages.html'));
});
app.get('/match', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate.html'));
});
app.get('/ryd2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate2.html'));
});
app.get('/ryd3', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate3.html'));
});
app.get('/meetAgain', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/meetAgain.html'));
});
app.get('/yourMatches', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/yourMatches.html'));
});
app.get('/date1', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate.html'));
});
app.get('/date2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate2.html'));
});
app.get('/date3', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/currentDate3.html'));
});

app.get('/dejt1', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer.html'));
});

app.get('/dejt2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer2.html'));
});

app.get('/dejt3', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/userTimer3.html'));
});

app.get('/help', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/fragehjalp.html'));
});

app.get('/report', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/report.html'));
});

app.get('/report2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/regret2.html'));
});

app.get('/report3', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/regret3.html'));
});
app.get('/regret2', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate2.html'));
});

app.get('/regret3', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/rateyourdate3.html'));
});
// Store data in an object to keep the global namespace clean and
// prepare for multiple instances of data if necessary
function Data() {
    this.reports = {};
    this.counter = 0;
    this.orders = {};
    this.femma = 5;
    this.ratings = {};
    this.match = [ // this.match används för currentDate. TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem? (Om det finns tid)
        this.profile = {},
        this.table = 0,

    ],
    this.matches = {};// this.matches används för meetAgain. TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
    this.timer=0;
};



Data.prototype.getReports = function(){
    return this.reports;
};
/*TypeError: CanTypeError: Cannot set property 'getReports' of undefined
not set property 'getReports' of undefined

  Adds an order to to the queue
*/
Data.prototype.addOrder = function(order) {
    // Store the order in an "associative array" with orderId as key
    this.orders[order.orderId] = order;
};

Data.prototype.sendConsole = function() {
    return this.femma;
};

Data.prototype.getAllOrders = function() {
    return this.orders;
};

Data.prototype.setRatings = function(newRatings) {
	  this.ratings[0] = newRatings.conv;
	  this.ratings[1] = newRatings.intr; 
	  this.ratings[2] = newRatings.match;
}

Data.prototype.sendRatings = function() {
	  return this.ratings;
}; 

// Funktioner för currentDate 
// TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
Data.prototype.setMatch = function (newMatch) {
    this.match.profile = newMatch.profile;
    this.match.table = newMatch.table;
}

Data.prototype.sendMatch = function () {
    return this.match;
}

// Funktioner för meetAgain
// TODO: uppdatera namnen så att de inte är så lika, alternativt koppla ihop dem ? (Om det finns tid)
Data.prototype.setMatches = function(matches) {
	  this.matches[0] = matches.p1; 
	  this.matches[1] = matches.p2;
	  this.matches[2] = matches.p3; 
}

Data.prototype.getMatches = function() {
	  return this.matches; 
}

Data.prototype.submitReports = function(hhg) {
    
    this.reports[this.counter] = hhg;
    this.counter++; 
};


const data = new Data();

io.on('connection', function(socket) {
    // Send list of orders when a client connects
    socket.emit('initialize', { data1: data.sendConsole()});

    // When a connected client emits an "addOrder" message
    socket.on('addOrder', function(order) {
	      data.addOrder(order);
	      // send updated info to all connected clients,
	      // note the use of io instead of socket
	      io.emit('currentQueue', { orders: data.getAllOrders() });
    });
    socket.on('sendConsole', function(hej) {
	      if(data.roundnumber == 3){
	          data.roundnumber == 0;
	          console.log("Speedate event is now over!");
	      }
	      else{
	          console.log("Round " + hej.round + " has started!");
	          data.roundnumber = hej.round;
	      };
	      
	      io.emit('skickaEtta', { ettan: data.sendConsole() });
	      io.emit('nyRunda', {
	          round: data.roundnumber,
	          allowed: hej.allowed,
        });
        //Receive a profile from admin and send it to the user.
        socket.on('sendMatch', function (match) {
            data.setMatch(match);
            io.emit('getMatch', { match: data.sendMatch() });
        })
    });
    socket.on('sendRating', function(rate){
	      console.log("recieved" + rate.conv + rate.intr + rate.match);
	      data.setRatings(rate); 
	      io.emit('redirectRating', { ratings: data.sendRatings(),});
    });
	  
	  socket.on('sendMatches', function(matches){
		    console.log("recieved matches for Maj-Britt, Sending to her messages"); 
		    data.setMatches(matches); 
		    io.emit('sendMessage', { match: data.getMatches(),});
	  });
	  socket.on('getMessage', function(){
		    console.log("sending message");
		    io.emit('sendMessage', { match: data.getMatches() });
	  });
    
    socket.on('report', function(ihiog){
        data.submitReports(ihiog.test); 
        console.log(data.test);
        io.emit('report', {report: data.getReports() });
        
        
    });


});

/* eslint-disable-next-line no-unused-vars */
const server = http.listen(3000, function() {
    console.log('Server listening on port ' + app.get('port'));
});
