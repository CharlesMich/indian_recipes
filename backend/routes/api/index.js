const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const stateRouter = require('./state.js');
const cuisineRouter = require('./cuisine.js');
const dishRouter = require('./dish.js')
const recipeRouter = require('./recipe.js');
const mealRouter = require('./meal.js');
const contributeRouter = require('./Contributor.js');
const stepRouter = require('./step.js');
const ingredientRouter = require('./Ingredient.js');

const { restoreUser } = require('../../utils/auth.js');

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/state', stateRouter);
router.use('/cuisine', cuisineRouter);
router.use('/dish', dishRouter);
router.use('/recipe', recipeRouter);
router.use('/meal', mealRouter);
router.use('/contributor', contributeRouter);
router.use('/step', stepRouter);
router.use('/ingredients', ingredientRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

  // GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });


// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;