// JavaScript Document
//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
t1 = new TimelineMax({repeat:-1});
t2 = new TimelineMax({repeat:-1});
t3 = new TimelineMax({repeat:-1});

var SITE = {

    initEB : function (){
        bgExit = document.getElementById("background_exit");
        bgExit.addEventListener('click', SITE.addListeners.bgExitHandler);
        SITE.init();

    },

    init : function (){
       TweenMax.to($("#copy0"),0, {scale:5,alpha:0});
       TweenMax.to($("#copy1"),0, {scale:5,alpha:0});
       TweenMax.to($("#copy2"),0, {scale:5,alpha:0});
       TweenMax.to($("#eaAccess"),0, {scale:5,alpha:0});
       TweenMax.to($("#bf1Logo"),0, {scale:5,alpha:0});
       TweenMax.to($("#cta"),0, {scale:0,alpha:0});
       TweenMax.to($("#pegi"),0, {alpha:0});
       TweenMax.delayedCall(0.5, SITE.animate,[0]);
    },

    animate : function (whichStep) {

            switch (whichStep) {

                 case 0:
                    TweenLite.to($("#content"),0.1, {alpha:1});
                    TweenMax.to($("#smoke"),8, {left:0,ease:Linear.easeNone,onComplete:function(){
                      t1.pause();
                      t2.pause();
                      t3.pause();
                    }});
                    TweenMax.to($("#smoke2"),7, {left:0,ease:Linear.easeNone});
                    TweenMax.to($("#smoke"),1, {alpha:0,delay:6.5,ease:Linear.easeNone});
                    TweenMax.to($("#smoke2"),1, {alpha:0,delay:6.5,ease:Linear.easeNone});
                    SITE.flareAnimation();
                    TweenLite.to($("#copy0"),0.25, {rotation:0.001,scale:1.1,alpha:1,delay:0.1,force3D:true,ease:Linear.easeNone});
                    TweenLite.to($("#copy0"),1.75, {rotation:0.001,scale:0.9,delay:0.35,force3D:true});
                    TweenLite.to($("#copy0"),0.25, {rotation:0.001,scale:0.5,delay:2,alpha:0,force3D:true});
                    TweenLite.delayedCall(2.5, SITE.animate,[1]);
                break;
                case 1:
                    TweenLite.to($("#copy1"),0.25, {rotation:0.001,scale:1.1,alpha:1,delay:0.1,force3D:true,ease:Linear.easeNone});
                    TweenLite.to($("#copy1"),1.75, {rotation:0.001,scale:0.9,delay:0.35,force3D:true});
                    TweenLite.to($("#copy1"),0.25, {rotation:0.001,scale:0.5,delay:2,alpha:0,force3D:true});
                    
                    TweenLite.delayedCall(2.5, SITE.animate,[2]);
                break;
                case 2:
                    TweenLite.to($("#copy2"),0.25, {rotation:0.001,scale:1.1,alpha:1,delay:0.1,force3D:true,ease:Linear.easeNone});
                    TweenLite.to($("#copy2"),1.75, {rotation:0.001,scale:0.9,delay:0.35,force3D:true});
                    TweenLite.to($("#copy2"),0.25, {rotation:0.001,scale:0.5,delay:2,alpha:0,force3D:true});
                    TweenLite.delayedCall(2, SITE.animate,[3]);
                break;
                case 3:
                    TweenLite.to($("#copy1"),1, {top:131,left:-22,scale:0.65,force3D:true});
                    TweenLite.to($("#eaAccess"),1, {top:173,left:60,scale:0.82,force3D:true});
                    TweenLite.to($("#bf1Logo"),0.5, {scale:1,delay:0.7,alpha:1,force3D:true});
                    TweenLite.to($("#xbox"),0.5, {left:805,delay:0.7,alpha:1,force3D:true});
                    TweenLite.to($("#diceLogo"),0.5, {delay:0.7,alpha:1,force3D:true});
                    TweenLite.to($("#cta"),0.5, {scale:1,delay:0.7,alpha:1,force3D:true});
                    TweenLite.to($( "#vidBox" ), 0.8, {scale:1,alpha:1,delay:1.5});
                    // TweenLite.to($("#pegi"),0.5, {alpha:1,force3D:true});
                    TweenLite.delayedCall(0.75, function(){
                        $("#background_exit").mouseover(function(){
                            SITE.rollover();
                        });
                        $("#background_exit").mouseout(function(){
                            SITE.rollout();
                        });
                    });
                break;
            }
    },
    flareAnimation : function (){

       t1.to($("#flare"),4, {rotation:0.001,top:0,alpha:0.5,ease:Linear.easeNone,force3D:true});
       t1.to($("#flare"),0.5, {rotation:0.001,alpha:0,delay:0,top:10,ease:Linear.easeNone,force3D:true});
       t1.to($("#flare"),0, {rotation:0.001,top:0,delay:0,alpha:1,ease:Linear.easeNone,force3D:true});

       t3.to($("#flare2"),4, {rotation:0.001,top:0,delay:2.75,alpha:0.5,ease:Linear.easeNone,force3D:true});
       t3.to($("#flare2"),0.5, {rotation:0.001,alpha:0,delay:0,top:10,ease:Linear.easeNone,force3D:true});
       t3.to($("#flare2"),0, {rotation:0.001,top:0,delay:0,alpha:1,ease:Linear.easeNone,force3D:true});

       t2.to($("#particles"),4, {rotation:0.001,top:0,left:0,alpha:1,ease:Linear.easeNone,force3D:true});
       t2.to($("#particles"),0.5, {rotation:0.001,alpha:0,delay:0,ease:Linear.easeNone,force3D:true});
       t2.to($("#particles"),0, {rotation:0.001,top:-60,left:-60,alpha:1,delay:0,ease:Linear.easeNone,force3D:true});

    },
    rollover : function(){
      
        TweenMax.to($( "#cta" ), 0.25, {rotation:0.001,delay:0.1,scale:1.1,force3D:true});
        t1.resume();
        t2.resume();
        t3.resume();
    },
    rollout : function(){
      
        TweenMax.to($( "#cta" ), 0.25, {rotation:0.001,delay:0.1,scale:1,force3D:true});
        t1.pause();
        t2.pause();
        t3.pause();
    },
    addListeners : {

        bgExitHandler : function() {

            //DCS clicktag:
            Enabler.exit("backgroundExit");
            //DCM clicktage:
            //window.open(window.clickTag0);
             resetVideo();
        },
    }
}

