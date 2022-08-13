const knex = require('../knex/knx')

module.exports = app => {
    const insertData = async(req, res) => {

        let person = {
                        name:   req.body.name,
                        job:    req.body.job,
                        salary: req.body.salary,
                        sector: req.body.sector
        }

        let data = await knex.insert(person)
                             .table('people')
                             .then(e => res.status(201).json(e))
                             .catch(err => res.status(401).json(err))
    } 

    return { insertData }
}