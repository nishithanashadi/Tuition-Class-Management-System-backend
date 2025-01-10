const results = [
    {
        id:1,
        name: 'John',
        subject: 'Math',
        grade: 'c',
        status:'pass', 
    },

    {
        id:2,
        name: 'noank',
        subject: 'science',
        grade: 'f',
        status:'fail', 
    },
];

const getResults = (cb) => {
    cb(results);
};

const getResultById = (id, cb) => {
    const result = results.find(result => result.id === id);
    cb(result);
};

exports.getResults = getResults; 
exports.getResultById = getResultById;