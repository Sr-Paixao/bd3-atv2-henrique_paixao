// mostra os produtos dos mais baratos para os mais caros

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find({}).sort({valor: 1})