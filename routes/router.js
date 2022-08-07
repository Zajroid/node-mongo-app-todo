const { Router } = require("express");

const router = Router();

router.get('/', async (req, res) => {
  
    res.render('index', {
      title: 'Todos list',
      isIndex: true,
    })
  })

module.exports = router;
