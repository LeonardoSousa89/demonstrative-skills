
let doc = document
let area = doc.querySelector('.area')
doc.onload = addEventListener('click',(e) =>{
  e.preventDefault()
})

function callName(){ 
    let name   = doc.querySelector('.name')
    let nameBt = doc.querySelector('#name')
 
    nameBt.addEventListener('click', ()=>{
      const url  = `http://localhost:3009/name/${name.value}`

      const config = {
            method :'GET'
      } 

      fetch(url,config).then(name => name.json())
                       .then(name => {
                          name.map(name =>{
                             
                              let idTst  = '[' + name.id       + ','
                              area.append(idTst)

                              let nameTst = name.name    + ','
                              area.append(nameTst)

                              let emailTst  = name.email + ','
                              area.append(emailTst)

                              let loginTst  = name.login + ']'
                              area.append(loginTst)
                          })
                       })
                       .catch(err => console.log(err))
    })
}
callName()

function callEmail(){
  let email = doc.querySelector('.email')
  doc.querySelector('#email').addEventListener('click',()=>{
       const url  = `http://localhost:3009/test/email?email=${email.value}`
      
        const config = {
              method :'GET'
        }    

        fetch(url,config).then(email => email.json())
                         .then(email =>{
                           email.map(email =>{
                              let emailId = '[' + email.id + ','
                              area.append(emailId)

                              let emailName = email.name + ','
                              area.append(emailName)

                              let emailEmail = email.email + ','
                              area.append(emailEmail)

                              let emailLogin = email.login + ']'
                              area.append(emailLogin)
                           })
                         })
                         .catch()
  })
}
callEmail()

function callLogin(){
  let login = doc.querySelector('.login')
  doc.querySelector('#login').addEventListener('click',()=>{
    const url  = `http://localhost:3009/test/login?login=${login.value}`
      
    const config = {
          method :'GET'
    }   
    
    fetch(url,config).then(login => login.json())
                     .then(login => {
                        login.map(login =>{
                           let loginId = '[' + login.id + ','
                           area.append(loginId)

                           let loginName = login.name + ','
                           area.append(loginName)

                           let loginEmail = login.email + ','
                           area.append(loginEmail)

                           let loginLogin = login.login + ']'
                           area.append(loginLogin)
                        })
                     })
                     .catch()
  })
}
callLogin()

function refresh(){
  doc.querySelector('#refresh').addEventListener('click',()=>{
        doc.location.reload()
  })
}
refresh()

/**
 * 
 * O erro se dá pelo uso do parametro,
 * innerHTML ele retorna somente um elemento,
 * na chamada, em cada caso o último,
 * em uma estrutura de dados com [n] elementos
 * somente o último será invocado,
 * então devo usar o método append e não o innerHTML
 * e ai está resolvido o problema. 
 * 
 */