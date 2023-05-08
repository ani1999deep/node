const express = require("express");
const EventEmitter = require("events");
const app = express()

//Click with count
const event = new EventEmitter();

let count = 0;

//Event handle
event.on("CountApi", () => {

    count++;
    console.log("Evenrt called", count)
})

app.get("/", (req, resp) => {

    resp.send("App called")
    //Event Generator
    event.emit("CountApi")
})

app.get("/search", (req, resp) => {

    resp.send("Search called")
    //Event Generator
    event.emit("CountApi")
})

app.get("/update", (req, resp) => {

    resp.send("Update called")
    //Event Generator
    event.emit("CountApi")
})

app.listen(5000, () => console.log("Api is"))