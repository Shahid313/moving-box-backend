const router = require('express').Router();
const queries = require('../../queries')
const connection = require('../../connection')

router.post('/add',(req,res)=>{
    let date = req.body.date
    let maintainer = req.body.maintainer
    let matricola = req.body.matricola
    let modello = req.body.modello
    let ubicazione = req.body.ubicazione
    let intervento = req.body.intervento
    let outcome = req.body.outcome
    let company_id = req.body.companyId
    let download = req.files.download
    let download_file_name = download.name

    download.mv('public/uploads/reports/'+download_file_name,function(err){
        if(err){
            res.send(err)
        }
    })

    let sql = queries.insert_mHistory(date,maintainer,matricola,modello,ubicazione,intervento,outcome,download_file_name,company_id)
    connection.query(sql,(err,result)=>{
       if(err) throw err

       return res.send({
           "status":"created",
           "sent":true
       })
    })
})


router.get("/get",(req,res)=>{
    let sql = queries.query_maintenance_history
    connection.query(sql,(err,result)=>{
        if(err) throw err
        return res.send({
            "status":"success",
            "data":result
        })
    })
})


module.exports = router;