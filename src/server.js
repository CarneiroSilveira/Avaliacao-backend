const express = require("express");
const CalcRouter = require("./routes/calc");

const app = express();
app.use(express.json());

app.use("/api/v1/calc", CalcRouter);

app.listen(3000, (_) => {
    console.log("Server running on port 3000");
});