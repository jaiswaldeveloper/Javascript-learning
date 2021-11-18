


function getUserRole(name, role) {
    
switch (role) {
    case "admin":
        return `${name} is a admin with all access`;
        break;
    case "subadmin":
        return `${name} is a sub-admin with access `;
        break;
    case "testprep":
        return `${name} is a admin with all access of the courses`;
        break;

    default:
        return`${name} default trail user`;
        break;

}

}
console.log(getUserRole ("Rohit", "subadmin"));