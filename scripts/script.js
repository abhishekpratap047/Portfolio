const menubutton = document.querySelector("#mobilemenu");
const mcontainer = document.querySelector("#mcontainer");
const devtext = document.querySelector("#dev");
const moblink = document.querySelector(".nav");



var displaymob = 0;

function menu(){
    
    if(displaymob === 0){
        mcontainer.style.display = "block";
        setTimeout(() => {
            mcontainer.style.opacity = "0.9";
            menubutton.style.backgroundImage = "url(assets/icons/closewhite.png)";
        displaymob = 1;
        }, 150);
        
    }else{
        mcontainer.style.opacity = "0";
        menubutton.style.backgroundImage = "url(assets/icons/menuwhite.png)";
        setTimeout(() => {
            mcontainer.style.display = "none";
        displaymob = 0;
        }, 150);
    }
    
}

var devs = ['#Programmer', '#Enthusiast', '#Developer'];

textSequence(0);
function textSequence(i) {

    if (devs.length > i) {
        setTimeout(function() {
            devtext.textContent = devs[i];
            textSequence(++i);
        }, 2000); 

    } else if (devs.length == i) {
        textSequence(0);
    }

}



menubutton.addEventListener("click", menu);
moblink.addEventListener("click", menu);