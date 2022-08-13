
module.exports = app => {
    app.post('/insert',app.api.postPeople.insertData)
    app.get('/',app.api.getPeople.getData)
    app.get('/:id',app.api.getByIdPeople.getData)
    app.get('/search/name/:name',app.api.getPeopleByQuery.getByQueryDataName)
    app.get('/search/job/:job',app.api.getPeopleByQuery.getByQueryDataJob)
    app.get('/search/sector/:sector',app.api.getPeopleByQuery.getByQueryDataSector)
    app.put('/update/:id',app.api.putPeople.updateData)
    app.delete('/delete/:id',app.api.deletePeople.deleteData)
}