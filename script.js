 alert("Welcome to my first website!")
 
    var daffodils=confirm("Do you like daffodils?")
    if (daffodils==false)
        {document.getElementById("message").textContent="You don't like daffodils? That's okay! You'll like this website, promise!";}
    else 
    {document.getElementById("message").textContent="You like daffodils? Then you'll like this website!"}