// mostra produtos em uma faixa de preço sem que todos apareçam

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find({
    valor: { $gte: 199.9, $lte: 300.0 },
  }).limit(6);