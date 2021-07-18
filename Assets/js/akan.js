// validate form

function validate(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("birthdate").value;
    var c = document.getElementById("gender").value;
    var d = document.getElementById("user-ex");
    var e = document.getElementById("birth-ex");
    var f = document.getElementById("gender-ex");
    var g = document.getElementById("f-submit");

    if (a === "" || a === null){
        d.style.display = "block";
    }
}

 // Make submit button transparent if inputs are empty

function check(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("birthdate").value;
    var c = document.getElementById("gender").value;
    var d = document.getElementById("user-ex");
    var e = document.getElementById("birth-ex");
    var f = document.getElementById("gender-ex");
    var g = document.getElementById("f-submit");

    if (a === "" || a === null){
        g.style.cursor = "not-allowed";
        g.style.background = "transparent";
        return false;
    }

    else if(b === "" || b === null){
        g.style.cursor = "not-allowed";
        g.style.background = "transparent";
        return false;
    }

    else if(c === ""){
        g.style.cursor = "not-allowed";
        g.style.background = "transparent";
        return false;
    }

    else{
        g.style.cursor = "pointer";
        background = "gold";
        return true;
    }
}



