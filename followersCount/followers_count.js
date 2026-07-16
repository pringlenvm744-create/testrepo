let count = 0;

function increaseCount(){
    count++;
    checkCountValue();
    displayCount();
}

function checkCountValue() {
    if (count == 10){
        alert("Your post has gained 10 followers!")
    } else if (count == 20){
        alert("Your post has gained 20 followers!")
    }
}






function displayCount(){
    document.getElementById("countDisplay").innerHTML = count; 
}

