const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought)

router
    .route('/:id')
    .get(getThoughtById)

module.exports = router;