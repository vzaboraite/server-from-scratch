require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();

/* IMPORT ROUTERS */

const testRouter = require("./resources/Test/router");
const db = require("./utils/database");

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
  db.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");
    }
  });

  console.log(`Server is running on http://localhost:${port}/`);
});
