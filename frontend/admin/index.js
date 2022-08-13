let doc = document
doc.onload = addEventListener('load',()=>{
    sector()
    normalMode()
    $('#send-mesg').hide(1)
    $('#wrongsend-mesg').hide(1)
    $('#update-mesg').hide(1)
    $('#delete-mesg').hide(1)
})
doc.onclick = addEventListener('click',e => e.preventDefault())
$('#homeArea').click(function(){
   doc.location.href = '../web/index.html'
})
function sector(){
    const url = 'category.json'
    const select = document.querySelector('#inputGroupSelect01')

    fetch(url)
        .then(res => res.json())
        .then(res => {
            res.map(e => {
                let category = e.category
                let option   = document.createElement('option')
                
                option.append(category)
                select.append(option)
            })
        })
        .catch(err => console.log(err))
}
function editMode(){
    $('#edit').show(1)
    $('#normal').hide(1)
}
function normalMode(){
    $('#edit').hide(1)
    $('#normal').show(1)
} 
function sendMesg(){
    $('#send-mesg').show(100)
}
$('input').mouseenter(function(){
    $('#wrongsend-mesg').hide(100)
    $('#send-mesg').hide(100)
    $('#update-mesg').hide(100)
    $('#delete-mesg').hide(100)
})
$('#send').click(function(){

   const name     = document.querySelector('#name').value
   const job      = document.querySelector('#job').value
   const salary   = document.querySelector('#salary').value
   const sector   = document.querySelector('#inputGroupSelect01').value
   
    if( name    == '' ||
        job     == '' ||
        salary  == '' ||
        sector  == ''){
           
            $('#wrongsend-mesg').show(100)

    }else{
        const url = 'http://localhost:3003/insert' 

   const data = {
        name,
        job,
        salary,
        sector
   }

   const config = {
        method: 'POST',
        body:JSON.stringify(data),
        headers :{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache :'default',
        status :201
   }

   fetch(url,config).then(data => data.json())
                    .catch(err => console.log(err))

                    clearFields()
                    sendMesg()
    } 
})
function clearFields(){
    const id       = document.querySelector('#id')
    const name     = document.querySelector('#name')
    const job      = document.querySelector('#job')
    const salary   = document.querySelector('#salary')
    const sector   = document.querySelector('#inputGroupSelect01')

    id.value        = ''
    name.value      = ''
    job.value       = ''
    salary.value    = ''
    sector.value    = ''
}
$('#clear').click(function(){
    const id       = document.querySelector('#id')
    const name     = document.querySelector('#name')
    const job      = document.querySelector('#job')
    const salary   = document.querySelector('#salary')
    const sector   = document.querySelector('#inputGroupSelect01')

    id.value        = ''
    name.value      = ''
    job.value       = ''
    salary.value    = ''
    sector.value    = ''
})
$('#edition').click(function(){
    editMode()
})
$('#nmode').click(function(){
    normalMode()
})
$('#getId').click(function(){
    const id       = document.querySelector('#id').value
    const name     = document.querySelector('#name')
    const job      = document.querySelector('#job')
    const salary   = document.querySelector('#salary')
    const sector   = document.querySelector('#inputGroupSelect01')

    const url = `http://localhost:3003/${id}`

    const config = {
        method: 'GET',
        mode  : 'cors',
        cache : 'default',
        status: 200
   }

   fetch(url,config)
                .then(res => res.json())
                .then(res => {
                    res.map(e => {
                        let nameDb   = e.name
                        let jobDb    = e.job
                        let salaryDb = e.salary
                        let sectorDb = e.sector

                        name.value   = nameDb
                        job.value    = jobDb
                        salary.value = salaryDb
                        sector.value = sectorDb
                    }) 
                })
                .catch(err => console.log(err))
})
$('#update').click(function(){
    const id       = document.querySelector('#id').value
    const name     = document.querySelector('#name').value
    const job      = document.querySelector('#job').value
    const salary   = document.querySelector('#salary').value
    const sector   = document.querySelector('#inputGroupSelect01').value

    const url = `http://localhost:3003/update/${id}`

     const data = {
        name,
        job,
        salary,
        sector
   }

    const config = {
        method: 'PUT',
        body:JSON.stringify(data),
        headers :{
            'Content-Type': 'application/json'
        },
        mode  : 'cors',
        cache : 'default',
        status: 200
   }

   fetch(url,config).then(res => res.json())
                    .then(_ => {
                        $('#update-mesg').show(100)
                    })
                    .catch(err => console.log(err))
    clearFields()
})
$('#delete').click(function(){
    const id = document.querySelector('#id').value

    const url = `http://localhost:3003/delete/${id}`

    const config = {
        method: 'DELETE'
   }

   fetch(url,config).then(res => res.json())
                    .then(_ => {
                        $('#delete-mesg').show(100)
                    })
                    .catch(err => console.log(err))
    clearFields()
})

