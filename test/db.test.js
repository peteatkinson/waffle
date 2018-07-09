const assert = require('chai').assert

describe('DB connection should be valid', () => {
    it('Should be able to connect to Postgres', () => {
        const db = require('../config/lib/db')
        db.proc('version').then(postgres => {
            assert.isNotNull(postgres.version)
            assert.isNotNaN(postgres.version)
        })
    })
})