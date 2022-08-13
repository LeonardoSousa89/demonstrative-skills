const port    = 3005
const express = require('express')
const app     = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const user = []

    /**
     * {
            "id":1,
            "name":"Mendes",
            "email":"mendes@gmail.com",
            "login":1234
        }
         {
            "id":2,
            "name":"Ruan",
            "email":"mendes@gmail.com",
            "login":1234
        }

         {
            "id":3,
            "name":"Val",
            "email":"mendes@gmail.com",
            "login":1234
        }
    * 
    * 
    */

app.get('/search',(req,res) =>{
    //  http://localhost:3005/search?name=mendes&name=Sousa
    const query = req.query
    console.log(query)
    res.send({
       query
    })
})

app.get('/searched',(req,res) =>{
    //  http://localhost:3005/searched?name=MendesSousa&job=SftwareEgineer&salary=9000
        const {name,job,salary} = req.query
        
        console.log(name +','+ job + ',' + salary)
        return res.status(200).json({
            name,
            job,
            salary
        })
    })

app.get('/adm',(req,res) => {
    //   http://localhost:3005/adm
    return res.status(200).json(user)
})

//erro
app.get('/admquery',(req,res)=>{
    //   http://localhost:3005/admquery?named=nome
    let     named   = req.query.named
    const { name }  = req.body

    if(named == name){
        const { email, login } = req.body
        return res.status(200).json({email,login})
    }else{
        return res.status(200).json({
            msg:'usuário não encontrado!'
        })
    }
})

//erro
app.get('/admparam/:param',(req,res)=>{
    //   http://localhost:3005/admparam/:param
    let     named    = req.params.named
    const { name }   = req.body

    if(named == name){
        const { email, login } = req.body
        return res.status(200).json({email,login})
    }else{
        return res.status(200).json({
            msg:'usuário não encontrado!'
        })
    }
})

app.post('/adm/insert',(req,res) =>{
    //   http://localhost:3005/adm/insert
    const data = {
        id   :req.body.id,
        name :req.body.name,
        email: req.body.email,
        login: req.body.login
    }

    let users = user.push(data)
    return res.status(201).json(users)
})

app.listen(port,()=>{
    console.log(`online into ${port}`)
})