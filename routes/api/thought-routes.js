const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

module.exports = router;