let accessPlan;



if (userType === "Employee"){
    accessPlan = "Access Allowed";
    userMessage = "You can access all Dietary Services";
} else if(userType === "Enrolled Member"){
accessPlan = "Access Allowed ";
userMessage = "You can access Dietary Services and One to one interaction with the dietician"
} else if (userType === "Subscriber"){
    accessPlan = "Partial access allowed";
    userMessage = "You can only have access to Dietary Services only";
} else {
    accessPlan = "Access Denied";
    userMessage = "You need to enroll first or subscribe to avail this facility";
}

console.log ("User Type : " , userType, "Access Plan : " , accessPlan, "Message : " , userMessage);