const database = "bd3-atv2-henrique_paixao";

const collection = "bd3_atv2_produtos";

use(database);

db[collection].insertMany([
  {
    _id: 1,
    nome: "Torradeira Compacta",
    valor: 159.9,
    quantidadeEmEstoque: 30,
    fabricante: "BreakfastPro",
    categoria: "Eletrodomésticos",
    descricao: "Torradeira compacta com ajuste de temperatura e bandeja removível."
  },
  {
    _id: 2,
    nome: "Mixer Portátil",
    valor: 89.9,
    quantidadeEmEstoque: 50,
    fabricante: "MixEasy",
    categoria: "Eletrodomésticos",
    descricao: "Mixer portátil para sucos e smoothies, fácil de transportar."
  },
  {
    _id: 3,
    nome: "Ventilador de Mesa",
    valor: 199.9,
    quantidadeEmEstoque: 15,
    fabricante: "FreshBreeze",
    categoria: "Eletrodomésticos",
    descricao: "Ventilador de mesa silencioso com ajuste de altura."
  },
  {
    _id: 4,
    nome: "Purificador de Água",
    valor: 499.9,
    quantidadeEmEstoque: 10,
    fabricante: "PureLife",
    categoria: "Eletrodomésticos",
    descricao: "Purificador de água com filtros removíveis e display digital."
  },
  {
    _id: 5,
    nome: "Tablet Vision",
    valor: 999.9,
    quantidadeEmEstoque: 25,
    fabricante: "TechNova",
    categoria: "Eletrônicos",
    descricao: "Tablet com tela de 10 polegadas e suporte para caneta digital."
  },
  {
    _id: 6,
    nome: "Fone Bluetooth Pro",
    valor: 399.9,
    quantidadeEmEstoque: 40,
    fabricante: "SoundWave",
    categoria: "Eletrônicos",
    descricao: "Fone de ouvido Bluetooth com cancelamento de ruído ativo."
  },
  {
    _id: 7,
    nome: "Monitor 27 UltraWide",
    valor: 1899.9,
    quantidadeEmEstoque: 12,
    fabricante: "VisionScreen",
    categoria: "Eletrônicos",
    descricao: "Monitor UltraWide 4K com cores calibradas e design sem bordas."
  },
  {
    _id: 8,
    nome: "Projetor Portátil",
    valor: 799.9,
    quantidadeEmEstoque: 18,
    fabricante: "VisionTech",
    categoria: "Eletrônicos",
    descricao: "Projetor portátil com resolução HD e suporte para streaming."
  },
  {
    _id: 9,
    nome: "Tênis Casual Urban",
    valor: 249.9,
    quantidadeEmEstoque: 35,
    fabricante: "UrbanWear",
    categoria: "Moda",
    descricao: "Tênis casual com design moderno e conforto garantido."
  },
  {
    _id: 10,
    nome: "Jaqueta Impermeável",
    valor: 399.9,
    quantidadeEmEstoque: 20,
    fabricante: "TrailGear",
    categoria: "Moda",
    descricao: "Jaqueta leve e impermeável, ideal para aventuras ao ar livre."
  },
  {
    _id: 11,
    nome: "Halteres Ajustáveis",
    valor: 599.9,
    quantidadeEmEstoque: 8,
    fabricante: "FitGear",
    categoria: "Esportes",
    descricao: "Conjunto de halteres ajustáveis de 2 a 20 kg."
  },
  {
    _id: 12,
    nome: "Esteira Dobrável",
    valor: 2999.9,
    quantidadeEmEstoque: 5,
    fabricante: "RunSmart",
    categoria: "Esportes",
    descricao: "Esteira dobrável com inclinação automática e monitor cardíaco."
  },
  {
    _id: 13,
    nome: "Drone Compacto",
    valor: 1299.9,
    quantidadeEmEstoque: 10,
    fabricante: "SkyView",
    categoria: "Tecnologia",
    descricao: "Drone compacto com câmera 4K e estabilizador de imagem."
  },
  {
    _id: 14,
    nome: "Câmera de Ação",
    valor: 799.9,
    quantidadeEmEstoque: 15,
    fabricante: "AdventurerCam",
    categoria: "Tecnologia",
    descricao: "Câmera de ação resistente à água e gravação em 60 fps."
  },
  {
    _id: 15,
    nome: "Mala de Viagem",
    valor: 349.9,
    quantidadeEmEstoque: 20,
    fabricante: "TravelEasy",
    categoria: "Acessórios",
    descricao: "Mala de viagem com rodinhas 360° e cadeado integrado."
  },
  {
    _id: 16,
    nome: "Cafeteira Automática",
    valor: 899.9,
    quantidadeEmEstoque: 12,
    fabricante: "CoffeeMaster",
    categoria: "Eletrodomésticos",
    descricao: "Cafeteira automática com timer programável e moagem integrada."
  },
  {
    _id: 17,
    nome: "Cadeira Ergonômica",
    valor: 649.9,
    quantidadeEmEstoque: 25,
    fabricante: "ComfortPlus",
    categoria: "Móveis",
    descricao: "Cadeira ergonômica ajustável para escritórios."
  },
  {
    _id: 18,
    nome: "Capa de Chuva Leve",
    valor: 129.9,
    quantidadeEmEstoque: 40,
    fabricante: "RainShield",
    categoria: "Moda",
    descricao: "Capa de chuva leve com capuz ajustável."
  },
  {
    _id: 19,
    nome: "Smartwatch Plus",
    valor: 799.9,
    quantidadeEmEstoque: 50,
    fabricante: "TechWear",
    categoria: "Eletrônicos",
    descricao: "Smartwatch com monitor cardíaco e integração com smartphone."
  },
  {
    _id: 20,
    nome: "Bolsa Tote Clássica",
    valor: 299.9,
    quantidadeEmEstoque: 35,
    fabricante: "StyleBag",
    categoria: "Moda",
    descricao: "Bolsa tote com design clássico e múltiplos compartimentos."
  },
  {
    _id: 21,
    nome: "Smart TV 50",
    valor: 2599.9,
    quantidadeEmEstoque: 10,
    fabricante: "VisionScreen",
    categoria: "Eletrônicos",
    descricao: "Smart TV com resolução 4K e suporte a aplicativos de streaming."
  },
  {
    _id: 22,
    nome: "Carregador Portátil",
    valor: 199.9,
    quantidadeEmEstoque: 60,
    fabricante: "PowerUp",
    categoria: "Acessórios",
    descricao: "Carregador portátil com capacidade de 20.000mAh."
  },
  {
    _id: 23,
    nome: "Balança Inteligente",
    valor: 149.9,
    quantidadeEmEstoque: 30,
    fabricante: "SmartScale",
    categoria: "Eletrodomésticos",
    descricao: "Balança inteligente com análise corporal."
  },
  {
    _id: 24,
    nome: "Fritadeira Sem Óleo",
    valor: 599.9,
    quantidadeEmEstoque: 18,
    fabricante: "AirCook",
    categoria: "Eletrodomésticos",
    descricao: "Fritadeira sem óleo com capacidade de 5 litros."
  },
  {
    _id: 25,
    nome: "Mochila Executiva",
    valor: 349.9,
    quantidadeEmEstoque: 22,
    fabricante: "BagPro",
    categoria: "Acessórios",
    descricao: "Mochila executiva com compartimento para notebook."
  },
  {
    _id: 26,
    nome: "Cortador de Legumes",
    valor: 59.9,
    quantidadeEmEstoque: 50,
    fabricante: "KitchenTools",
    categoria: "Utensílios de Cozinha",
    descricao: "Cortador multifuncional para legumes com lâminas ajustáveis."
  },
  {
    _id: 27,
    nome: "Faqueiro Inox 24 Peças",
    valor: 199.9,
    quantidadeEmEstoque: 30,
    fabricante: "SilverSet",
    categoria: "Utensílios de Cozinha",
    descricao: "Faqueiro em aço inoxidável com design elegante."
  },
  {
    _id: 28,
    nome: "Colchão Ortopédico",
    valor: 1299.9,
    quantidadeEmEstoque: 15,
    fabricante: "SleepWell",
    categoria: "Móveis",
    descricao: "Colchão ortopédico com camada de memória e suporte lombar."
  },
  {
    _id: 29,
    nome: "Aspirador de Pó Robô",
    valor: 1499.9,
    quantidadeEmEstoque: 8,
    fabricante: "CleanBot",
    categoria: "Eletrodomésticos",
    descricao: "Aspirador de pó robô inteligente com conexão Wi-Fi."
  },
  {
    _id: 30,
    nome: "Liquidificador 5 Velocidades",
    valor: 299.9,
    quantidadeEmEstoque: 25,
    fabricante: "BlendMaster",
    categoria: "Eletrodomésticos",
    descricao: "Liquidificador potente com copo de vidro e cinco velocidades."
  },
  {
    _id: 31,
    nome: "Relógio de Parede Vintage",
    valor: 149.9,
    quantidadeEmEstoque: 40,
    fabricante: "TimeDecor",
    categoria: "Decoração",
    descricao: "Relógio de parede estilo vintage com design clássico."
  },
  {
    _id: 32,
    nome: "Vaso Decorativo Cerâmica",
    valor: 89.9,
    quantidadeEmEstoque: 50,
    fabricante: "HomeArt",
    categoria: "Decoração",
    descricao: "Vaso decorativo em cerâmica com acabamento fosco."
  },
  {
    _id: 33,
    nome: "Ar Condicionado Portátil",
    valor: 2599.9,
    quantidadeEmEstoque: 12,
    fabricante: "CoolAir",
    categoria: "Eletrodomésticos",
    descricao: "Ar condicionado portátil com controle remoto e timer."
  },
  {
    _id: 34,
    nome: "Câmera de Segurança Wi-Fi",
    valor: 499.9,
    quantidadeEmEstoque: 30,
    fabricante: "SafeHome",
    categoria: "Tecnologia",
    descricao: "Câmera de segurança Wi-Fi com visão noturna e detecção de movimento."
  },
  {
    _id: 35,
    nome: "Roteador Mesh",
    valor: 699.9,
    quantidadeEmEstoque: 20,
    fabricante: "NetSpeed",
    categoria: "Tecnologia",
    descricao: "Sistema de roteador Mesh para cobertura de sinal em toda a casa."
  },
  {
    _id: 36,
    nome: "Caixa de Som Bluetooth",
    valor: 249.9,
    quantidadeEmEstoque: 35,
    fabricante: "SoundBlast",
    categoria: "Eletrônicos",
    descricao: "Caixa de som Bluetooth à prova d'água com bateria de longa duração."
  },
  {
    _id: 37,
    nome: "Mochila para Câmera",
    valor: 349.9,
    quantidadeEmEstoque: 20,
    fabricante: "PhotoGear",
    categoria: "Acessórios",
    descricao: "Mochila para câmera com divisórias acolchoadas e capa de chuva."
  },
  {
    _id: 38,
    nome: "Luminária LED de Mesa",
    valor: 129.9,
    quantidadeEmEstoque: 50,
    fabricante: "BrightLight",
    categoria: "Iluminação",
    descricao: "Luminária LED de mesa com ajuste de intensidade e carregador USB."
  },
  {
    _id: 39,
    nome: "Toalha de Banho Luxo",
    valor: 79.9,
    quantidadeEmEstoque: 60,
    fabricante: "ComfortTowel",
    categoria: "Cama, Mesa e Banho",
    descricao: "Toalha de banho extra macia e absorvente."
  },
  {
    _id: 40,
    nome: "Jogo de Lençol Queen",
    valor: 299.9,
    quantidadeEmEstoque: 25,
    fabricante: "SoftDream",
    categoria: "Cama, Mesa e Banho",
    descricao: "Jogo de lençol queen 300 fios em algodão egípcio."
  },
  {
    _id: 41,
    nome: "Tenda para Camping",
    valor: 699.9,
    quantidadeEmEstoque: 15,
    fabricante: "OutdoorPro",
    categoria: "Esportes",
    descricao: "Tenda para camping com capacidade para 4 pessoas e proteção UV."
  },
  {
    _id: 42,
    nome: "Colher de Silicone",
    valor: 29.9,
    quantidadeEmEstoque: 100,
    fabricante: "KitchenEssentials",
    categoria: "Utensílios de Cozinha",
    descricao: "Colher de silicone resistente ao calor e fácil de limpar."
  },
  {
    _id: 43,
    nome: "Caixa Organizadora",
    valor: 59.9,
    quantidadeEmEstoque: 80,
    fabricante: "OrganizeIt",
    categoria: "Utilidades Domésticas",
    descricao: "Caixa organizadora dobrável com alças reforçadas."
  },
  {
    _id: 44,
    nome: "Par de Halteres de 5kg",
    valor: 199.9,
    quantidadeEmEstoque: 30,
    fabricante: "FitPower",
    categoria: "Esportes",
    descricao: "Par de halteres revestidos em borracha para treinos em casa."
  },
  {
    _id: 45,
    nome: "Espremedor de Frutas",
    valor: 139.9,
    quantidadeEmEstoque: 40,
    fabricante: "CitrusMax",
    categoria: "Eletrodomésticos",
    descricao: "Espremedor de frutas elétrico com motor silencioso."
  },
  {
    _id: 46,
    nome: "Jogo de Panelas Antiaderentes",
    valor: 699.9,
    quantidadeEmEstoque: 20,
    fabricante: "CookMaster",
    categoria: "Utensílios de Cozinha",
    descricao: "Conjunto de panelas antiaderentes com revestimento cerâmico."
  },
  {
    _id: 47,
    nome: "Churrasqueira Elétrica",
    valor: 499.9,
    quantidadeEmEstoque: 15,
    fabricante: "GrillPro",
    categoria: "Eletrodomésticos",
    descricao: "Churrasqueira elétrica compacta com controle de temperatura."
  },
  {
    _id: 48,
    nome: "Patins Inline",
    valor: 599.9,
    quantidadeEmEstoque: 10,
    fabricante: "RollerX",
    categoria: "Esportes",
    descricao: "Patins inline ajustáveis com rodas de alta performance."
  },
  {
    _id: 49,
    nome: "Relógio Analógico Masculino",
    valor: 349.9,
    quantidadeEmEstoque: 25,
    fabricante: "TimeStyle",
    categoria: "Moda",
    descricao: "Relógio analógico masculino com pulseira de couro."
  },
  {
    _id: 50,
    nome: "Tablet Kids",
    valor: 599.9,
    quantidadeEmEstoque: 30,
    fabricante: "KidTech",
    categoria: "Eletrônicos",
    descricao: "Tablet resistente para crianças com aplicativos educacionais."
  },  
]);
