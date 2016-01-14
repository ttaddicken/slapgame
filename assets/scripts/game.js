// Global Variables begin
var health = 100
var healthBar = getElem("health")
var mainPic = getElem("mainPic")
// var attackImg1 = getElem("attack-img1")
// var attackImg2 = getElem("attack-img2 ")
// var attackImg3 = getElem("attack-img3")
// var endgame = getElem("endgame-img")
// var mainPic90 = getElem("mainPic90")
// var mainPic70 = getElem("mainPic70")
// var mainPic50 = getElem("mainPic50")
// var mainPic30 = getElem("mainPic30")
// var puncheffect = getElem("puncheffect")
var mainpanel = getElem("mainpanel")

var imgCharactersUrl = 'assets/img/characters/'
// global Variables end
document.getElementById("intro").play()

function getElem(id) {
    return document.getElementById(id);
}

var hitSounds = {
    slap: getElem("puncheffect"),
    kick: getElem("stompeffect"),
    cut: getElem("stabeffect")
}
var bossImgs = {
    "100": 'Boss.png',
    "90": 'Boss90.png',
    "70": 'Boss70.png',
    "50": 'Boss50.png',
    "30": 'Boss30.png',
    "0": 'death1.png',
}

//attack function
function attack(type) {
    attacks[type]()
    hitSounds[type].currentTime = 0;
    showHitImg(type)
    hitSounds[type].play()
    update()
}


// This is the beginning of the health bar section
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

//  This is the end of the health bar section
// This section adds attack pics for .5 secs
// function hitPick() {
//     attackImg3.hidden = false;
//     setTimeout(function () {
//         attackImg3.hidden = true;
//     }, 500)
// }
// function cutPick() {
//     attackImg1.hidden = false;
//     setTimeout(function () {
//         attackImg1.hidden = true;
//     }, 500)
// }
// function stompPick() {
//     attackImg2.hidden = false;
//     setTimeout(function () {
//         attackImg2.hidden = true;
//     }, 500)
// }
// This ends the attack picture section 
// This function is to change the main pic for damage
function choosePick() {

    if (healthBar.value < 91 && healthBar.value > 70) {
        mainPic.src = imgCharactersUrl + bossImgs['90']
        // mainPic.hidden = true;
        // mainPic90.hidden = false;
    } else if (healthBar.value < 71 && healthBar.value > 50) {
        mainPic.src = imgCharactersUrl + bossImgs['70']
        // mainPic90.hidden = true;
        // mainPic70.hidden = false
    } else if (healthBar.value < 51 && healthBar.value > 30) {
        mainPic.src = imgCharactersUrl + bossImgs['50']
        // mainPic70.hidden = true;
        // mainPic50.hidden = false;
    } else if (healthBar.value < 31 && healthBar.value > 0) {
        mainPic.src = imgCharactersUrl + bossImgs['30']
        // mainPic50.hidden = true;
        // mainPic30.hidden = false;
    } else if (healthBar.value === 0) {
        // mainPic30.hidden = true;
        // endgame.hidden = false;
        setTimeout(function () {
            mainPic.src = imgCharactersUrl + bossImgs['0']
            alert("!!!!You have killed the boss!!!! Now you are the boss. How will you treat your employees?");
        }, 1000)

    }
}
// this ends the main pic section
// This section starts the attack sound effects
// function stabSound() {
//     stabeffect.play();
// }
// function punchSound() {
//     puncheffect.play();
// }
// function stompSound() {
//     stompeffect.play();
// }
// this ends the sound effects section
// this is to change the main panel based on health
function lowhealth() {
    if (healthBar.value < 50) {
        mainpanel.classList.add("panel-danger")
    } else {
        mainpanel.classList.add("panel-default")
    }
}
// this is to end the section to change the main panel based on health
// This section updates the program
function update() {
    //lowhealth();
    healthBar.value = health
    choosePick()
}
// end of update