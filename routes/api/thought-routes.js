const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction
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

module.exports = router;