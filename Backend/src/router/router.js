const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from the router');
});

console.log(typeof router); // Debería imprimir "function"

module.exports = router;
