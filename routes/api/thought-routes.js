const router = require("express").Router();
const {
  addThought,
  getThoughtById,
  getAllThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,

} = require("../../controllers/thought-controller");


router
  .route("/")
  .get(getAllThought)
  .post(addThought)

// /api/Thoughts/<userId>/<ThoughtId>
router
.route(":thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

router
.route('/:thoughtId/reactions')
.post(addReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)


module.exports = router;
