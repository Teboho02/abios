
//validate the input
const signin = document.getElementById("signin");
const username = document.getElementById("user");
const password = document.getElementById("pass");

function validate(username , password){


    if(username ==="" || password === ""){

        return 0;
    }

    return 1;
    
    
        
}


signin.addEventLister("click", function(){

    userName = username.textContent;
    if(validate===1){
        //authenticate the password and login if correct credentials are provided
    }

    else{
        console.log("unfilled form somewhere");
    }
    
        
};
