const Router = require('express');
const router = new Router();
const controller = require('./tasksController.js')

router.post('/', controller.postTask);
router.get('/', controller.getTasks);
router.put('/:id', controller.changeTaskDone);
router.put('/:id', controller.changeTaskLike);
router.delete('/:id', controller.deleteTask);

module.exports = router;