function validate(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("birthdate").value;
    var c = document.getElementById("gender").value;
    var d = document.getElementById("user-ex");
    var e = document.getElementById("birth-ex");
    var f = document.getElementById("gender-ex");

    if (a === "" || a === null){
        d.style.display = "block";
    }
}