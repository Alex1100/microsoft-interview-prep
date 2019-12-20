const router = require("express").Router();

router.get("/get-name", (req, res) => {
  res.status(200).json({ name: req.query.name });
});

module.exports = router;
