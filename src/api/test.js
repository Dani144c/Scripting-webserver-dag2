const utils = require('../utlities');
const dbcon = require('../config/db.json');
var mysql = require('mysql');

module.exports = {
	GET: {
		handler: (req, res, param) => {
			if (param) {
				param = param.slice(1);

				utils
					.getUserById(param)
					.then((body) => {
						utils.sendJson(res, { data: 'get', method: req.method, body });
					})
					.catch((err) => {
						utils.sendJson(res, { Error: 'Server Error' }, 500);
					});
				return;
			}
			if (!param) {
				utils
					.getUsers()
					.then((body) => {
						utils.sendJson(res, { data: 'get', method: req.method, body });
					})
					.catch((err) => {
						utils.sendJson(res, { Error: 'Server Error' }, 500);
					});
				return;
			}
		},
	},
	POST: {
		handler: (req, res, param) => {
			if (param) {
				utils.sendJson(res, { msg: 'Parameter not allowed here' }, 400);
				return;
				// param = param.replace("/","");
			}
			utils
				.postUser(req)
				.then((body) => {
					utils.sendJson(res, { msg: 'Test', method: req.method, body });
				})
				.catch((err) => {
					utils.sendJson(res, err, 500);
				});
		},
	},
	PUT: {
		handler: (req, res, param) => {
			if (param) {
				param = param.slice(1);
				utils
                    .updateUser(req, param)
                    .then((body) => {
				        utils.sendJson(res, { msg: 'Test', method: req.method, body });
				    })
					.catch((err) => {
						utils.sendJson(res, err, 500);
					});
				return;
			}
			utils.sendJson(res, { msg: 'Parameter required' }, 400);
		},
	},
	DELETE: {
		handler: (req, res, param) => {
			if (!param) {
				utils.sendJson(res, { msg: 'Parameter required' }, 400);
				return;
			}
            if (param) {
				param = param.slice(1);

				utils
					.deleteUser(param)
					.then((body) => {
						utils.sendJson(res, { data: 'DELETE', method: req.method, body });
					})
					.catch((err) => {
						utils.sendJson(res, { Error: 'Server Error' }, 500);
					});
				return;
			}
		},
	},
};
