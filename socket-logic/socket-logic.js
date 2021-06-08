const io = require("socket.io")();

let socket = {
    io: io
};
 
io.on("connect", function(socket) {
    console.log("A user has connected");

    socket.on("location", function(data) {
        io.emit("location", data)
        console.log("Location Data")
        console.log(data);
    });

    socket.on("rotation", function(data) {
        io.emit("rotation", data)
        console.log("Rotation Data")
        console.log(data);
    });
    socket.on("image", function(data) {
        io.emit("image",data[1].toString('base64'))
        // console.log("Rotation Data")
    });
});

module.exports = socket;