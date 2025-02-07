const fs = require('fs');
const path = require('path');
function readJsonFile(req,res,next){
    try {
        const filePath = path.join(__dirname, 'students.json');
        req.studentData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        next();
    }catch (err){
        console.log(err);
        res.status(500).send({
            error:err.message
        });
    }
}
module.exports = readJsonFile;
