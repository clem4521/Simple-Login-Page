let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let emailTag = document.getElementById("emailTag");
let passwordTag = document.getElementById("passwordTag");

function isInputsEmpty(){
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    
    let emailTrim = emailValue.trim();
    let passwordTrim = passwordValue.trim();
    
    if(emailInput.value == '' && passwordInput.value == ''){
	    console.log("something");
	    emailInput.style.outline = "solid 3px var(--danger)";
	    emailInput.style.borderRadius = "20px"
	    emailInput.style.borderBottom = "none";
	    
	    passwordInput.style.outline = "solid 3px var(--danger)";
	    passwordInput.style.borderRadius = "20px"
	    passwordInput.style.borderBottom = "none";
	    
	    emailTag.style.color = "var(--danger)";
	    passwordTag.style.color = "var(--danger)";
	    	    
	}else if(emailInput.value == '' ){
		
	    emailInput.style.outline = "solid 3px var(--danger)";
	    emailInput.style.borderRadius = "20px"
	    emailInput.style.borderBottom = "none";
	    
	     emailTag.style.color = "var(--danger)";
	    	
	}else if(passwordInput.value == ''){
        passwordInput.style.outline = "solid 3px var(--danger)";
	    passwordInput.style.borderRadius = "20px"
	    passwordInput.style.borderBottom = "none";
	    
	    passwordTag.style.color = "var(--danger)";	
	}
}
