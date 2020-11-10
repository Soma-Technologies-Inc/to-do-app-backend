const express = require('express');
const getter=require('../Controllers/controllerFile');

const router = express.Router();
router.get('/Tasks/:id',getter.getTaskbyId);
router.get('/Tasks/priority/:priority',getter.getByPriority);
router.post('/Tasks',getter.createTask);

module.exports=router;



// const express = require('express');
// const router = express.Router();

// router.get('/getTasks',getter);

// module.exports=router;









// module.exports = app => {
//     const router =express.Router();
//     const fromControllers = require('../Controllers/controllerFile')
//       router.post('./Tasks', fromControllers.createTask);
//       router.get('/Tasks', fromControllers.getTasks);
//       router.get('/Tasks/Priority', fromControllers.getTasksbyPriority);
//       router.get('/Tasks/:id', fromControllers.getbyId);
// };
