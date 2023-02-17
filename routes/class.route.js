var {
	createSingleClass,
	getSingleClass,
	getAllClasses,
	getRatings,
	saveRating,
	updateRatings,
} = require('../controllers/class.controller')
var { isAuthorized, isRelevantUser } = require('../middleware/auth')

module.exports = function (router) {
	router.post('/api/v1/classes', createSingleClass)
	router.get('/api/v1/classes/:id', getSingleClass)
	router.get('/api/v1/classes', getAllClasses)
	router.get('/api/v1/classes/:id/ratings', getRatings)
	router.post('/api/v1/classes/:id/ratings', isAuthorized, saveRating)
	router.patch(
		'/api/v1/classes/:classId/ratings/:id',
		isAuthorized,
		isRelevantUser,
		updateRatings
	)
}