SITE.initEB();

/* VIDEO CONTROLS */

var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');
var stopBtn = document.getElementById('stop-btn');
var video1 = document.getElementById('video1');
var myDiv = document.getElementById('vidBox');
var myCon = document.getElementById('videoControls');

playBtn.addEventListener('click', pausePlayHandler, false);
pauseBtn.addEventListener('click', pausePlayHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
stopBtn.addEventListener('click', stopHandler, false);

function resetVideo () {
   video1.currentTime = 0;
   video1.pause();
   pauseBtn.style.visibility = 'hidden';
   playBtn.style.visibility = 'visible';
}

function pausePlayHandler(e) {
   if (video1.paused) {
       // If paused, then play
       video1.play();
        // Show pause button and hide play button
       pauseBtn.style.visibility = 'visible';
       playBtn.style.visibility = 'hidden';
    } else {
       // If playing, then pause
       video1.pause();
       // Show play button and hide pause button
       pauseBtn.style.visibility = 'hidden';
       playBtn.style.visibility = 'visible';
   }
}

function muteUnmuteHandler(e) {
   if (video1.volume == 0.0) {
       // If muted, then turn it on
       video1.volume = 1.0;
       // Show mute button and hide unmute button
       muteBtn.style.visibility = 'visible';
       unmuteBtn.style.visibility = 'hidden';
    } else {
       // If unmuted, then turn it off
       video1.volume = 0.0;
       // Show unmute button and hide mute button
       muteBtn.style.visibility = 'hidden';
       unmuteBtn.style.visibility = 'visible';
   }
}

function stopHandler(e) {
   // There is no stop method for HTML5 video
   // As a workaround, pause the video
   // and set currentTime to 0
   video1.currentTime = 0;
   video1.pause();
   pauseBtn.style.visibility = 'hidden';
   playBtn.style.visibility = 'visible';
   // Show or hide other video buttons accordingly
}

myDiv.onmouseover = function() { 
    TweenLite.to(myCon,0.5,{alpha:1});  
}

myDiv.onmouseout = function() { 
    TweenLite.to(myCon,0.5,{alpha:0});  
}

Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
  studio.video.Reporter.attach('video_1', video1);
});

video1.addEventListener('ended', videoEndHandler, false);

function videoEndHandler(e) {
  resetVideo();
}

