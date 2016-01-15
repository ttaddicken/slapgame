// Global Variables begin
var health = 100
var healthBar = getElem("health")
var mainPic = getElem("mainPic")
var mainpanel = getElem("mainpanel")

var imgCharactersUrl = 'assets/img/characters/'
// global Variables end
document.getElementById("intro").play()

function getElem(id) {
    return document.getElementById(id);
}
// This section starts the attack sound effects
var hitSounds = {
    slap: getElem("puncheffect"),
    kick: getElem("stompeffect"),
    cut: getElem("stabeffect")
}
// this ends the sound effects section
var bossImgs = {
    "100": 'Boss.png',
    "90": 'Boss90.png',
    "70": 'Boss70.png',
    "50": 'Boss50.png',
    "30": 'Boss30.png',
    "0": 'death1.jpg',
}

//attack function begin
function attack(type) {
    attacks[type]()
    hitSounds[type].currentTime = 0;
    showHitImg(type)
    hitSounds[type].play()
    update()
}
//attack function end

// This is the beginning of the health bar section from attacks
var attacks = {
    slap: function slap() {
        health = health - 1
    },
    kick: function kick() {
        health = health - 5
    },
    cut: function cut() {
        health = health - 10
    }
}
//  This is the end of the health bar section

// This section is for attack effect images
var attackImgs = {
    slap: getElem('attack-img3'),
    kick: getElem('attack-img2'),
    cut: getElem('attack-img1')
}

function showHitImg(type) {
    attackImgs[type].hidden = false;
    setTimeout(function () {
        attackImgs[type].hidden = true;
    }, 500)
}
// This ends the attack picture section 

// This function is to change the main pic for damage
function choosePick() {

    if (healthBar.value === 100) {
        mainPic.src = imgCharactersUrl + bossImgs['100']
    } else if (healthBar.value < 91 && healthBar.value > 70) {
        mainPic.src = imgCharactersUrl + bossImgs['90']
    } else if (healthBar.value < 71 && healthBar.value > 50) {
        mainPic.src = imgCharactersUrl + bossImgs['70']
    } else if (healthBar.value < 51 && healthBar.value > 30) {
        mainPic.src = imgCharactersUrl + bossImgs['50']
    } else if (healthBar.value < 31 && healthBar.value > 0) {
        mainPic.src = imgCharactersUrl + bossImgs['30']
    } else if (healthBar.value === 0) {
        mainPic.src = imgCharactersUrl + bossImgs['0']
            }
}
// this ends the main pic section

// this is to change the main panel based on health
function lowhealth() {
    if (healthBar.value <= 50) {
        healthBar.classList.add("panel-danger")
        // mainPanel.classList.add("panel-danger")
    } else {
        healthBar.classList.remove("panel-danger")
        console.log("I made it to remove a class" + healthBar)
    }
}
// this is to end the section to change the main panel based on health
// This section updates the program
function update() {
    healthBar.value = health;
    choosePick();
    lowhealth();
}
// end of update
//this function restarts and resets the game
function restartGame() {
    health = 100;
    update()
}
// end of function