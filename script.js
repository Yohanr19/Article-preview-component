let shareDisplay = false;
let profileSection = document.getElementsByClassName("profile-section");
let shareSection= document.getElementsByClassName("share-wrapper");
let shareIcon = document.getElementsByClassName("share-icon-container");
let triangle = document.getElementsByClassName('triangle');

shareIcon[0].addEventListener("click", ()=>
{

if(innerWidth > 1000) 
{
    if (!shareDisplay) 
    {   
        shareSection[0].style.visibility = 'visible';
        shareDisplay= true;
        shareSection[0].style.opacity= '1';  
        triangle[0].style.opacity= '1';  
        triangle[0].style.visibility= 'visible';  
        shareSection[0].style.width= '250px';
    }
    else 
    {
    shareSection[0].style.visibility = 'hidden';
    shareDisplay= false;
    shareSection[0].style.opacity = '0';
    triangle[0].style.opacity= '0'; 
    triangle[0].style.visibility= 'hidden';  
    }
}
else{
 if (!shareDisplay) 
 {   
     shareSection[0].style.visibility = 'visible';
     shareDisplay= true;
     shareSection[0].style.width = '100%';
     shareSection[0].style.opacity = '1';
     
 }
 else 
 {
    shareSection[0].style.visibility = 'hidden';
    shareDisplay= false;
    shareSection[0].style.width = '0%';
    triangle[0].style.opacity= '0'; 
    triangle[0].style.visibility= 'hidden';
 }
}
})