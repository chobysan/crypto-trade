const getFirstMongooseError = (error) => {
	return Object.values(error.errors)[0].message;
};

exports.getErrorMessage = (error) => {
	switch (error.message) {
		case 'Error':
			return error.message;
		case 'ValidationError':
			return getFirstMongooseError(error);
		default:
			return error.message;
	}
};

exports.errorResponse = (res, template, error, status = 404) => {
	const err = this.getErrorMessage(error);
	return res.status(status).render(template, { err });
};
