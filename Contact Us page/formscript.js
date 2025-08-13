function validateForm(){
  let fname = document.forms["application"]["firstname"].value; 
  if(fname == ""){
	  window.alert("Missing First Name");
	  return false;
  }
  
  let lname = document.forms["application"]["lastname"].value;
  if(lname == ""){
	  window.alert("Missing Last Name");
	  return false;
  }
  
  let lblemail = document.forms["application"]["email"].value;
  if(lblemail == ""){
	  window.alert("Missing Email");
	  return false;
  }
  
  window.alert("Thank you \n" + fname + " " + lname + "\n" + "for contacting us" + "\n" + "We will also email you at: " + "\n"+ lblemail);
  return true;
}
