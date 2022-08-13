const port    = 3008
const express = require('express')
const app     = express()
const cors    =require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'*'}))

const knex = require('knex')({
    client: 'postgresql',
        connection: {
        database: 'test_express',
        user:     'postgres',
        password: '123456'
    },
        pool: {
        min: 2,
        max: 10
    }
})

//passou no test
app.listen(port, async(req,res)=>{
    await knex.select('*').table('testusers')
                          .then(users => {
                              console.log(users)
                              console.log(`online into ${port}`)
                            })
    
})

//passou no test
app.get('/', async(req,res)=>{
     await res.status(200).json({msg:'hello world of test!'})
})

//passou no test
app.get('/users', async(req,res)=>{
    await knex.select('*').table('testusers')
                          .then(users => {
                              res.status(200).json(users)
                            })
                          .catch(err  => {
                              res.status(400).json(err)
                            })
})

//passou no test
app.get('/users/:id', async(req,res)=>{
    await knex.where({ id :req.params.id })             
                          .select('*').table('testusers')
                          .then(users => {
                              res.status(200).json(users)
                            })
                          .catch(err  => {
                              res.status(400).json(err)
                            })
})

//passou no test
app.get('/users/person/name/:name', async(req,res)=>{
    await knex.where({ name :req.params.name })             
                          .select('*').table('testusers')
                          .then(users => {
                              res.status(200).json(users)
                            })
                          .catch(err  => {
                              res.status(400).json(err)
                            })
})

//passou no test
app.get('/users/person/email/:email',async(req,res)=>{
    await knex.where({ email :req.params.email })             
                            .select('*').table('testusers')
                            .then(users => {
                                res.status(200).json(users)
                            })
                            .catch(err  => {
                                res.status(400).json(err)
                            })
})

//passou no test
app.get('/users/person/query?', async(req,res)=>{
    await knex.where({ name :req.query.name })             
                          .select('*').table('testusers')
                          .then(users => {
                              res.status(200).json(users)
                            })
                          .catch(err  => {
                              res.status(400).json(err)
                            })
})