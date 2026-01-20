const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const authenticate = require("../middlewares/authMiddleware");

router.post("/", authenticate, authorController.createAuthor);
router.patch("/:id", authenticate, authorController.updateAuthor);
router.delete("/:id", authenticate, authorController.deleteAuthor);

module.exports = router;
