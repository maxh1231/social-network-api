const router = require('express').Router();
const {
    getAllThought,
    getThoughtById
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:id')
    .get(getThoughtById)

module.exports = router;