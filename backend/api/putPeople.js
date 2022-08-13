const knex = require('../knex/knx')

module.exports = app => {
    const updateData = async(req, res) => {

        let person = {
                        name:   req.body.name,
                        job:    req.body.job,
                        salary: req.body.salary,
                        sector: req.body.sector
        }

        let data = await knex.where({ id :req.params.id })
                             .update(person)
                             .table('people')
                             .then(_ => res.status(201).json(_))
                             .catch(err => res.status(401).json(err))
    } 

    return { updateData }
}