const ToDoModel=require('../models/ToDoModels')



// ....................part 1 : get all elements in data base mongoDB......................


module.exports.getToDo= async (req,res)=>{
    const todo=await ToDoModel.find()
    res.send(todo)
}

// part 2 :..................post   elements in data base mongoDB...................

module.exports.saveToDo= async (req,res)=>{
    const {text}=req.body
    
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added successfully ...")
        console.log(data)
        res.send(data)
    })
    
}

// .................part 3 : update   elements in data base mongoDB...................

module.exports.updateToDo= async (req,res)=>{
   const {_id, text} =req.body
   ToDoModel
   .findByIdAndUpdate(_id,{text})
   .then(()=>res.send("updated successfully ..."))
   .catch((err)=>console.log(err))
    
}


// .................part 4: delete  elements in data base mongoDB....................

module.exports.deleteToDo= async (req,res)=>{
    const {_id} =req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("deleted successfully ..."))
    .catch((err)=>console.log(err))
     
 }