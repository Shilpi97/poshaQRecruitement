const mongoose = require('mongoose');

const labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        required: true
       
    }

});

const labelModel = mongoose.model('label', labelSchema);
exports.labelModel = labelModel
//create label with lableName
exports.createLabel = (label) => {
    return labelModel.create(label)
}
//delete label using id
exports.deleteLabel = (id) => {
    return labelModel.findByIdAndRemove({
        _id: id
    }).exec()
}
//update label using id with the provided labelName
exports.editLabel = (id, label) => {
    return labelModel.findByIdAndUpdate({
        _id: id
    }, label)
}