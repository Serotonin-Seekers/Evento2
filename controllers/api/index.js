const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

router.use('/events', eventRoutes);
router.use('/users', userRoutes);
// line 5 & 6 is middleware based on line 1

module.exports = router;
