const bb8 = document.getElementsByClassName("slideIn")[0];
const intro = document.getElementsByClassName("intro")[0];
const sound = document.getElementById("myAudio");
const fade = document.getElementsByClassName("fade")[0];
const letters = document.getElementsByClassName("letters")[0];
const buttonAudio = document.getElementById("buttonAudio");


 bb8.addEventListener("animationend",  (event) => {
    
    if(event.type === "animationend") {
        bb8.style.display= "none"; 
        intro.className = 'intro texto_intro animacion_intro'
        buttonAudio.click();
    }
}
, false);

intro.addEventListener("animationend",  (event) => {
    
    if(event.type === "animationend") {
        intro.style.display= "none"; 
        fade.classList.remove("displayNone");
        letters.classList = 'crawl';
    }
}
, false);


function playAudio() {
    sound.play();
}