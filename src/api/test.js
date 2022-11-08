const utils = require("../utlities");

module.exports = {
    GET: {
        handler : (req, res, param) => {
            if(param) {
                param = param.replace("/","");
            }
            utils.sendJson(res, {msg: "Test", method: req.method, param: param});
        }
    },
    POST: {
        handler : (req, res, param) => {
            if(param) {
                utils.sendJson(res, {msg: "Parameter not allowed here"}, 400);
                return;
                // param = param.replace("/","");
            }
            utils.getBody(req)
                .then( body => {
                    utils.sendJson(res, {msg: "Test", method: req.method, body});
                })
                .catch( err => {
                    utils.sendJson(res, err, 500);
                })
        }
    },
    PUT: {
        handler : (req, res, param) => {
            if(param) {
                param = param.replace("/","");
                utils.sendJson(res, {msg: "Test", method: req.method, param: param});
                return
            }
            utils.sendJson(res, {msg: "Parameter required"}, 400);
        }
    },
    DELETE : {
        handler: (req, res, param) => {
            if(!param) {
                utils.sendJson(res, {msg: "Parameter required"}, 400);
                return;
            }
            param = param.replace("/","");
            utils.sendJson(res, {msg: "Test", method: req.method, param});
        }
    }
}