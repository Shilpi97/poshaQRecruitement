var mongoose=require('mongoose');


const categorySchema = mongoose.Schema({
    category: {
        type: String   
    }

});

const categoryModel = mongoose.model('categorys', categorySchema);
exports.categoryModel = categoryModel;

exports.findCategory=()=>{
    return categoryModel.find().sort("category");
}