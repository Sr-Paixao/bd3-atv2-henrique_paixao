// mostra produtos de duas categorias sem que todos apareçam

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find({
    categoria: { $in: ["Acessórios", "Moda"] },
  }).limit(3);