const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.json({ message: "Just got a request!" });
});
app.listen(3002, () => {
  console.log("running");
});
