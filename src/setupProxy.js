const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy('/', {
      // target: "http://192.168.0.4:51002",
      target: 'http://192.168.0.5:2333',
      changeOrigin: true
    })
  );
};
