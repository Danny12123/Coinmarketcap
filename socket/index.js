// const {Server} = require("socket.io");
const cors = require("cors")
const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});


// const io = new Server({
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

let users =[]
const appUser = (userId, socketId)=> {
    !users.some(user=>user.userId === userId) && users.push({userId, socketId});
}
// let newUser =[]
// const getUser = (userId, socketId)=> {
//     !users.some(user=>user.userId === userId) && users.push({userId, socketId});
// }

const removeUser = (socketId) => {
    users = users.filter(user=> user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user=>user.userId === userId)
}



io.on("connection", (socket) => {
    // when connected
    console.log("A user connected")
    // take userId when it changes
    socket.on("addUser", userId=>{
        appUser(userId, socket.id);
        io.emit("getUsers", users);
    }); 



    // send message and get message
    socket.on("sendMessage", ({senderId, receiverId ,text})=>{
        const user = getUser(receiverId);
        io.to(user && user.socketId).emit("getMessage", {
            senderId,
            text
        });
    });




    // disconnect
    socket.on("disconnect", ()=>{
        console.log("A user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
})


