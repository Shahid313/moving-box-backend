const router = require('express').Router();
const queries = require('../../queries')
const connection = require('../../connection')

router.post('/add',(req,res)=>{
    let company_name = req.body.company_name
    let address = req.body.address
    let city = req.body.city
    let postal_code = req.body.postal_code
    let vat_number = req.body.vat_number
    let nation = req.body.nation

    let sql = queries.insert_company(company_name,address,city,postal_code,vat_number,nation)
    connection.query(sql,(err,result)=>{
       if(err) throw err

       return res.send({
           "status":"created",
           "sent":true
       })
    })
})


router.get("/get",(req,res)=>{
    let sql = queries.query_company
    connection.query(sql,(err,result)=>{
        if(err) throw err
        return res.send({
            "status":"success",
            "data":result
        })
    })
})


module.exports = router;