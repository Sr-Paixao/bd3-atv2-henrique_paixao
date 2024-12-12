// mostra o produto mais barato

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find().sort({valor: 1}).limit(1)