const { Router } = require('express')
const router = Router();
const userContreoller = require('../controllers/user-controller')

router.get('/posts', userContreoller.getUser)

router.delete('/post/delete/:id', userContreoller.deleteUser)

router.post('/add/post', userContreoller.create)

router.put('/edit/post/:id', userContreoller.editUser)

module.exports = router
