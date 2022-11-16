const { Router } = require('express')

const {     createControl,
            getcontroles, 
            copyControl ,
            getcontrol
        } = require('../controllers/').ControlIdiomaControler;


const router = Router();


router.get('/', getcontroles);

router.get('/:replicated', getcontrol)


router.post('/' , createControl)

router.post('/copydatos/:replicated', copyControl )

module.exports = router; 