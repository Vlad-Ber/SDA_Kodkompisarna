'use strict';
const socket = io();

const rep = new Vue({
    el:'#rep',
    data:{
        reason: 6,
    },

    methods: {

        report1: function(){
            console.log("Successful report!");
            
            socket.emit("report", {
                test: this.reason,
                
            })
        }

        // regret: function() {
        //    location.href="/regret";
    }
    
});
