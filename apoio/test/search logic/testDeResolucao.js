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
    $('#search').keyup(function(){
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
                        name.map(e =>{

                                let id = e.id
                                let ulId  = doc.createElement('ul') 
                                ulId.append(id)
                                idSc.append(ulId)
                             
                                let name = e.name.substring(0,15)
                                let ulName  = doc.createElement('ul') 
                                ulName.append(name)
                                nameSc.append(ulName)
                              
                                let job = e.job.substring(0,15)
                                let ulJob  = doc.createElement('ul') 
                                ulJob.append(job)
                                jobSc.append(ulJob)
                               
                                let sector = e.sector.substring(0,15)
                                let ulSector  = doc.createElement('ul') 
                                ulSector.append(sector)
                                sectorSc.append(ulSector)
                                
                                let salary = e.salary.substring(0,15)
                                let ulSalary  = doc.createElement('ul') 
                                ulSalary.append(salary)
                                salarySc.append(ulSalary)
                        })
                    })
                    .catch(err => console.log(err))

        }else if($(this).val() == ''){
            doc.location.reload()
        }
    })
    $('#search').keyup(function(){
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
                                ulId.append(id)
                                idSc.append(ulId)
                             
                                let name = e.name.substring(0,15)
                                let ulName  = doc.createElement('ul') 
                                ulName.append(name)
                                nameSc.append(ulName)
                              
                                let job = e.job.substring(0,15)
                                let ulJob  = doc.createElement('ul') 
                                ulJob.append(job)
                                jobSc.append(ulJob)
                               
                                let sector = e.sector.substring(0,15)
                                let ulSector  = doc.createElement('ul') 
                                ulSector.append(sector)
                                sectorSc.append(ulSector)
                                
                                let salary = e.salary.substring(0,15)
                                let ulSalary  = doc.createElement('ul') 
                                ulSalary.append(salary)
                                salarySc.append(ulSalary)
                        })
                    })
                    .catch(err => console.log(err))

        }else if($(this).val() == ''){
            doc.location.reload()
        }
    })
    $('#search').keyup(function(){
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
                                ulId.append(id)
                                idSc.append(ulId)
                             
                                let name = e.name.substring(0,15)
                                let ulName  = doc.createElement('ul') 
                                ulName.append(name)
                                nameSc.append(ulName)
                              
                                let job = e.job.substring(0,15)
                                let ulJob  = doc.createElement('ul') 
                                ulJob.append(job)
                                jobSc.append(ulJob)
                               
                                let sector = e.sector.substring(0,15)
                                let ulSector  = doc.createElement('ul') 
                                ulSector.append(sector)
                                sectorSc.append(ulSector)
                                
                                let salary = e.salary.substring(0,15)
                                let ulSalary  = doc.createElement('ul') 
                                ulSalary.append(salary)
                                salarySc.append(ulSalary)
                        })
                    })
                    .catch(err => console.log(err))

        }else if($(this).val() == ''){
             doc.location.reload()
        }
    }) 
 


/**

    gera um outro problema,
    ao mudar o cursor ele adiciona 
    chamadas do elemento invocado em
    loop, caso não se apague uma letra
    dos dados buscados!

 */





