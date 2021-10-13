const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log({ path: req.baseUrl });

  res.json({ routerTest: true });
});

module.exports = router;
