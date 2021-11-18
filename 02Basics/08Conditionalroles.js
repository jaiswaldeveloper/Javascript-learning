//  switch case using conditional
 
 
 


var user = "subadmin";
  
 switch (user) {
     case "admin":
         console.log("this is admin pannel");
         
         break;
         case "subadmin":
            console.log("get access to create/delete courses");
            
            break;
            case "testprep":
                console.log("get access to Add courses");
                
                break;
                case "user":
                    console.log("this is user pannel");
                    
                    break;
 
     default:
        console.log("default trail user");
         break;
 }