


function checkGender (){
    // prompt the user for thier gender
    const gender = prompt("please enter your gender (Male or Female");

    // check the gender and display the appropriate message
    if (gender.toLowerCase () === "female") {
        alert ("you are a girl! 👩‍🦰");
    } else if (gender.toLowerCase ()=== "male"){
        alert("you are a boy! 👨‍🦰");
        
    } else{
        alert("Invalid input! please enter 'Male' or 'Female' .");

    }
}

// call the function to execute it  
checkGender();