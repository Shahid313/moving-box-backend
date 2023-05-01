const router = require('express').Router();
const queries = require('../../queries')
const connection = require('../../connection')

router.post('/add',(req,res)=>{
    let quantity = req.body.quantity
    let price = req.body.price

    let sql = queries.insert_token(quantity,price)
    connection.query(sql,(err,result)=>{
       if(err) throw err

       return res.send({
           "status":"created",
           "sent":true
       })
    })
})


router.get("/get",(req,res)=>{
    let sql = queries.query_tokens
    connection.query(sql,(err,result)=>{
        if(err) throw err
        return res.send({
            "status":"success",
            "data":result
        })
    })
})


module.exports = router;