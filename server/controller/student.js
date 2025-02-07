const helper = require('../helper/student');
const controller = {
    findStudent : async function(req, res) {
        try {
            const result = await helper.findStudent(req);
            res.json({
                statusCode: 200,
                result: result
            }).status(200);
        }catch(err) {
            console.log(err);
            res.status(500).send({
                statusCode: 500,
                message: "Something went wrong"
            });
        }
    }
}
module.exports = controller;
