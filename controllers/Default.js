'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.accountGET = function accountGET (req, res, next) {
  Default.accountGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
