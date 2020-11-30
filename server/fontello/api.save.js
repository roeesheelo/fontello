// Save fonts
//
'use strict';

const fs = require('fs');

module.exports = function (N, apiPath) {
  N.validate(apiPath, {});

  N.wire.on(apiPath, async function app_post(env) {
    let content = JSON.parse(env.origin.req.headers['x-content']);

    fs.writeFile(content.path, JSON.stringify(content.args), function() {});
  });
};
