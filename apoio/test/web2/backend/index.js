const port = 3009
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
const cors = require('cors')
const express = require('express')
const app     = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:'*'}))

app.listen(port, async(req,res) =>{
    await knex.select('*').table('testusers')
                          .then(test => {
                                console.log(test)
                           })
                          .catch(err => {
                                console.log(err)
                           })
    console.log(`online in port :${port}`)
})

app.get('/',(req,res) =>{
    // url: http://localhost:3009/
    knex.select('*').table('testusers')
                          .then(test => {
                            res.status(200)
                               .json(test)
                           })
                          .catch(err => {
                            res.status(500)
                               .json(err)
                           })
})

app.get('/name/:name', async(req,res) =>{
    //url: http://localhost:3009/name/:name
    await knex.where({
            name :req.params.name
        }).select('*').table('testusers')
                      .then(test => {
                            res.status(200)
                               .json(test)
                      })
                      .catch(err => {
                            res.status(500)
                            .json(err)
                      })
})

app.get('/test/email', async(req,res) =>{
    //url: http://localhost:3009/email?email=email
    await knex.where({
            email :req.query.email
        }).select('*').table('testusers')
                      .then(test => {
                            res.status(200)
                               .json(test)
                      })
                      .catch(err => {
                            res.status(500)
                            .json(err)
                      })
})

app.get('/test/login', async(req,res) =>{
    //url: http://localhost:3009/login?login=login
    await knex.where({
            login :req.query.login
        }).select('*').table('testusers')
                      .then(test => {
                            res.status(200)
                               .json(test)
                      })
                      .catch(err => {
                            res.status(500)
                            .json(err)
                      })
})