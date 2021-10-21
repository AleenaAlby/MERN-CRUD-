const mongoos = require('mongoose')

mongoos.connect('mongodb://localhost:27017/CrudTesting', { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
        if (!error)
            console.log('Mongodb connection succeeded.');
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(error, undefined, 2))
    }
)