const knex = require('../knex/knx')

module.exports = app => {
    const deleteData = async(req, res) => {

        let data = await knex.where({ id :req.params.id })
                             .delete()
                             .table('people')
                             .then(_ => res.status(201).json(_))
                             .catch(err => res.status(401).json(err))
    } 

    return { deleteData }
}