'use strict';

var Alexa = require('alexa-sdk');
var audioData = require('./audioAssets');
var constants = require('./constants');

const keySlotName = "Key";
const tempoSlotName = "Tempo";

var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        /*
         *  All Intent Handlers for state : START_MODE
         */
        'LaunchRequest' : function () {
            //  Change state to START_MODE
            this.handler.state = constants.states.START_MODE;

            var message = 'Welcome. What would you like to play?';
            var reprompt = 'For example, you can say, play A minor, to begin.';

            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayAudio' : function () {
            controller.play.call(this);
        },
        'AMAZON.HelpIntent' : function () {
            var message = 'Welcome to Jam Trax. You can say, play the audio to begin the track.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand. Please say, play the audio, to begin the audio.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }),
    playModeIntentHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Intent Handlers for state : PLAY_MODE
         */
        'LaunchRequest' : function () {
            /*
             *  Session resumed in PLAY_MODE STATE.
             *  If playback had finished during last session :
             *      Give welcome message.
             *      Change state to START_STATE to restrict user inputs.
             *  Else :
             *      Ask user if he/she wants to resume from last position.
             *      Change state to RESUME_DECISION_MODE
             */
            var message;
            var reprompt;
            this.handler.state = constants.states.START_MODE;
            var message = 'Welcome to Jam Trax. You can say, play the audio to begin the track.';
            var reprompt = 'You can say, play the audio, to begin.';

            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayAudio' : function () { controller.play.call(this) },
        'AMAZON.NextIntent' : function () { controller.playNext.call(this) },
        'AMAZON.PreviousIntent' : function () { controller.playPrevious.call(this) },
        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this) },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this) },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },
        'AMAZON.LoopOnIntent' : function () { controller.loopOn.call(this) },
        'AMAZON.LoopOffIntent' : function () { controller.loopOff.call(this) },
        'AMAZON.ShuffleOnIntent' : function () { controller.shuffleOn.call(this) },
        'AMAZON.ShuffleOffIntent' : function () { controller.shuffleOff.call(this) },
        'AMAZON.StartOverIntent' : function () { controller.startOver.call(this) },
        'AMAZON.HelpIntent' : function () {
            // This will called while audio is playing and a user says "ask <invocation_name> for help"
            var message = 'You are listening to Jam Trax. ';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    })
};

module.exports = stateHandlers;

var controller = function () {
    return {
        play: function () {
            /*
             *  Using the function to begin playing audio when:
             *      Play Audio intent invoked.
             *      Resuming audio when stopped/paused.
             *      Next/Previous commands issued.
             */
            this.handler.state = constants.states.PLAY_MODE;
            
            var keySlotValue = isSlotValid(this.event.request, keySlotName); //slot value or false
            var tempoSlotValue = isSlotValid(this.event.request, tempoSlotName);

            
        	if  (keySlotValue) {   
        		var keyIndex = keyToIndex(keySlotValue);
            	var tempoIndex = tempoToIndex(tempoSlotValue);

                if(keyIndex == -1)
                {
                    this.emit(':tell', "Key not recognized");
                    return;
                }
                if(tempoIndex == -1)
                {
                    this.emit(':tell', "Tempo not recognized");
                    return;
                }

                if(keySlotValue === "i wish" || keySlotValue === "stevie wonder")
                    tempoIndex = 2;
            	
            	var keyName = audioData[keyIndex].name;
        	    var tempoName = audioData[keyIndex].tempos[tempoIndex].name;
        	    	        		
            	var message = "This is " + keyName + " at " + tempoName + ". ";
            	
            	var mp3File = audioData[keyIndex].tempos[tempoIndex].file;
            	
            	var audioFile = "<audio src=\"" + mp3File + "\" />"
            	this.emit(':tell', message + audioFile);
            	
            	this.emit(':responseReady');
        	}
        	else {
        		this.emit(':tell', "Response not recognized");
        	}
        },
        stop: function () {
            /*
             *  Issuing AudioPlayer.Stop directive to stop the audio.
             *  Attributes already stored when AudioPlayer.Stopped request received.
             */
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        }
    }
}();



