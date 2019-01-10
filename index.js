const express = require("express");
const socket = require("socket.io");

// Simple App Setup
const app = express();
let server = app.listen(4000, function() {
  console.log("Listening on port 4000!");
});

// Static Files
app.use(express.static("public"));

// Socket Setup
const io = socket(server);

io.on("connection", function(socket) {
  console.log("made socket connection", socket.id);
});
