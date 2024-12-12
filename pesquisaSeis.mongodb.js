// exclui produtos de duas categorias e mostra das restantes sem que todos apareçam

const database = 'bd3-atv2-henrique_paixao'

const collection = 'bd3_atv2_produtos'

use(database)

db[collection].find({
    categoria: {$nin: ["Acessórios", "Eletrodomésticos"]}
}).limit(8)