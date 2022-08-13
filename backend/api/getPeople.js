const knex = require('../knex/knx')

module.exports = app => {
    const getData = async(req, res) => {
        let data = await knex.select('*')
                       .table('people')
                       .then(e => res.status(200).json(e))
                       .catch(err => res.status(500).json(err))
    } 

    return { getData }
}