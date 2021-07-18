var a = document.getElementById("username").value;
var aa = document.getElementById("username");
var bdate = document.getElementById("birthdate").value;
var bDate = document.getElementById("birthdate");
var bmonth = document.getElementById("birthmonth").value;
var bMonth = document.getElementById("birthmonth");
var byear = document.getElementById("birthyear").value;
var bYear = document.getElementById("birthyear");
var c = document.getElementById("gender").value;
var cgender = document.getElementById("gender");
var d = document.getElementById("user-ex");
var e = document.getElementById("birth-ex");
var f = document.getElementById("gender-ex");
var g = document.getElementById("f-submit");

var inputName = document.getElementById("username");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];



function getmyDay(){
    year = document.getElementById("birthyear").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("birthmonth").value);
    DD = parseInt(document.getElementById("birthdate").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }

  function getGender(){
    var genders = document.getElementById("gender");
    if(genders[1].selected == true){
      var gender = "male";
    }
    else if(genders[2].selected == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayValue === 1){
          alert("Hi there!You were born on " +days[0] + "." + "Your Akan name is " +maleNames[0] + ".");
        }
        else if(dayValue === 2){
          alert("Hi there!You were born on " +days[1] + "." + "Your Akan name is " +maleNames[1] + ".");
        }
        else if(dayValue === 3){
          alert("Hi there!You were born on " +days[2] + "." + "Your Akan name is " +maleNames[2] + ".");
        }
        else if(dayValue === 4){
          alert("Hi there!You were born on " +days[3] + "." + "Your Akan name is " +maleNames[3] + ".");
        }
        else if(dayValue === 5){
          alert("Hi there!You were born on " +days[4] + "." + "Your Akan name is " +maleNames[4] + ".");
        }
        else if(dayValue === 6){
          alert("Hi there!You were born on " +days[5] + "." + "Your Akan name is " +maleNames[5] + ".");
        }
        else if(dayValue === 0){
          alert("Hi there You were born on " +days[6] + "." + "Your Akan name is " +maleNames[6] + ".");
        }
      break;
      case "female":
        if (dayValue == 1){
          alert("Hi there You were born on " +days[0] +  "." + "Your Akan name is " +femaleNames[0] + ".");
        }
        else if(dayValue == 2){
          alert("Hi there You were born on " +days[1] +  "." + "Your Akan name is " +femaleNames[1] + ".");
        }
        else if(dayValue == 3){
          alert("Hi there You were born on " +days[2] +  "." + "Your Akan name is " +femaleNames[2] + ".");
        }
        else if(dayValue == 4){
          alert("Hi there You were born on " +days[3] +  "." + "Your Akan name is " +femaleNames[3] + ".");
        }
        else if(dayValue == 5){
          alert("Hi there You were born on " +days[4] +  "." + "Your Akan name is " +femaleNames[4] + ".");
        }
        else if(dayValue == 6){
          alert("Hi there You were born on " +days[5] +  "." + "Your Akan name is " +femaleNames[5] + ".");
        }else if(dayValue == 0){
          alert("Hi there You were born on " +days[6] +  "." + "Your Akan name is " +femaleNames[6] + ".");
        }
      break
      default:
            
    }
  }

  function myAkan(){
    dayValue = getmyDay();
    getGender();
  }
  


// validate form


function validate(){

    if (a === null || a === "" && bdate === null || bdate === "" && c === null || c === ""){
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
        aa.style.borderColor = "red";
        bDate.style.borderColor = "red";
        bMonth.style.borderColor = "red";
        bYear.style.borderColor = "red";
        cgender.style.borderColor = "red";
        return false;
    }

    else if (a == "" && bdate != null  && c != null ){
        d.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
        cgender.style.borderColor = "black";
        return false;
    }

    else if (a === ""){
        d.style.display = "block";
        return false;
    }

    else if (bdate === ""){
        e.style.display = "block"
        return false;
    }

    else if (c === ""){
        f.style.display = "block";
        return false;
    }

    else{
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        return true;
    }
  
}

