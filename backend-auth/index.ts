const port = 3004
import db from './config/knex.js'
import cors from 'cors' 
import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:'*'}))

app.get('/auth',(req,res)=>{
    
    interface User {
        id?      :number;
        user     :string;
        password :string;
    }

    db<User>('auth').select('*')
                       .then(e    => res.status(200).json(e))
                       .catch(err => res.status(400).json(err))

})
app.listen(port,()=>{
    let msg :string = `online into port :${port}, ${db}`
    console.log(msg)
   
})

