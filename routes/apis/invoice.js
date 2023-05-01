const router = require('express').Router();
const queries = require('../../queries')
const connection = require('../../connection')

router.post('/add',(req,res)=>{
    let date = req.body.date
    let invoice_number = req.body.invoice_number
    let amount = req.body.amount
    let company_id = req.body.companyId
    let download = req.files.download
    let download_file_name = download.name

    download.mv('public/uploads/invoices/'+download_file_name,function(err){
        if(err){
            res.send(err)
        }
    })

    let sql = queries.insert_invoice(date,invoice_number,amount,download_file_name,company_id)
    connection.query(sql,(err,result)=>{
       if(err) throw err

       return res.send({
           "status":"created",
           "sent":true
       })
    })
})


router.get("/get",(req,res)=>{
    let sql = queries.query_invoice
    connection.query(sql,(err,result)=>{
        if(err) throw err
        return res.send({
            "status":"success",
            "data":result
        })
    })
})


module.exports = router;