var a = document.getElementById("username").value;
var b = document.getElementById("birthdate").value;
var c = document.getElementById("gender").value;
var d = document.getElementById("user-ex");
var e = document.getElementById("birth-ex");
var f = document.getElementById("gender-ex");
var g = document.getElementById("f-submit");

var inputName = document.getElementById("username").value;
var getDate = document.getElementById("birthDate");
var genders = document.getElementById("gender");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];



function getmyDay(){
    year = document.getElementById("dateBirth");
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("dateBirth").value);
    DD = parseInt(document.getElementById("dateBirth").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }
  function getGender(){
    var genders = document.getElementById("gender");
    if(genders[0].selected == true){
      var gender = "male";
    }
    else if(genders[1].selected == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayValue === 1){
          alert("You were born on " +days[0] + "." + "Your akan name is " +maleNames[0] + ".");
        }
        else if(dayValue === 2){
          alert("You were born on " +days[1] + "." + "Your akan name is " +maleNames[1] + ".");
        }
        else if(dayValue === 3){
          alert("You were born on " +days[2] + "." + "Your akan name is " +maleNames[2] + ".");
        }
        else if(dayValue === 4){
          alert("You were born on " +days[3] + "." + "Your akan name is " +maleNames[3] + ".");
        }
        else if(dayValue === 5){
          alert("You were born on " +days[4] + "." + "Your akan name is " +maleNames[4] + ".");
        }
        else if(dayValue === 6){
          alert("You were born on " +days[5] + "." + "Your akan name is " +maleNames[5] + ".");
        }
        else if(dayValue === 0){
          alert("You were born on " +days[6] + "." + "Your akan name is " +maleNames[6] + ".");
        }
      break;
      case "female":
        if (dayValue == 1){
          alert("You were born on " +days[0] +  "." + "Your Akan name is " +femaleNames[0] + ".");
        }
        else if(dayValue == 2){
          alert("You were born on " +days[1] +  "." + "Your Akan name is " +femaleNames[1] + ".");
        }
        else if(dayValue == 3){
          alert("You were born on " +days[2] +  "." + "Your Akan name is " +femaleNames[2] + ".");
        }
        else if(dayValue == 4){
          alert("You were born on " +days[3] +  "." + "Your Akan name is " +femaleNames[3] + ".");
        }
        else if(dayValue == 5){
          alert("You were born on " +days[4] +  "." + "Your Akan name is " +femaleNames[4] + ".");
        }
        else if(dayValue == 6){
          alert("You were born on " +days[5] +  "." + "Your Akan name is " +femaleNames[5] + ".");
        }else if(dayValue == 0){
          alert("You were born on " +days[6] +  "." + "Your Akan name is " +femaleNames[6] + ".");
        }
      break
      default:
            
    }
  }

  function myAkan(){
    dayValue = getmyDay();
    getGender();
  }
  


 // Make submit button transparent if inputs are empty

function check(){
   
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




// validate form


function validate(){

    if (a != null && b != null && c != null && genders[1].selected == true && getDate.dd == "05"){
        alert(`Hello! you were born on Sunday and your Akan Name is Kwasi`)
    }


    else if (a === null || a === "" && b === null || b === "" && c === null || c === ""){
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
        return false;
    }

    else if (a == "" && b == " "  && c == " "){
        d.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
        return false;
    }

    else if (a === ""){
        d.style.display = "block";
        return false;
    }

    else if (b === ""){
        e.style.display = "block"
        return false;
    }

    else if (c === ""){
        f.style.display = "block";
        return false;
    }

    else{
        alert("123")
    }
  
}

