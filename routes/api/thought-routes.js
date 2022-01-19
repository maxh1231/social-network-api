const router = require('express').Router();
const {
    getAllThought
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThought);

module.exports = router;