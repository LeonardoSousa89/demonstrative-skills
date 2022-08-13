
let doc = document
doc.onload  = addEventListener('load',()=>{
    $('#alert').hide(1)
    $('#noDataTable').hide(1)
    $('#dataSearched').hide(1)
    dataTable()
})
$('.sair').click(function(){
    doc.location.href = '../index.html'
})
$('.sair').mousemove(function(){
    $('#alert').show(100)
})
$('.sair').mouseleave(function(){
    $('#alert').hide()
})
$('#admArea').click(function(){
    doc.location.href = '../admin/index.html'
})
function dataTable(){
    let id      = document.querySelector('#idDb')
    let name    = document.querySelector('#nameDb')
    let job     = document.querySelector('#jobDb')
    let sector  = document.querySelector('#sectorDb')
    let salary  = document.querySelector('#salaryDb')
    
    const url = 'http://localhost:3003'

    const config = {
        method :'GET'
    }

    fetch(url,config)
                .then(res => res.json())
                .then(res => {
                    res.map(e => {

                        let idDb = e.id
                        let ulId = doc.createElement('ul')
                        ulId.append(idDb)
                        id.append(ulId)

                        let nameDb = e.name.substring(0,15)
                        let ulName = doc.createElement('ul')
                        ulName.append(nameDb)
                        name.append(ulName)

                        let jobDb = e.job.substring(0,15)
                        let ulJob = doc.createElement('ul')
                        ulJob.append(jobDb)
                        job.append(ulJob)

                        let salaryDb = e.salary
                        let ulSalary = doc.createElement('ul')
                        ulSalary.append(salaryDb)
                        salary.append(ulSalary)

                        let sectorDb = e.sector
                        let ulSector = doc.createElement('ul')
                        ulSector.append(sectorDb)
                        sector.append(ulSector)
                    })
                })
                .catch(_ => {
                    $('#noDataTable').show(100)
                })
}
$('#search').change(function(){
    if($(this).val() != ''){
        $('#dataStandard').hide()
        $('#dataSearched').show()
    
        let idSc        = doc.querySelector('#idDbSc')
        let nameSc      = doc.querySelector('#nameDbSc')
        let jobSc       = doc.querySelector('#jobDbSc')
        let sectorSc    = doc.querySelector('#sectorDbSC')
        let salarySc    = doc.querySelector('#salaryDbSc')

        let search      = $(this).val()
        let url = `http://localhost:3003/search/name/${search}`
        
        const config = {
            method :'GET'
        }

        fetch(url,config)
                .then(name => name.json())
                .then(name => {
                    name.filter(e =>{

                            let id = e.id
                            let ulId  = doc.createElement('ul') 
                            ulId.innerHTML = id
                            idSc.insertAdjacentElement('afterbegin',ulId)
                       
                            let name = e.name.substring(0,15)
                            let ulName  = doc.createElement('ul') 
                            ulName.innerHTML = name
                            nameSc.insertAdjacentElement('afterbegin',ulName)
                          
                            let job = e.job.substring(0,15)
                            let ulJob  = doc.createElement('ul') 
                            ulJob.innerHTML = job
                            jobSc.insertAdjacentElement('afterbegin',ulJob)
                           
                            let sector = e.sector.substring(0,15)
                            let ulSector  = doc.createElement('ul') 
                            ulSector.innerHTML = sector
                            sectorSc.insertAdjacentElement('afterbegin',ulSector)
                            
                            let salary = e.salary.substring(0,15)
                            let ulSalary  = doc.createElement('ul') 
                            ulSalary.innerHTML = salary
                            salarySc.insertAdjacentElement('afterbegin',ulSalary)
                        })
                })
                .catch(err => console.log(err))

    }
})
$('#search').change(function(){
    if($(this).val() != ''){
        $('#dataStandard').hide()
        $('#dataSearched').show()
    
        let idSc        = doc.querySelector('#idDbSc')
        let nameSc      = doc.querySelector('#nameDbSc')
        let jobSc       = doc.querySelector('#jobDbSc')
        let sectorSc    = doc.querySelector('#sectorDbSC')
        let salarySc    = doc.querySelector('#salaryDbSc')

        let search      = $(this).val()
        let url = `http://localhost:3003/search/job/${search}`
        
        const config = {
            method :'GET'
        }

        fetch(url,config)
                .then(job => job.json())
                .then(job => {
                    job.map(e =>{
                            
                            let id = e.id
                            let ulId  = doc.createElement('ul') 
                            ulId.innerHTML = id
                            idSc.insertAdjacentElement('afterbegin',ulId)
                         
                            let name = e.name.substring(0,15)
                            let ulName  = doc.createElement('ul') 
                            ulName.innerHTML = name
                            nameSc.insertAdjacentElement('afterbegin',ulName)
                          
                            let job = e.job.substring(0,15)
                            let ulJob  = doc.createElement('ul') 
                            ulJob.innerHTML = job
                            jobSc.insertAdjacentElement('afterbegin',ulJob)
                           
                            let sector = e.sector.substring(0,15)
                            let ulSector  = doc.createElement('ul') 
                            ulSector.innerHTML = sector
                            sectorSc.insertAdjacentElement('afterbegin',ulSector)
                            
                            let salary = e.salary.substring(0,15)
                            let ulSalary  = doc.createElement('ul') 
                            ulSalary.innerHTML = salary
                            salarySc.insertAdjacentElement('afterbegin',ulSalary)
                    })
                })
                .catch(err => console.log(err))

    }
})
$('#search').change(function(){
    if($(this).val() != ''){
        $('#dataStandard').hide()
        $('#dataSearched').show()
    
        let idSc        = doc.querySelector('#idDbSc')
        let nameSc      = doc.querySelector('#nameDbSc')
        let jobSc       = doc.querySelector('#jobDbSc')
        let sectorSc    = doc.querySelector('#sectorDbSC')
        let salarySc    = doc.querySelector('#salaryDbSc')

        let search      = $(this).val()
        let url = `http://localhost:3003/search/sector/${search}`
        
        const config = {
            method :'GET'
        }

        fetch(url,config)
                .then(sector => sector.json())
                .then(sector => {
                    sector.map(e =>{
                            
                            let id = e.id
                            let ulId  = doc.createElement('ul') 
                            ulId.innerHTML =id
                            idSc.insertAdjacentElement('afterbegin',ulId)
                         
                            let name = e.name.substring(0,15)
                            let ulName  = doc.createElement('ul') 
                            ulName.innerHTML = name
                            nameSc.insertAdjacentElement('afterbegin',ulName)
                          
                            let job = e.job.substring(0,15)
                            let ulJob  = doc.createElement('ul') 
                            ulJob.innerHTML = job
                            jobSc.insertAdjacentElement('afterbegin',ulJob)
                           
                            let sector = e.sector.substring(0,15)
                            let ulSector  = doc.createElement('ul') 
                            ulSector.innerHTML = sector
                            sectorSc.insertAdjacentElement('afterbegin',ulSector)
                            
                            let salary = e.salary.substring(0,15)
                            let ulSalary  = doc.createElement('ul') 
                            ulSalary.innerHTML = salary
                            salarySc.insertAdjacentElement('afterbegin',ulSalary)
                    })
                })
                .catch(err => console.log(err))

    }
}) 
$('#search').keyup(function(){
    if($(this).val() == ''){
      doc.location.reload()
    }
})





