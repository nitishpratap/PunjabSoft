const studentRouter = require('../../routes/student');
const readJsonFile = require('./readJson');
function handleRequest(app) {
    app.use(readJsonFile);
    app.use('/', studentRouter);
}
module.exports = handleRequest;
