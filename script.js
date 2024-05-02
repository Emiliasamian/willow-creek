// script.js
function startGame() {
    window.location.href = "birthday-morning.html";
}

function thankAndRead() {
    window.location.href = "birthday-card.html";
}

function askMeaning() {
    window.location.href = "dad-reaction.html";
}

function showUnhappiness() {
    window.location.href = "unhappiness.html";
}

function Mum() {
    window.location.href = "mum.html";
}

function followDad() {
    window.location.href = "follow-dad.html";
}

function enterBar() {
    window.location.href = "bar.html";
}

function waitOutside() {
    window.location.href = "waiting-outside.html";
}

function continueFollow() {
    window.location.href = "mysterious-call.html";
}

function phoneCall() {
    window.location.href = "mysterious-call2.html";
}

function strangerDanger() {
    window.location.href = "stranger-danger.html";
}

function trustStranger() {
    window.location.href = "bad-instinct.html";
}

function dontTrustStranger() {
    window.location.href = "good-instinct.html";

}

function basement() {
    window.location.href = "waking-up.html";

}

function faints() {
    window.location.href = "birthday-morning.html";

}

function callPolice() {
    window.location.href = "police.html";
}

function knockedOut() {
    window.location.href = "waking-up.html";
}

function enterHouse() {
    window.location.href = "follow-mum.html";
}

function followMum() {
    window.location.href = "leaving-town.html";
}

function visitGrandparents() {
    window.location.href = "grandparents.html";
}

function eavesdrop() {
    window.location.href = "eavesdrop.html";
}

function eavesdrop2() {
    window.location.href = "eavesdrop2.html";
}

function justArrived() {
    window.location.href = "living-room.html";
}

function conversation() {
    window.location.href = "questioning.html";
}

function doorbell() {
    window.location.href = "doorbell.html";
}


function entersHouse() {
    window.location.href = "living-room.html";
}

function mum2() {
    window.location.href = "tension.html";
}

function leave() {
    window.location.href = "dishearten.html";
}

function followDad2() {
    window.location.href = "mysterious-call.html";
}



function Ending() {
    window.location.href = "ending.html";
}


function tbc() {
    window.location.href = "tbc.html";
}


function retry() {
    window.location.href = "index.html";
}



function loadSavedGame() {
    // Functionality to load saved game goes here
    alert("Loading saved game...");
}

var button = document.getElementById("saveProgressButton").style.display;


if (window.location.href.includes("index.html")) {
    //Hide save button
    button.style.display = "none";
}

// script.js
function saveProgress() {
    // Functionality to save progress goes here
    alert("Progress saved!");
}


var backButton = document.getElementById("back-button").style.display;

if (window.location.href.includes("index.html")) {
    //Hide save button
    button.style.display = "none";
}

function goBack(){
    window.history.back();
}
