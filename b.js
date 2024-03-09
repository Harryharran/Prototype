const arr=[
    {una:'har',
    pas:'har31'},
    {una:'mad',
    pas:'mad31'}]


function myfunc() {
    // var un= document.forms["myForm"]["Name"].value;
    // var pass= document.forms["myForm"]["password"].value;
    var un= document.getElementById("Username").value;
    var pass= document.getElementById("password").value;
  
        if(un == 'admin' && pass == 'admin@123'){
            window.location="c.html";
        }  
        else{
            return alert("Invalid Username or password"); 
        }
   
    
     
}

    
    
    
