// Global Variables begin
var health = 100
var healthBar = document.getElementById("health")
var mainPic = document.getElementById("mainPic")
var attackImg1 = document.getElementById("attack-img1")
var attackImg2 = document.getElementById("attack-img2")
var attackImg3 = document.getElementById("attack-img3")
var endgame = document.getElementById("endgame-img")
var mainPic90 = document.getElementById("mainPic90")
var mainPic70 = document.getElementById("mainPic70")
var mainPic50 = document.getElementById("mainPic50")
var mainPic30 = document.getElementById("mainPic30")
// global Variables end
// This is the beginning of the health bar section
function slap() {
    health = health - 1
    healthBar.value = health
    hitPick()
}
function kick() {
    health = health - 5
    healthBar.value = health
    stompPick()
}
function cut() {
    health = health - 10
    healthBar.value = health
    cutPick()
    choosePick()
}
//  This is the end of the health bar section
// This section adds attack pics for .5 secs
function hitPick() {
    attackImg3.hidden = false;
    setTimeout(function () {
        attackImg3.hidden = true;
    }, 500)
}
function cutPick() {
    attackImg1.hidden = false;
    setTimeout(function () {
        attackImg1.hidden = true;
    }, 500)
}
function stompPick() {
    attackImg2.hidden = false;
    setTimeout(function () {
        attackImg2.hidden = true;
    }, 500)
}
// This ends the attack picture section 
// This function is to change the main pic for damage
function choosePick() {
    if (healthBar.value < 91 && healthBar.value > 70) {
        mainPic.hidden = true;
        mainPic90.hidden = false;
    } else if (healthBar.value < 71 && healthBar.value > 50) {
        mainPic90.hidden = true;
        mainPic70.hidden = false
    } else if (healthBar.value < 51 && healthBar.value > 30) {
        mainPic70.hidden = true;
        mainPic50.hidden = false;
    } else if (healthBar.value < 31 && healthBar.value > 0) {
        mainPic50.hidden = true;
        mainPic30.hidden = false;
    } else if (healthBar.value === 0) {
        mainPic30.hidden = true;
        endgame.hidden = false;
        setTimeout(function () {
            alert("You have killed the boss!! Now you are the boss. How will you treat your employees?");
        }, 1000)

    }
}
// this ends the main pic section