const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((res, req) => {
    res.status(404);
})

module.exports = router;