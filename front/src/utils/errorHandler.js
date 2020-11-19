function handleError(vuexCtx, error) {
	if (error.message == "Network Error") {
		vuexCtx.commit("set_error", "Looks like the server is offline! Are you sure it is running?");
	} else {
		vuexCtx.commit(`set_error", "Unknown error! Message: ${error.message}`);
	}
	console.log(error);
}

module.exports = handleError;
