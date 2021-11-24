var firstname = document.getElementById("na"),
email = document.getElementById("email"),
branch = document.getElementById("brn")
phone = document.getElementById("mobile"),
regd = document.getElementById("re"),
dob = document.getElementById("db"),
domain = document.getElementById("dom"),
Github = document.getElementById("git"),
social2 = document.getElementById("linki"),
social3 = document.getElementById("face"), 
submit = document.getElementById("subm");

 
const  validation = ()=>{
	if(firstname.value=='' || email.value=='' || branch.value=='' || phone.value=='' || regd.value=='' || dob.value=='' ||   domain.value=='' || Github.value=='' || social2.value=='' || social3.value==''  ){
	    alert("All the fields should be filled.");
	    return false;
	}else if(phone.value.length!=10){
	    alert("Enter 10 digit phone number.");
	    return false;
	}
	return true;
}

var choice = localStorage.getItem("Submit") 

if (choice==0){
	console.log("choice");
	firstname.value = localStorage.getItem("Full");
	    
	email.value = localStorage.getItem("Email"); 
	phone.value = localStorage.getItem("Phone");
              brn.value = localStorage.getItem("Branch");
	regd.value = localStorage.getItem("Regd");
	domain.value = localStorage.getItem("Domain");
	dob.value = localStorage.getItem("DOB");
	Github.value = localStorage.getItem("Git");
	social2.value =localStorage.getItem("Linkedin");
	social3.value = localStorage.getItem("Facebook");
	
}
     
document.addEventListener('change',()=>{
	localStorage.setItem("Full",firstname.value);

	localStorage.setItem("Email",email.value);
	localStorage.setItem("Phone",phone.value);
	localStorage.setItem("Regd",regd.value);
	localStorage.setItem("Branch",brn.value);
	localStorage.setItem("Domain",domain.value);
	localStorage.setItem("DOB",dob.value);
	localStorage.setItem("Git",Github.value);
	localStorage.setItem("Linkedin",social2.value);
	localStorage.setItem("Twitter",social3.value);
	 
	localStorage.setItem("Submit",0);
    }) 
    
submit.addEventListener('click',()=>{
	if(validation()){
	    localStorage.setItem("Submit",1);
		window.location.reload();	  
		       
	}
	
}); 
 
     