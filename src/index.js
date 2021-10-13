const express = require("express");
const morgan = require("morgan");

const app = express();

/* SETUP MIDLLEWARE */
app.use(morgan("dev"));

app.get("*", (req, res) => {
  console.log({ working: true });
  res.json({ working: true });
});

/* SETUP SERVER */
const port = 4040;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
