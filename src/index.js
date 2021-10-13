const express = require("express");
const morgan = require("morgan");

const app = express();

/* IMPORT ROUTERS */

const testRouter = require("./resources/Test/router");

/* SETUP MIDLLEWARE */
app.use(morgan("dev"));

/* ROUTER MIDDLEWARE */
app.use("/test", testRouter);

app.get("*", (req, res) => {
  res.json({ working: true });
});

/* SETUP SERVER */
const port = 4040;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
