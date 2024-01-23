const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        gretting: 'Hi'
    };
    res.json(data);
});  

module.exports = router;