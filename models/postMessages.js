const mongoos = require('mongoose')

var postMessage = mongoos.model('postMessage',{
    title : {type: String},
    message :{type : String},
},'postMessages')

module.exports={postMessage}