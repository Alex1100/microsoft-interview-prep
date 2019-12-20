const router = require("express").Router;

router.get("/get-name", (req, res) => {
  console.log("REACHES HERE@!!!");
  req.setStatus(200);
  req.json({ name: req.params.name });
});

module.exports = router;
