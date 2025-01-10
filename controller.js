const Result = require('./model');

const getResult = (req, res, next) => {
    Result.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

const addResult = (req, res, next) => {
    const result = new Result({
        id: req.body.id,
        name: req.body.name,
        subject: req.body.subject,
        grade: req.body.grade,
        status: req.body.status,
    });
    result.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const updateResult = (req, res, next) => {
    const { id, name, subject, grade, status } = req.body;
    Result.updateOne({id: id}, { 
        $set: { 
            name: name,
            subject: subject, 
            grade: grade, 
            status: status
        
        } })
    
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteResult = (req, res, next) => {
    const id = req.body.id;
    Result.deleteOne({ id: id })
      .then(response => {
            res.json({ response })
        })
       .catch(error => {
            res.json({ error })
        });
}

exports.getResult = getResult;
exports.addResult = addResult;
exports.updateResult = updateResult;
exports.deleteResult = deleteResult;