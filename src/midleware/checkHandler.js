const checkHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(error.message);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Internal Server Error",
    });
};

module.exports = checkHandler;
