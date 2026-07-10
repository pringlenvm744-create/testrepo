let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

if (isLoggedIn){
    if(userRole === "admin"){
    userMessage = "Welcome, Admin!";
}else {
    userMessage = "Welcome, User!";
}
}

else{
    userMessage = "Please log in to access the system";
}

console.log ("user Message : " , userMessage);

switch (userType){
    case "admin" :
    userCategory = "Administrator";
    break;

    case "Manager" :
        userCategory = "Manager";
        break;

    case "subscriber" :
        userCategory = "Subscriber";
        break;

        default :
        userCategory = "Unknown";
}

console.log ("User Type : ", userType, "User Category : ", userCategory);