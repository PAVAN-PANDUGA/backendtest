// const express=require("express")
// const users=require("./Users.json")
// const app=express();

// const PORT=6666;

// app.get("/users",(request,response)=>{
//     return response.json(users);
// })

// app.get("/users/:id",(request,response)=>{
//     const id=Number(request.params.id);
//     const userID=users.find((userid)=>userid.id===id);
//     return response.json(userID);
//     })
    
// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`)
// })


const express = require("express");
const users = require("./Users.json");  
const app = express();

const PORT = 6666;


app.get("/users", (request, response) => {
    return response.json(users);
});


app.get("/users/:userId", (request, response) => {
    const userId = Number(request.params.userId);

    
    const user = users.find((user) => user.userId === userId);

    
    if (!user) {
        return response.status(404).json({ message: "User not found" });
    }

    
    return response.json(user);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});