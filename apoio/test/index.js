const port    = 3004
const express = require('express')
const app     = express()
const db      = require('./conn/knex')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', async(req,res)=>{
     await db.select('*').table('test').then(test => {
                res.status(200).json(test)
            })
})
app.post('/insert', async(req,res)=>{ 
     await db.insert({
                testmsg :req.body.testmsg
            }).table('test').then(test => {
                res.status(201).json(test)
            }).catch(err => {
                res.status(400).json(err)
            })
})
app.delete('/delete/:id', async(req, res)=>{
     await db.where({id :req.params.id})
            .delete().table('test').then( _=> {
                res.status(204).json(_)
            }).catch(err => {
                res.status(400).json(err)
            })
})
app.put('/update/:id', async(req,res)=>{
     await db.where({id :req.params.id})
            .update().table('test').then(_ => {
                res.status(201).json(_)
            }).catch(err => {
                res.status(400).json(err)
            })
})
app.listen(port,() => console.log(`online into port:${port}, ${db}`))





