const router = require("express").Router();

router.get("/get-name", (req, res) => {
  console.log("REACHES HERE@!!!");
  res.setStatus(200);
  res.json({ name: req.params.name });
});

module.exports = router;
