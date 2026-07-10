let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access control";
}else {
    accessLevel = "No access granted";
}

console.log ("Role : " , userRole, "Access : ",  accessLevel);