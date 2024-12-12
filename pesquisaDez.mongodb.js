// mostra os produtos dos mais baratos para os mais caros de uma categoria

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find({categoria: "Moda"}).sort({valor: 1})