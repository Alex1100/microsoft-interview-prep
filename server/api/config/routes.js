const router = require("express").Router();

router.get("/get-name", (req, res) => {
  console.log("REACHES HERE@!!!: ", req);
  res.status(200).json({ name: req.params.name });
});

module.exports = router;
