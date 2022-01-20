const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:id/reactions')
    .post(addReaction)


router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;