var dayAndNight = document.getElementById('dark-theme');

dayAndNight.addEventListener('click', function() {
    document.body.classList.toggle('night-mode');

if(document.body.classList.contains('night-mode')){
    dayAndNight.innerHTML = "Day"

     

    dayAndNight.style.backgroundColor = "white";  
    dayAndNight.style.color = "black"; 
    
}else {
    dayAndNight.innerHTML = "Night"
    dayAndNight.style.backgroundColor = "black";  
    dayAndNight.style.color = "white";
}
});
