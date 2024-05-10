let nieuwProductKnop = document.getElementById("nieuw");
let closeSelect = document.getElementById("closeselect");
let scribbl = document.getElementById("scribbl");
let skipToStep3 = document.getElementsByClassName("skiptostep3")[0];
let skipToStep3nr2 = document.getElementsByClassName("skiptostep3")[1];
let selectAddOn = document.getElementById("select");
let pen = document.getElementById("pen");
let penStep1 = document.getElementById("pen_stap_1");
let penStep2 = document.getElementById("pen_stap_2");
let penStep3 = document.getElementById("pen_stap_3");
let linkspen = document.getElementById("linkspen");
let rechtspen = document.getElementById("rechtspen");
let pijltjespen = document.getElementById("pijltoetsenpen");
let pijltjesconnect = document.getElementById("pijltoetsenconnect");
let connect = document.getElementById("connect");
let connect1 = document.getElementById("bluetooth_stap_1");
let connect2 = document.getElementById("bluetooth_stap_2");
let connect3 = document.getElementById("bluetooth_stap_3");
let bluetooth = document.getElementById("bluetooth");
let newdevice = document.getElementById("newdevice");
let pairing = document.getElementById("pair");
let connectlinks = document.getElementById("linksconnect");
let connectrechts = document.getElementById("rechtsconnect");
let decline = document.getElementById("decline");
let allow = document.getElementById("allow");
let succes = document.getElementById("succes");
let calibrerenvoorscherm = document.getElementById("calib_start");
let buttoncalibreren = document.getElementById("buttoncalib");
let statischschermmetpen = document.getElementById("statisch_scherm2");
let statischscherm = document.getElementById("statisch_scherm1");

/*clicks*/
nieuwProductKnop.addEventListener("click", selectAddOnvisible);
closeSelect.addEventListener("click", terugNaarHome);
scribbl.addEventListener("click", selectscribbl);
skipToStep3.addEventListener("click", toStep3);
skipToStep3nr2.addEventListener("click", toStep3);
linkspen.addEventListener("click", switchenpenlinks);
rechtspen.addEventListener("click", switchenpenrechts);
connect.addEventListener("click", connecteren);
connectlinks.addEventListener("click", switchenconnectlinks);
connectrechts.addEventListener("click", switchenconnectrechts);
pairing.addEventListener("click", overlay);
decline.addEventListener("click", backtoconnect3);
allow.addEventListener("click", tosucces);
succes.addEventListener("click", afterdelay);
buttoncalibreren.addEventListener("click", end)

/*functies*/
function selectAddOnvisible() {
    selectAddOn.style.display="block";
    selectAddOn.style.animationName="omhoog";
    selectAddOn.style.animationDuration="0.5s";
}

function selectscribbl() {
    pen.style.display="block";
    penStep1.style.display="block";
    pijltjespen.style.display="flex";
    pen.style.animationName="omhoog";
    pen.style.animationDuration="0.5s";
}

function connecteren() {
    bluetooth.style.display="block";
    connect1.style.display="block";

    bluetooth.style.animationName="omhoog";
    bluetooth.style.animationDuration="0.5s"

    pijltjesconnect.style.display="flex";
    pijltjespen.style.display="none";
}

function switchenconnectlinks() {
    if (connect1.style.display === "block") {
        connect1.style.display="block";
    }
    else if (connect2.style.display === "block") {
        connect1.style.display="block";
        connect2.style.display="none";
    }
    else if (connect3.style.display === "block") {
        connect2.style.display="block";
        connect3.style.display="none";
    }
}

function switchenconnectrechts() {
    if (connect1.style.display === "block") {
        connect1.style.display="none";
        connect2.style.display="block";
    }
    else if (connect2.style.display === "block") {
        connect3.style.display="block";
        connect2.style.display="none";
    }
    else if (connect3.style.display === "block"){
        connect3.style.display="block";
    }
}

function toStep3() {
    penStep3.style.display="block";
    penStep3.style.animationName="fade";
    penStep3.style.animationDuration="0.5s";
    penStep1.style.display="none";
    penStep2.style.display="none";
}

function switchenpenlinks() {
    if (penStep1.style.display === "block") {
        pen.style.animationName="beneden";
        pen.style.animationDuration="0.5s";
        pen.style.overflow="hidden";
        pen.style.display="none";
        pijltjespen.style.display="none";
    }
    else if (penStep2.style.display === "block") {
        penStep2.style.display="none";
        penStep1.style.display="block";
    }
    else if (penStep3.style.display === "block") {
        penStep2.style.display="block";
        penStep3.style.display="none";
    }
}

function switchenpenrechts() {
    if (penStep1.style.display === "block") {
        penStep1.style.display="none";
        penStep2.style.display="block";
    }
    else if (penStep2.style.display === "block") {
        penStep3.style.display="block";
        penStep2.style.display="none";
    }
    else if (penStep3.style.display === "block"){
        penStep3.style.display="block";
    }
}

function terugNaarHome() {
    selectAddOn.style.animationName="beneden";
    selectAddOn.style.animationDuration="0.5s";
    calibrerenvoorscherm.style.overflow="hidden";
    selectAddOn.style.display="none";
}

function overlay() {
    newdevice.style.display="flex";
}

function backtoconnect3() {
    newdevice.style.display="none";
}

function tosucces() {
    bluetooth.style.display="none";
    succes.style.display="block";
    pijltjesconnect.style.display="none";
}

function afterdelay() {
    succes.style.display="none";
    calibrerenvoorscherm.style.animationName="omhoog";
    calibrerenvoorscherm.style.animationDuration="0.5s";
    calibrerenvoorscherm.style.display="block";

}

function end() {
    calibrerenvoorscherm.style.animationName="beneden";
    calibrerenvoorscherm.style.animationDuration="0.5s";
    calibrerenvoorscherm.style.overflow="hidden";
    calibrerenvoorscherm.style.display="none";
    statischschermmetpen.style.animationName="omhoog";
    statischschermmetpen.style.animationDuration="0.5s";
    statischschermmetpen.style.display="block";
    scribbl.style.display="none";
    pen.style.display="none";
    selectAddOn.style.display="none";
    statischscherm.style.display="none";
}
