const addmodel = require("./addModel");



module.exports.addproductdetailes =(req,res)=>{
    console.log(req.body,"products detailes")
    addmodel.addProductDetailesInDb(req.body)
    
    .then((add) => {
        console.log(add);
        res.send({ status: true, addDetailes: add });
      })
      .catch((err) => {
        console.log(err);
        res.send({ status: false });
      });
  
}




module.exports.getalladds =(req,res)=>{
    console.log(req.body,"products detailes")
    addmodel.getAllAddsFromDb({})

    .then((adds) => {
        console.log(adds);
        res.send({ status: true,found :true, adds: adds });
      })
      .catch((err) => {
        console.log(err);
        res.send({ status: false ,found:false});
      });
  
}


module.exports.deleteAdd =(req,res)=>{
  console.log(req.body,"user-id")
  addmodel.deleteAddFromDb(req.body)

  .then((deleted) => {
      console.log(deleted);
      res.send({ status: true,deleted :deleted  });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: false ,deleted:false});
    });

}


