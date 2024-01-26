import pgPromise from "pg-promise"

// conexão de database :

const {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
} = process.env
const pgp = pgPromise()
//
const db = pgp({
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
})

export default db
