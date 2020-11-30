// Save fonts
//
'use strict';

const fs = require('fs');

module.exports = function (N, apiPath) {
  N.validate(apiPath, {});

  const readFile = (path, opts = 'utf8') =>
    new Promise((resolve, reject) => {
      fs.readFile(path, opts, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    });

  N.wire.on(apiPath, async function app_post(env) {
    let path = env.params['$query_extra'].path;

    const data = await readFile(path);

    //env.origin.res.setHeader('X-data', JSON.stringify(data));
    env.origin.res.end(data);
  });
};
