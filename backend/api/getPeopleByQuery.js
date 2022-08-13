const knex = require('../knex/knx')

module.exports = app => {
    const getByQueryDataName = async(req, res) => {
        let data = await knex.where({
                            name: req.params.name  
                        })
                       .select('*')
                       .table('people')
                       .then(e => res.status(200).json(e))
                       .catch(err => res.status(500).json(err))
    } 

    const getByQueryDataJob = async(req, res) => {
        let data = await knex.where({
                            job: req.params.job 
                        })
                       .select('*')
                       .table('people')
                       .then(e => res.status(200).json(e))
                       .catch(err => res.status(500).json(err))
    }
    
    const getByQueryDataSector = async(req, res) => {
        let data = await knex.where({
                            sector: req.params.sector 
                        })
                       .select('*')
                       .table('people')
                       .then(e => res.status(200).json(e))
                       .catch(err => res.status(500).json(err))
    }

    return { getByQueryDataName, getByQueryDataJob, getByQueryDataSector }
}