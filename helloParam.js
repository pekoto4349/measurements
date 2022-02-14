function main(params) {
	return new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve(params);
	}, params.delay); 
	})
}
