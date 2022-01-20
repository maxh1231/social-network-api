const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:id/friends/:friendId')
    .post(addFriend)

module.exports = router;