function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        var slotValue;
        
        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

function keyToIndex(keySlotName){
    if(keySlotName === "a" || keySlotName === "a major" || keySlotName === "a. major" )
        return 0;
    if(keySlotName === "b" || keySlotName === "b major" || keySlotName === "b. major")
        return 1;
    if(keySlotName === "c" || keySlotName === "c major" || keySlotName === "c. major")
        return 2;
    if(keySlotName === "d" || keySlotName === "d major" || keySlotName === "d. major")
        return 3;
    if(keySlotName === "e" || keySlotName === "e major" || keySlotName === "e. major")
        return 4;
    if(keySlotName === "f" || keySlotName === "f major" || keySlotName === "f. major")
        return 5;
    if(keySlotName === "g" || keySlotName === "g major" || keySlotName === "g. major")
        return 6;
    if(keySlotName === "rock" || keySlotName === "rock beat" || keySlotName === "rock drums")
        return 7;
    if(keySlotName === "a flat" || keySlotName === "a. flat" || keySlotName === "g sharp" || keySlotName === "g. sharp" )
        return 8;
    if(keySlotName === "b flat" || keySlotName === "b. flat" || keySlotName === "a sharp" || keySlotName === "a. sharp" )
        return 9;
    if(keySlotName === "d flat" || keySlotName === "d. flat" || keySlotName === "c sharp" || keySlotName === "c. sharp" )
        return 10;
    if(keySlotName === "e flat" || keySlotName === "e. flat" || keySlotName === "d sharp" || keySlotName === "d. sharp" )
        return 11;
    if(keySlotName === "g flat" || keySlotName === "g. flat" || keySlotName === "f sharp" || keySlotName === "f. sharp" )
        return 12;
    if(keySlotName === "click" || keySlotName === "click track" || keySlotName === "metronome" || keySlotName === "a click track" || keySlotName === "a metronome")
        return 13;
    if(keySlotName === "i wish" || keySlotName === "stevie wonder")
        return 14;

    return -1;
}

function tempoToIndex(tempoSlotName){
	if(tempoSlotName === "60" || tempoSlotName === "60 bpm" || tempoSlotName === "60 beats per minute" || tempoSlotName === "sixty beats per minute" )
        return 0;
    if(tempoSlotName === "80" || tempoSlotName === "80 bpm" || tempoSlotName === "80 beats per minute" || tempoSlotName === "eighty beats per minute")
        return 1;
    if(tempoSlotName === "100" || tempoSlotName === "100 bpm" || tempoSlotName === "100 beats per minute" || tempoSlotName === "one hundred beats per minute")
        return 2;
    if(tempoSlotName === "120" || tempoSlotName === "120 bpm" || tempoSlotName === "120 beats per minute" || tempoSlotName === "one hundred twenty beats per minute")
        return 3;
    if(tempoSlotName === "140" || tempoSlotName === "140 bpm" || tempoSlotName === "140 beats per minute" || tempoSlotName === "one hundred forty beats per minute")
        return 4;
    if(tempoSlotName === "160" || tempoSlotName === "160 bpm" || tempoSlotName === "160 beats per minute" || tempoSlotName === "one hundred sixty beats per minute")
        return 5;
    if(tempoSlotName === "180" || tempoSlotName === "180 bpm" || tempoSlotName === "180 beats per minute" || tempoSlotName === "one hundred eighty beats per minute")
        return 6;
    if(tempoSlotName === "200" || tempoSlotName === "200 bpm" || tempoSlotName === "200 beats per minute" || tempoSlotName === "two hundred beats per minute")
        return 7;
    if(tempoSlotName === "220" || tempoSlotName === "220 bpm" || tempoSlotName === "220 beats per minute" || tempoSlotName === "two hundred twenty beats per minute")
        return 8;

    return 3;
}

