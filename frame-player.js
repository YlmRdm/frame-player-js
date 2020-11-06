var left = 0;
var top = 0;
var minLeft = -512;
var minBottom = -288;
var xDecrement = 128;
var yDecrement = 72;
var frame = document.getElementById("frame");
var imgData = 0;
var currentWidth = imgData.clientWidth;
var currentHeight = imgData.clientHeight;
let imageList = [
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/0.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/1.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/2.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/3.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/4.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/5.jpg',
    'https://raw.githubusercontent.com/YlmRdm/frame-player-js/main/assets/images/6.jpg'
];

var playbackStates = {"INIT":0, "RUNNING": 1 , "PAUSE":2, "END": 3};
var activeState = playbackStates.INIT;
frame.style.backgroundPositionX = "0px";
frame.style.backgroundPositionY = "0px";
var timerHandler = null;
function play(){
    if(timerHandler){
        clearTimeout(timerHandler);
        if(activeState === playbackStates.PAUSE){
            return;
        }
    }
    timerHandler = setTimeout(function(){
        let pos = parseFloat(frame.style.backgroundPositionX.replace("px",""));
        frame.style.backgroundPositionX = ( pos - xDecrement) + "px";
        if(pos <= -512){
            frame.style.backgroundPositionX ="0px";
            pos =parseFloat(frame.style.backgroundPositionY.replace("px",""));
            frame.style.backgroundPositionY = ( pos - yDecrement) + "px";
            if(pos <= -288){
                frame.style.backgroundPositionY = "0px";
                imgData ++;
                if(imageList.length <= imgData) return;
                frame.style.backgroundImage = "url("+imageList[imgData]+")";
            }
        }
        play();
    }, 250)
};

frame.style.backgroundImage = "url("+imageList[imgData]+")";

// Simple Definition of Enlarging Image Sizes
// if (currentWidth == 128 && currentHeight == 72) {
//     imgData.style.width = (currentWidth + 512) + "px";
//     imgData.style.height = (currentHeight + 288) + "px";
// }

play();
activeState = playbackStates.RUNNING;


function pause(){
    activeState = playbackStates.PAUSE;
}

function resume(){
    activeState = playbackStates.RUNNING;
    play();
}

function ended(){
    activeState = playbackStates.END;
}

document.getElementById("pause").addEventListener("click", eventPlayer);
document.getElementById("resume").addEventListener("click", eventPlayer);

function eventPlayer() {
    if (activeState == playbackStates.PAUSE){
        console.log('Video is paused');
    }
    else if (activeState == playbackStates.RUNNING) {
        console.log('Video is playing now');
    }
    else if (activeState = playbackStates.INIT) {
        console.log('download completed in' + ms);
    } else if (activeState = playbackStates.END) {
        console.log('Video is completed');
    }

}

//Bouncing | Debouncing
var timeout;

window.addEventListener('resize', function ( event ) {
	console.log( 'no debounce' );
	if ( !timeout ) {
		timeout = setTimeout(function() {
			timeout = null;
			console.log( 'debounced' );
		}, 66);
	}
}, false);
