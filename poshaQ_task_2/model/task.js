const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
       
    },
    labelId: {
        type: mongoose.Schema.ObjectId,
        ref: "label"
      }

});

const taskModel= mongoose.model('task', taskSchema);
exports.taskModel = taskModel

//create task with taskName and labelId as foreign key
exports.createTask = (task) => {
    return taskModel.create(task);
}
//delete task using id
exports.deleteTask = (id) => {
    return taskModel.findByIdAndRemove({
        _id: id
    }).exec()
}
//update task using id and the provided information
exports.editTask = (id, task) => {
    return taskModel.findByIdAndUpdate({
        _id: id
    }, task)
}
exports.moveTask = (req, res, next) => 
{
     let labelId=req.params.labelId;
      let array=req.body.taskId;
       try
       {
            for(let i=0;i<array.length;i++)
            {
                 taskModel.moveLabel(array[i],labelId);
            }
             response.send200(res,"Update Label sucessfully");
        }
        catch(err)
        { response.send500(res,err); }
     }
     exports.displaytask = () => 
     { return taskModel.find(); }