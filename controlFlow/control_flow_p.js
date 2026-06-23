

// Conditional Else if
let UserStat = "Employee";
let access;

if (UserStat === "Employee") {
    access = "Dietary Services";
} else {
    access = "No access granted";
}

console.log("Access Level:", access);

// Conditional Else
let Enrolled = true;
let memberfacility;

if (isLoggedIn) {
    if (UserStat === "Employee") {
        memberfacility = "one-on-one interaction with a dietician";
    } else {
        memberfacility = "";
    }
} else {
    memberfacility = "Please log in to access the system.";
}

console.log("Member facility:", memberfacility);

// Conditional Switch
let MemberType = "subscriber";
let MemberCategory;

switch (MemberType) {
    case "admin":
        MemberCategory = "Admin access";
        break;
    case "manager":
        MemberCategory = "All";
        break;
    case "subscriber":
        MemberCategory = "Diatery Services Only";
        break;
    default:
        MemberCategory = "Unknown";
}

let Subscription = false;

let SubscriptionStatus = Subscription ? "Available" : "Please enroll or subscribe";

console.log("Subscription Status:", SubscriptionStatus);

console.log("Member Category:", MemberCategory);