const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//  /api/users/:userid/friends
router.route('/:userId/friends').post(addUserFriend);

//  /api/users/:userid/friends/:friendsId
router.route('/:userId/friends/:friendsId').delete(removeUserFriend)

module.exports = router;