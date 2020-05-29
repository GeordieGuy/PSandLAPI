'use strict';


/**
 * Returns account info
 *
 * returns List
 **/
exports.accountGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "accountID" : 6,
  "balance" : 0,
  "account_name" : "account_name",
  "account_address" : "account_address"
}, {
  "accountID" : 6,
  "balance" : 0,
  "account_name" : "account_name",
  "account_address" : "account_address"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

