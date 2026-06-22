/* ============================================================
   G-FIT | PRODUCTS.JS
   Datos de productos y funciones de renderizado
============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATABASE — 20 Productos deportivos femeninos
============================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: 'Legging High-Waist Sculpt Pro',
    category: 'leggings',
    price: 89000,
    originalPrice: 129000,
    discount: 31,
    rating: 4.8,
    reviews: 312,
    stock: 15,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL','XXL'],
    color: 'Negro',
    material: '75% Poliéster, 20% Nylon, 5% Elastano',
    images:[
      'img/leggins.jpg',
      'img/leggins1.2.jpg',
      'img/leggins1.3.jpg',
      'img/leggins1.4.jpg'
    ],
    colorHex: '#1a0a14',
    description: 'Legging de compresión alta con tecnología Sculpt que moldea y define tu silueta. Cintura alta ergonómica que ofrece soporte abdominal y un fit perfecto para todo tipo de actividad física.',
    specs: {
      'Tipo de ajuste': 'Compresión alta',
      'Cintura': 'Alta (24 cm)',
      'Largo': 'Full length',
      'Bolsillos': 'Lateral derecho',
      'Tecnología': 'Moisture-Wicking, Anti-Transparencia',
      'Uso ideal': 'Gym, Yoga, Running'
    },
    care: ['Lavar a máquina fría (30°C)', 'No usar blanqueador', 'No secar en secadora', 'Planchar a temperatura baja'],
    sampleReviews: [
      { name: 'Laura M.', rating: 5, date: '12 mayo 2025', comment: 'Son increíbles! No se transparentan, no se bajan y aguantan sesiones intensas. Los mejores leggings que he comprado.' },
      { name: 'Carolina V.', rating: 5, date: '3 mayo 2025', comment: 'Perfectos para el gym y para salir. La calidad es premium y el precio vale cada peso.' },
      { name: 'Andrea P.', rating: 4, date: '20 abril 2025', comment: 'Muy cómodos y bonitos. El negro es muy intenso, no pierde el color con las lavadas.' }
    ]
  },
  {
    id: 2,
    name: 'Top Deportivo Push-Up Luxe',
    category: 'tops',
    price: 65000,
    originalPrice: 85000,
    discount: 24,
    rating: 4.9,
    reviews: 428,
    stock: 8,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL'],
    color: 'Negro / Beige / Azul',
    material: '80% Poliamida, 20% Elastano',
    images:[
      'img/Producto_2.1.jpg',
      'img/Producto_2.2.jpg',
      'img/Producto_2.3.jpg',
      'img/Producto_2.4.jpg'
    ],
    colorHex: '#B07BC4',
    description: 'Top deportivo con relleno removible y efecto push-up natural. Ideal para entrenamiento intenso con soporte de nivel medio-alto.',
    specs: {
      'Soporte': 'Medio-Alto',
      'Relleno': 'Removible',
      'Cierre': 'Hebilla trasera / elástico',
      'Tirantes': 'Cruzados en espalda',
      'Tecnología': 'Quick-Dry',
      'Uso ideal': 'Gym, HIIT, Spinning'
    },
    care: ['Lavar a mano o máquina delicada', 'Temperatura fría', 'No usar secadora', 'Extender al aire'],
    sampleReviews: [
      { name: 'Valentina R.', rating: 5, date: '8 junio 2025', comment: 'Hermoso y muy cómodo. El efecto push-up es discreto y elegante. Lo uso hasta para salir.' },
      { name: 'Sofía C.', rating: 5, date: '1 junio 2025', comment: 'Perfecto para todo tipo de ejercicio. No se mueve para nada.' }
    ]
  },
  {
    id: 3,
    name: 'Conjunto Deportivo Black',
    category: 'conjuntos',
    price: 145000,
    originalPrice: 195000,
    discount: 26,
    rating: 4.7,
    reviews: 189,
    stock: 12,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL'],
    color: 'Negro',
    material: '72% Poliéster, 22% Nylon, 6% Elastano',
    images:[
      'img/Producto3.1.jpg',
      'img/Producto3.2.jpg',
      'img/Producto3.3.jpg',
      'img/Producto3.4.jpg'
    ],
    colorHex: '#2d1126',
    description: 'Conjunto completo legging + top coordinado con estampado galaxy exclusivo de G-FIT. Tecnología anti-transparencia y compresión progresiva para máximo rendimiento y estilo.',
    specs: {
      'Incluye': 'Legging + Top',
      'Compresión legging': 'Alta',
      'Soporte top': 'Medio',
      'Tecnología': 'Sculpt + Quick-Dry',
      'Uso ideal': 'Gym, Yoga, Crossfit'
    },
    care: ['Lavar a máquina fría', 'Colores por separado', 'No usar blanqueador', 'Secar a la sombra'],
    sampleReviews: [
      { name: 'Isabella T.', rating: 5, date: '5 junio 2025', comment: 'El conjunto es espectacular. La tela es de muy buena calidad y el diseño es único.' },
      { name: 'Daniela F.', rating: 4, date: '28 mayo 2025', comment: 'Me encantó el estampado. El set queda muy bien junto.' }
    ]
  },
  {
    id: 4,
    name: 'Short Running Aerolite Pro',
    category: 'shorts',
    price: 55000,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 95,
    stock: 20,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL','XXL'],
    color: 'Negro',
    material: '88% Poliéster, 12% Elastano',
    images:[
      'img/Producto4.1.jpg',
      'img/Producto4.2.jpg',
      'img/Producto4.3.jpg',
      'img/Producto4.4.jpg'
    ],
    colorHex: '#1a1a1a',
    description: 'Short ultraliviano para running y cardio intenso. Diseño con capa interior anti-rozamiento y bolsillo trasero con cremallera para tus esenciales.',
    specs: {
      'Largo': 'Mini (6cm sobre rodilla)',
      'Forro interior': 'Sí, anti-rozamiento',
      'Bolsillos': '1 trasero con cremallera',
      'Cintura': 'Elástico + cordón',
      'Tecnología': 'Ventilation, Quick-Dry',
      'Uso ideal': 'Running, Cardio, HIIT'
    },
    care: ['Lavar a máquina fría', 'No planchar sobre logotipos', 'Secar al aire'],
    sampleReviews: [
      { name: 'Mariana L.', rating: 5, date: '10 junio 2025', comment: 'Perfecto para correr. Muy liviano, no genera calor y el forro interior es genial.' }
    ]
  },
  {
    id: 5,
    name: 'Chaqueta Deportiva SculptFit Serenity',
    category: 'chaquetas',
    price: 125000,
    originalPrice: 165000,
    discount: 24,
    rating: 4.5,
    reviews: 67,
    stock: 6,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Verde Salvia / Blanco / Rosado / Negro',
    material: '100% Nylon repelente al agua',
    images:[
      'img/Producto5.1.jpg',
      'img/Producto5.2.jpg',
      'img/Producto5.3.jpg',
      'img/Producto5.4.jpg'
    ],
    colorHex: '#0d0d0d',
    description: 'Chaqueta deportiva premium de ajuste ergonómico diseñada para realzar la silueta y brindar máxima comodidad durante cada entrenamiento. Su tejido suave y elástico ofrece libertad de movimiento, mientras que el cierre frontal completo y las mangas con orificio para pulgar proporcionan un ajuste seguro y sofisticado. Ideal para gimnasio, running, yoga o para complementar un look deportivo casual.',
    specs: {
      'Tipo': 'Chaqueta deportiva de ajuste Slim Fit',
      'Cierre': 'Cremallera frontal completa',
      'Cuello': 'Alto tipo mandarín',
      'Tecnología': 'Quick-Dry + Stretch Fit',
      'Elasticidad': 'Alta, con libertad de movimiento',
      'Uso ideal': 'Gym, Running, Yoga, Pilates y uso casual deportivo'
    },
    care: ['Lavar a máquina fría delicada', 'No usar blanqueador', 'No secar en secadora', 'Colgar para secar'],
    sampleReviews: [
      { name: 'Juliana M.', rating: 5, date: '2 junio 2025', comment: 'Perfecta para correr en las mañanas. Los detalles dorados son hermosos.' }
    ]
  },
  {
    id: 6,
    name: 'Sudadera Oversize Velvet Touch',
    category: 'sudaderas',
    price: 98000,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 156,
    stock: 18,
    isNew: true,
    isBestSeller: true,
    isFeatured: false,
    sizes: ['S','M','L','XL','XXL'],
    color: 'Negro',
    material: '60% Algodón, 35% Poliéster, 5% Elastano',
    images:[
      'img/Producto6.1.jpg',
      'img/Producto6.2.jpg',
      'img/Producto6.3.jpg',
      'img/Producto6.4.jpg'
    ],
    colorHex: '#3d3d3d',
    description: 'Sudadera oversize confeccionada con tejido suave de acabado aterciopelado (velvet touch), diseñada para brindar una sensación de calidez y comodidad superior. Su corte holgado y capucha integrada ofrecen un estilo relajado y moderno, perfecto para complementar tus outfits deportivos o casuales. Ideal para días frescos, entrenamientos ligeros o para disfrutar de un look cómodo con un toque sofisticado.',
    specs: {
      'Silueta': 'Oversize',
      'Manga': 'Largas de corte holgado',
      'Bolsillos': 'Dos bolsillos laterales tipo canguro',
      'Capucha': 'Integrada con ajuste relajado',
      'Acabado': 'Velvet Touch',
      'Uso ideal': 'Casual, Post-entreno, Loungewear'
    },
    care: ['Lavar a máquina fría', 'Lavado del revés', 'No usar secadora a alta temperatura', 'Planchar a temperatura baja'],
    sampleReviews: [
      { name: 'Alejandra C.', rating: 5, date: '4 junio 2025', comment: 'La tela es increíblemente suave. Es mi favorita para los días de descanso.' },
      { name: 'Natalia B.', rating: 5, date: '30 mayo 2025', comment: 'Oversize perfecta, no es ni muy grande ni muy pequeña. Los detalles rose gold son preciosos.' }
    ]
  },
  {
    id: 7,
    name: 'Legging Running Velocity X',
    category: 'running',
    price: 95000,
    originalPrice: 115000,
    discount: 17,
    rating: 4.7,
    reviews: 234,
    stock: 10,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL'],
    color: 'Gris perla',
    material: '78% Poliéster Reciclado, 22% Elastano',
    images:[
      'img/Producto7.1.jpg',
      'img/Producto7.2.jpg',
      'img/Producto7.3.jpg',
      'img/Producto7.4.jpg'
    ],
    colorHex: '#1a1a1a',
    description: 'Legging de alto rendimiento para running con paneles de malla estratégicos para ventilación. Costuras planas anti-rozamiento.',
    specs: {
      'Compresión': 'Progresiva (tobillo a rodilla)',
      'Bolsillo cintura': 'Para smartphone hasta 6.5"',
      'Malla': 'Paneles laterales de ventilación',
      'Costuras': 'Planas anti-rozamiento',
      'Uso ideal': 'Running, Trail, Maratón'
    },
    care: ['Lavar a máquina fría', 'No usar suavizante (reduce elasticidad)', 'Secar al aire'],
    sampleReviews: [
      { name: 'Claudia H.', rating: 5, date: '7 junio 2025', comment: 'Ideales para correr. Los paneles de ventilación hacen la diferencia en carreras largas.' }
    ]
  },
  {
    id: 8,
    name: 'Top Yoga Serenity Bralette',
    category: 'tops',
    price: 52000,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 387,
    stock: 22,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Salmón vibrante',
    material: '85% Nylon, 15% Elastano',
    images:[
      'img/Producto8.1.jpg',
      'img/Producto8.2.jpg',
      'img/Producto8.3.jpg',
      'img/Producto8.4.jpg'
    ],
    colorHex: '#C9956C',
    description: 'Top deportivo tipo bralette sin costuras (seamless) con cuello en V. Cuenta con paneles de ventilación geométrica troquelados bajo el busto y en la espalda para maximizar el flujo de aire y evitar rozaduras.',
    specs: {
      'Soporte': 'Ligero a medio, con banda elástica ancha en la base.',
      'Diseño': 'Tejido elástico continuo sin costuras (Seamless).',
      'Relleno': 'Sin relleno',
      'Cierre': 'Sin cierre',
      'Ventilación': 'Perforaciones triangulares integradas en espalda y bajo el busto.',
      'Uso ideal': 'Yoga, Pilates, Barre, Meditación'
    },
    care: ['Lavar a mano preferible', 'Máquina en bolsa de malla, ciclo delicado', 'No usar secadora', 'Tender horizontal'],
    sampleReviews: [
      { name: 'Paula G.', rating: 5, date: '9 junio 2025', comment: 'Perfecto para yoga. La tela se siente como una segunda piel, increíblemente cómodo.' },
      { name: 'Camila R.', rating: 5, date: '5 junio 2025', comment: 'El más cómodo que he tenido. Lo uso incluso para dormir jaja.' }
    ]
  },
  {
    id: 9,
    name: 'Conjunto Gym Power',
    category: 'gym',
    price: 135000,
    originalPrice: 175000,
    discount: 23,
    rating: 4.6,
    reviews: 142,
    stock: 9,
    isNew: false,
    isBestSeller: false,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL','XXL'],
    color: 'Verde oliva',
    material: '70% Nylon, 25% Poliéster, 5% Elastano',
    images:[
      'img/Producto9.1.jpg',
      'img/Producto9.2.jpg',
      'img/Producto9.3.jpg',
      'img/Producto9.4.jpg'
    ],
    colorHex: '#0d0d0d',
    description: 'Conjunto deportivo de dos piezas en tejido acanalado (ribbed) sin costuras. Incluye un top de cuello cuadrado con tirantes anchos y leggings de tiro alto con pretina de compresión para moldear la figura.',
    specs: {
      'Incluye': 'Legging + Top de tirantes',
      'Corte del Legging': 'Cintura de tiro alto con pretina ancha para control de abdomen.',
      'Corte del Top': 'Escote cuadrado con banda elástica reforzada bajo el busto.',
      'Compresión': 'Alta',
      'Tecnología': 'Ultra Dry-Fit',
      'Uso ideal': 'Gym, Crossfit, Levantamiento'
    },
    care: ['Lavar a máquina fría', 'Sin suavizante', 'No planchar sobre logos', 'Secar al aire'],
    sampleReviews: [
      { name: 'Marcela Q.', rating: 5, date: '3 junio 2025', comment: 'Para el gym es perfecto. La compresión es la ideal y no se transparenta en las sentadillas.' }
    ]
  },
  {
    id: 10,
    name: 'Legging Tie-Dye Bloom',
    category: 'leggings',
    price: 79000,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 78,
    stock: 14,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Gris azulado con negro (efecto tie-dye/veteado)',
    material: '75% Poliéster, 20% Nylon, 5% Elastano',
    images:[
      'img/Producto10.1.jpg',
      'img/Producto10.2.jpg',
      'img/Producto10.3.jpg',
      'img/Producto10.4.jpg'
    ],
    colorHex: '#d4a0c0',
    description: 'Legging deportivo largo con estampado de efecto desteñido (tie-dye) abstracto. Cuenta con un corte de tiro alto, pretina ancha de compresión y costuras planas reforzadas para un ajuste seguro durante el entrenamiento',
    specs: {
      'Estampado': 'Patrón tie-dye con manchas orgánicas oscuras',
      'Cintura': 'Cintura alta con pretina elástica',
      'Compresión': 'Moderada',
      'Edición': 'Limitada',
      'Bolsillos': 'No',
      'Uso ideal': 'Yoga, Pilates, Casual'
    },
    care: ['Lavar a mano fría', 'Colores pueden desprender levemente en primeras lavadas', 'Secar a la sombra'],
    sampleReviews: [
      { name: 'Fernanda O.', rating: 5, date: '6 junio 2025', comment: 'Los colores son preciosos, únicos. Me preguntan dónde los compré en cada clase de yoga.' }
    ]
  },
  {
    id: 11,
    name: 'Top Crossback Energy Plus',
    category: 'tops',
    price: 58000,
    originalPrice: 72000,
    discount: 19,
    rating: 4.7,
    reviews: 203,
    stock: 16,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Azul grafito',
    material: '82% Poliamida, 18% Elastano',
    images:[
      'img/Producto11.1.jpg',
      'img/Producto11.2.jpg',
      'img/Producto11.3.jpg',
      'img/Producto11.4.jpg'
    ],
    colorHex: '#1a0a14',
    description: 'Top deportivo de soporte ligero con cuello en V y tirantes delgados regulables. Destaca por su diseño de espalda cruzada en "X" con una abertura inferior estilizada, y una banda elástica inferior contramarcada que asegura un ajuste firme y cómodo.',
    specs: {
      'Soporte': 'Medio-Alto',
      'Diseño espalda': 'Tirantes que se cruzan en la espalda formando una "X" con apertura geométrica baja.',
      'Relleno': 'Removible',
      'Ajuste': 'Tiras ajustables',
      'Tecnología': 'Breathable Mesh Panel',
      'Uso ideal': 'HIIT, Spinning, Cardio'
    },
    care: ['Lavar a máquina fría', 'Ciclo delicado', 'No secar en secadora', 'Tender al aire'],
    sampleReviews: [
      { name: 'Diana P.', rating: 5, date: '1 junio 2025', comment: 'Me encanta la espalda cruzada. Muy cómodo y sexy para el gym.' }
    ]
  },
  {
    id: 12,
    name: 'Short Ciclismo ComfyRide',
    category: 'shorts',
    price: 69000,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 118,
    stock: 13,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL','XXL'],
    colores: 'variados',
    material: '80% Nylon, 20% Elastano',
    images:[
      'img/Producto12.1.jpg',
      'img/Producto12.2.jpg',
      'img/Producto12.3.jpg',
      'img/Producto12.4.jpg'
    ],
    colorHex: '#1a1a1a',
    description: 'Short corto tipo biker o de ciclismo confeccionado en licra de alta elasticidad con un sutil acabado brillante. Diseñado con pretina alta y lisa que se ajusta cómodamente al abdomen sin cortar la silueta, ideal tanto para entrenamientos deportivos como para un look casual diario.',
    specs: {
      'Largo': '3/4 (hasta rodilla)',
      'Acolchado': '3D interior, removible',
      'Cintura': 'Alta con elástico ancho',
      'Costuras': 'Planas',
      'Bolsillos': '2 laterales',
      'Uso ideal': 'Ciclismo, Running, Cardio'
    },
    care: ['Lavar a máquina fría', 'Sin suavizante', 'Secar al aire libre', 'No planchar el acolchado'],
    sampleReviews: [
      { name: 'Patricia L.', rating: 5, date: '8 junio 2025', comment: 'Perfectos para spinning. El acolchado hace toda la diferencia en clases largas.' }
    ]
  },
  {
    id: 13,
    name: 'Conjunto Running Storm Set',
    category: 'running',
    price: 159000,
    originalPrice: 210000,
    discount: 24,
    rating: 4.6,
    reviews: 89,
    stock: 5,
    isNew: false,
    isBestSeller: false,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL'],
    color: 'Negro',
    material: '76% Poliéster reciclado, 24% Elastano',
    images:[
      'img/Producto13.1.jpg',
      'img/Producto13.2.jpg',
      'img/Producto13.3.jpg',
      'img/Producto13.4.jpg'
    ],
    colorHex: '#1a2040',
    description: 'Conjunto deportivo de dos piezas diseñado para correr a alto rendimiento. Incluye una camiseta técnica de cuello redondo y manga corta ajustada al cuerpo, junto con un short fluido de running que cuenta con aberturas laterales pronunciadas para garantizar una zancada completamente libre y sin restricciones.',
    specs: {
      'Incluye': 'Legging + Camiseta técnica de manga corta',
      'Tecnología': 'Storm Shield, Reflective',
      'Resistencia': 'Viento y lluvia ligera',
      'Bolsillos': '3 (2 legging + 1 top)',
      'Costuras': 'Selladas',
      'Uso ideal': 'Running outdoor, Trail'
    },
    care: ['Lavar a máquina fría', 'No usar blanqueador', 'No secar en secadora', 'Colgar para secar'],
    sampleReviews: [
      { name: 'Renata V.', rating: 5, date: '4 junio 2025', comment: 'Perfecto para correr en días de lluvia. No se moja y los reflectivos son excelentes.' }
    ]
  },
  {
    id: 14,
    name: 'Legging Seamless Nude Feel',
    category: 'leggings',
    price: 85000,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 445,
    stock: 25,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL','XXL'],
    color: 'Beige claro',
    material: '92% Nylon, 8% Elastano',
    images:[
      'img/Producto14.1.jpg',
      'img/Producto14.2.jpg',
      'img/Producto14.3.jpg',
      'img/Producto14.4.jpg'
    ],
    colorHex: '#C9956C',
    description: 'Legging moldeador de tiro ultra alto y compresión localizada. Su tejido continuo sin costuras (seamless) simula un efecto de segunda piel, combinando paneles elásticos estructurados bajo los glúteos para realce (push-up) y una banda ancha abdominal para un control firme de la zona media.',
    specs: {
      'Costuras': 'Sin costuras (seamless)',
      'Opacidad': '100% opaca',
      'Compresión': 'Progresiva suave',
      'Cintura': 'Alta, doble capa',
      'Tacto': 'Efecto segunda piel',
      'Uso ideal': 'Todo tipo de ejercicio, Casual'
    },
    care: ['Lavar a máquina fría', 'Ciclo delicado', 'Sin suavizante', 'Secar horizontal al aire'],
    sampleReviews: [
      { name: 'Sara M.', rating: 5, date: '10 junio 2025', comment: 'Son perfectos. Llevo 6 meses usándolos casi a diario y siguen iguales. Los mejores de G-FIT.' },
      { name: 'Lucía F.', rating: 5, date: '8 junio 2025', comment: 'La compresión es ideal, no aprieta en exceso pero moldea perfecto. 100% recomendados.' }
    ]
  },
  {
    id: 15,
    name: 'Chaqueta Térmica FlexWarm',
    category: 'chaquetas',
    price: 138000,
    originalPrice: 180000,
    discount: 23,
    rating: 4.7,
    reviews: 54,
    stock: 7,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Beige / Hueso',
    material: 'Exterior: 100% Poliéster. Interior: Micro-fleece térmico',
    images:[
      'img/Producto15.1.jpg',
      'img/Producto15.2.jpg',
      'img/Producto15.3.jpg',
      'img/Producto15.4.jpg'
    ],
    colorHex: '#2a2a2a',
    description: 'Chaqueta térmica de vellón (fleece) con diseño bicolor combinando paneles reforzados en hombros y pecho. Cuenta con cremallera frontal completa, bolsillos laterales con cierre, un bolsillo vertical en el pecho y puños elásticos con abertura para el pulgar, ideal para actividades al aire libre o climas fríos.',
    specs: {
      'Tipo': 'Tela de vellón suave (fleece) de alta retención térmica',
      'Cremallera': 'Cremallera frontal completa con cuello alto para protección térmica del cuello.',
      'Bolsillos': '3 en total con cremalleras de seguridad (2 laterales y 1 vertical en el pecho).',
      'Puños': 'Ajustados en tela elástica con pasador para el dedo pulgar (thumbholes).',
      'Temperatura ideal': '8-18°C',
      'Uso ideal': 'Running en frío, Montañismo, Gym en invierno'
    },
    care: ['Lavar a máquina fría', 'Ciclo suave', 'No usar blanqueador', 'No secar en secadora a alta temperatura'],
    sampleReviews: [
      { name: 'Gloria T.', rating: 5, date: '30 mayo 2025', comment: 'Ideal para correr en las mañanas frías. Abriga sin generar exceso de calor.' }
    ]
  },
  {
    id: 16,
    name: 'Top Gym Tank Rib Edition',
    category: 'gym',
    price: 45000,
    originalPrice: 58000,
    discount: 22,
    rating: 4.6,
    reviews: 167,
    stock: 19,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL','XXL'],
    color: 'Negro',
    material: '95% Algodón Pima, 5% Elastano',
    images:[
      'img/Producto16.1.jpg',
      'img/Producto16.2.jpg',
      'img/Producto16.3.jpg',
      'img/Producto16.4.jpg'
    ],
    colorHex: '#4a3040',
    description: 'Camiseta esqueleto (tank top) deportiva en tejido acanalado (ribbed). Presenta un diseño de cuello redondo alto y corte tipo halter en los hombros, ofreciendo una silueta ceñida y cómoda ideal para entrenamientos de gimnasio o uso casual.',
    specs: {
      'Tipo': 'Camiseta sin mangas crop',
      'Textura': 'Tela elástica (rib texturizado).',
      'Ajuste': 'Slightly oversized',
      'Material': 'Algodón Pima premium',
      'Uso ideal': 'Gym, Casual, Loungewear'
    },
    care: ['Lavar a máquina 30°C', 'Lavado del revés', 'No usar blanqueador', 'Tender a la sombra'],
    sampleReviews: [
      { name: 'María J.', rating: 5, date: '5 junio 2025', comment: 'El algodón pima es tan suave que no quiero quitármelo. Perfecto para el gym y para estar en casa.' }
    ]
  },
  {
    id: 17,
    name: 'Mochila Deportiva Urban Fit',
    category: 'accesorios',
    price: 89000,
    originalPrice: 110000,
    discount: 19,
    rating: 4.5,
    reviews: 43,
    stock: 11,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['Talla Única'],
    color: 'Negro / Blanco',
    material: 'Nylon 600D resistente al agua',
    images:[
      'img/Producto17.1.jpg',
      'img/Producto17.2.jpg',
      'img/Producto17.3.jpg',
      'img/Producto17.4.jpg'
    ],
    colorHex: '#1a1a1a',
    description: 'Mochila deportiva multifuncional tipo tula con cierre de cordón ajustable. Cuenta con una estructura inteligente que incluye un compartimento inferior independiente con cremallera doble (ideal para tenis o ropa húmeda), bolsillos laterales de malla para botellas y bolsillos exteriores de acceso rápido con cierres de seguridad.',
    specs: {
      'Capacidad': '22 litros',
      'Compartimento zapatos': 'Sí, separado y ventilado',
      'Bolsillo botella': 'Lateral, 2 unidades',
      'Laptop': 'Compartimento para 15"',
      'Material': 'Nylon 600D, resistente al agua',
      'Uso ideal': 'Gym, Trabajo, Viajes cortos'
    },
    care: ['Limpiar con paño húmedo', 'No sumergir', 'Dejar abierta para airear después de uso'],
    sampleReviews: [
      { name: 'Tatiana C.', rating: 5, date: '2 junio 2025', comment: 'Perfecta para ir al gym. El compartimento de zapatos es una maravilla.' }
    ]
  },
  {
    id: 18,
    name: 'Legging Flare Boho Sport',
    category: 'leggings',
    price: 72000,
    originalPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 61,
    stock: 8,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Negro',
    material: '68% Poliéster, 26% Viscosa, 6% Elastano',
    images:[
      'img/Producto18.1.jpg',
      'img/Producto18.2.jpg',
      'img/Producto18.3.jpg',
      'img/Producto18.4.jpg'
    ],
    colorHex: '#8B6548',
    description: 'Legging deportivo con corte de bota acampanada (flare). Destaca por su pretina alta de diseño cruzado en "V" con un sutil fruncido frontal que estiliza y moldea la zona del abdomen, ofreciendo un estilo moderno que transiciona fácilmente del entrenamiento al uso casual.',
    specs: {
      'Silueta': 'Flare / Acampanado',
      'Cintura': 'Alta con detalle plisado',
      'Actividad': 'Bajo impacto',
      'Largo': 'Full length',
      'Estilo': 'Boho-Sport',
      'Uso ideal': 'Yoga, Pilates, Casual'
    },
    care: ['Lavar a mano fría', 'No retorcer', 'Tender horizontal', 'Planchar a baja temperatura'],
    sampleReviews: [
      { name: 'Viviana E.', rating: 5, date: '7 junio 2025', comment: 'Son hermosas. El estilo flare es elegante y diferente. Ideales para yoga.' }
    ]
  },
  {
    id: 19,
    name: 'Sudadera Crop Zen Mode',
    category: 'sudaderas',
    price: 75000,
    originalPrice: 95000,
    discount: 21,
    rating: 4.8,
    reviews: 198,
    stock: 21,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    sizes: ['XS','S','M','L','XL'],
    color: 'Negro',
    material: '58% Algodón, 38% Poliéster, 4% Elastano',
    images:[
      'img/Producto19.1.jpg',
      'img/Producto19.2.jpg',
      'img/Producto19.3.jpg',
      'img/Producto19.4.jpg'
    ],
    colorHex: '#9B6DB5',
    description: 'Sudadera corta estilo crop top con capota y cordones de ajuste planos. Presenta mangas largas con puños acanalados y un corte holgado de hombros caídos (drop shoulder), ideal para un estilo deportivo cómodo y casual.',
    specs: {
      'Tipo': 'Crop con capucha',
      'Mangas': 'Largas con hombros caídos y terminación en puños elásticos acanalados.',
      'Bolsillos': 'Canguro frontal',
      'Largo': 'Crop (sobre cintura)',
      'Estilo': 'Minimalista premium',
      'Uso ideal': 'Post-entreno, Casual, Casa'
    },
    care: ['Lavar a máquina 30°C', 'Lavado del revés', 'Secar a la sombra', 'Planchar con paño húmedo sobre bordado'],
    sampleReviews: [
      { name: 'Adriana M.', rating: 5, date: '6 junio 2025', comment: 'La sudadera más bonita que he tenido. El bordado de lavanda es elegante y el algodón es suavísimo.' },
      { name: 'Catalina R.', rating: 5, date: '4 junio 2025', comment: 'Me la pongo después del gym y también para salir. Muy versátil y cómoda.' }
    ]
  },
  {
    id: 20,
    name: 'Conjunto Elite Duo Metallic',
    category: 'conjuntos',
    price: 185000,
    originalPrice: 245000,
    discount: 24,
    rating: 4.9,
    reviews: 312,
    stock: 4,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    sizes: ['XS','S','M','L','XL'],
    color: 'Azul turquesa metalizado',
    material: '68% Nylon, 28% Poliéster, 4% Elastano + Hilo metalizado',
    images:[
      'img/Producto20.1.jpg',
      'img/Producto20.2.jpg',
      'img/Producto20.3.jpg',
      'img/Producto20.4.jpg'
    ],
    colorHex: '#1a0a14',
    description: 'Conjunto deportivo de dos piezas confeccionado en tela de alta compresión con un acabado metalizado de brillo intenso. Incluye un top con espalda de diseño atlético recortado y leggings de tiro alto con pretina ancha que moldea y realza la silueta. La prenda más exclusiva de G-FIT.',
    specs: {
      'Incluye': '2 (Top deportivo + Legging largo).',
      'Detalle': 'Textura lisa con revestimiento metalizado brillante (glossy effect).',
      'Soporte': 'Escote redondo con tirantes anchos',
      'Cintura legging': 'Muy alta (28 cm)',
      'Compresión': 'Sculpt máximo',
      'Edición': 'Especial premium'
    },
    care: ['Lavar a mano SOLO', 'Agua fría, jabón neutro', 'No retorcer, presionar suavemente', 'Tender horizontal a la sombra', 'No planchar sobre detalles metalizados'],
    sampleReviews: [
      { name: 'Isabella C.', rating: 5, date: '9 junio 2025', comment: 'Son espectaculares. Los detalles metalizados son únicos. Vale cada peso y más.' },
      { name: 'Alejandra V.', rating: 5, date: '7 junio 2025', comment: 'El conjunto más lindo que he visto. La calidad es impresionante, de verdad premium.' },
      { name: 'Lorena Q.', rating: 5, date: '5 junio 2025', comment: 'Me lo regalé para mi cumpleaños y fue el mejor regalo. Absolutamente hermoso.' }
    ]
  }
];

/* ============================================================
   STATE
============================================================ */
let currentPage = 1;
const PRODUCTS_PER_PAGE = 8;
let filteredProducts = [...PRODUCTS];
let activeCategory = 'all';
let activeSection = 'featured';

/* ============================================================
   HELPER: Format currency COP
============================================================ */
function formatPrice(amount) {
  return '$' + amount.toLocaleString('es-CO');
}

/* ============================================================
   HELPER: Render star rating
============================================================ */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += '★';
    else if (i === full && half) stars += '½';
    else stars += '☆';
  }
  return stars;
}

/* ============================================================
   HELPER: Generate gradient placeholder SVG
============================================================ */
function generatePlaceholder(product){

    if(product.images && product.images.length > 0){
        return product.images[0];
    }

    return 'img/no-image.jpg';

}

/* ============================================================
   FILTER PRODUCTS by category
============================================================ */
function filterByCategory(category) {
  activeCategory = category;
  currentPage = 1;

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.category === category);
  });

  applyFilters();
  scrollToProducts();
}

/* ============================================================
   SET SECTION TAB
============================================================ */
function setSectionTab(btn, section) {
  activeSection = section;
  document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentPage = 1;
  applyFilters();
}

/* ============================================================
   SHOW BEST SELLERS
============================================================ */
function showBestSellers() {
  const tab = document.querySelector('[data-section="bestsellers"]');
  if (tab) setSectionTab(tab, 'bestsellers');
  scrollToProducts();
}

/* ============================================================
   APPLY ALL FILTERS
============================================================ */
function applyFilters() {
  let results = [...PRODUCTS];

  // Category filter
  if (activeCategory !== 'all') {
    if (activeCategory === 'nuevos') {
      results = results.filter(p => p.isNew);
    } else if (activeCategory === 'ofertas') {
      results = results.filter(p => p.discount > 0);
    } else {
      results = results.filter(p => p.category === activeCategory);
    }
  }

  // Section filter
  if (activeSection === 'bestsellers') results = results.filter(p => p.isBestSeller);
  if (activeSection === 'new') results = results.filter(p => p.isNew);
  if (activeSection === 'offers') results = results.filter(p => p.discount > 0);
  if (activeSection === 'featured') results = results.filter(p => p.isFeatured || true); // show all but prioritize featured

  // Price filter
  const minPrice = parseFloat(document.getElementById('priceMin')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('priceMax')?.value) || Infinity;
  if (minPrice > 0 || maxPrice < Infinity) {
    results = results.filter(p => p.price >= minPrice && p.price <= maxPrice);
  }

  // Size filter
  const selectedSizes = Array.from(document.querySelectorAll('.size-checkbox:checked')).map(cb => cb.value);
  if (selectedSizes.length > 0) {
    results = results.filter(p => selectedSizes.some(s => p.sizes.includes(s)));
  }

  // Rating filter
  const ratingFilter = parseFloat(document.querySelector('input[name="ratingFilter"]:checked')?.value || 0);
  if (ratingFilter > 0) results = results.filter(p => p.rating >= ratingFilter);

  // Only discounts
  if (document.getElementById('onlyDiscounts')?.checked) {
    results = results.filter(p => p.discount > 0);
  }

  // Only available
  if (document.getElementById('onlyAvailable')?.checked) {
    results = results.filter(p => p.stock > 0);
  }

  // Sort
  const sortValue = document.getElementById('sortSelect')?.value || 'default';
  if (sortValue === 'price-asc') results.sort((a, b) => a.price - b.price);
  else if (sortValue === 'price-desc') results.sort((a, b) => b.price - a.price);
  else if (sortValue === 'rating') results.sort((a, b) => b.rating - a.rating);
  else if (sortValue === 'discount') results.sort((a, b) => b.discount - a.discount);
  else {
    // Default: featured first
    results.sort((a, b) => {
      if (a.isBestSeller && !b.isBestSeller) return -1;
      if (!a.isBestSeller && b.isBestSeller) return 1;
      if (a.isFeatured && !b.isFeatured) return -1;
      return b.reviews - a.reviews;
    });
  }

  filteredProducts = results;
  renderProducts();
}

/* ============================================================
   APPLY PRICE FILTER button
============================================================ */
function applyPriceFilter() {
  applyFilters();
}
/* ============================================================
   TOAST NOTIFICATIONS
============================================================ */
function showToast(message, type = 'success') {

  const container = document.getElementById('toastContainer');

  if (!container) return;

  const toast = document.createElement('div');

  toast.className = `toast ${type}`;

  toast.textContent = message;

  container.appendChild(toast);

  // Mostrar
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Eliminar después de 3 segundos
  setTimeout(() => {

    toast.classList.remove('show');

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 3000);

}
/* ============================================================
   CLEAR ALL FILTERS
============================================================ */
function clearFilters() {
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  document.querySelectorAll('.size-checkbox').forEach(cb => cb.checked = false);
  document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;
  document.getElementById('onlyDiscounts').checked = false;
  document.getElementById('onlyAvailable').checked = true;
  document.getElementById('sortSelect').value = 'default';
  activeCategory = 'all';
  activeSection = 'featured';
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('[data-category="all"]')?.classList.add('active');
  document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-section="featured"]')?.classList.add('active');
  filteredProducts = [...PRODUCTS];
  currentPage = 1;
  renderProducts();
  showToast('Filtros eliminados', 'info');
}

/* ============================================================
   RENDER PRODUCTS
============================================================ */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);

  // Update count
  if (countEl) countEl.textContent = `${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''}`;

  // Render
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>Sin resultados</h3>
        <p>Intenta con otros filtros o categorías.</p>
      </div>`;
  } else {
    grid.innerHTML = pageProducts.map(product => renderProductCard(product)).join('');
    // Add event listeners for fav buttons
    grid.querySelectorAll('.product-fav-btn').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      if (getFavorites().includes(id)) btn.classList.add('active');
    });
  }

  renderPagination(totalPages);
}

/* ============================================================
   RENDER PRODUCT CARD
============================================================ */
function renderProductCard(product) {
  const imgSrc = generatePlaceholder(product);
  const discountBadge = product.discount > 0
    ? `<span class="product-discount-badge">-${product.discount}%</span>`
    : product.isNew ? `<span class="product-new-badge">Nuevo</span>` : '';

  const priceOrig = product.originalPrice
    ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>`
    : '';

  return `
    <article class="product-card" role="listitem" onclick="openProductDetail(${product.id})" aria-label="${product.name}">
      <div class="product-img-wrap">
        <div class="product-img-wrap">
          <img
          class="product-img"
          src="${imgSrc}"
          alt="${product.name}">
        </div>
        ${discountBadge}
        <button
          class="product-fav-btn"
          data-id="${product.id}"
          aria-label="Agregar a favoritos: ${product.name}"
          onclick="event.stopPropagation(); toggleFavorite(${product.id}, this)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <div class="product-quick-actions" aria-hidden="true">
          <button class="quick-add-btn secondary-action" onclick="event.stopPropagation(); quickAddToCart(${product.id})">🛒 Carrito</button>
          <button class="quick-add-btn primary-action" onclick="event.stopPropagation(); openProductDetail(${product.id})">Ver</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category-label">${getCategoryLabel(product.category)}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating" aria-label="${product.rating} estrellas, ${product.reviews} reseñas">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price-area">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${priceOrig}
        </div>
      </div>
    </article>`;
}

/* ============================================================
   GET CATEGORY LABEL
============================================================ */
function getCategoryLabel(cat) {
  const labels = {
    leggings: 'Leggings',
    tops: 'Tops',
    conjuntos: 'Conjuntos',
    shorts: 'Shorts',
    chaquetas: 'Chaquetas',
    sudaderas: 'Sudaderas',
    running: 'Running',
    gym: 'Gym',
    accesorios: 'Accesorios'
  };
  return labels[cat] || cat;
}

/* ============================================================
   RENDER PAGINATION
============================================================ */
function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');
  if (!pag || totalPages <= 1) {
    if (pag) pag.innerHTML = '';
    return;
  }

  let html = `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})" aria-label="Página ${i}" aria-current="${i === currentPage ? 'page' : ''}">${i}</button>`;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<span class="page-btn" style="pointer-events:none; opacity:0.4;">…</span>`;
    }
  }

  html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Página siguiente">›</button>`;

  pag.innerHTML = html;
}

/* ============================================================
   CHANGE PAGE
============================================================ */
function changePage(page) {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts();
  scrollToProducts(false);
}

/* ============================================================
   OPEN PRODUCT DETAIL
============================================================ */
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  currentProduct = product;
  if (!product) return;

  // Reiniciar valores del detalle
  selectedSize = null;
  currentDetailQty = 1;

  const overlay = document.getElementById('productDetailOverlay');
  const container = document.getElementById('productDetailContainer');

  container.innerHTML = renderProductDetail(product);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  selectedSize = null;
  currentDetailQty = 1;

initDetailTabs();
initReviewStars();
updateDetailQty(1);
updateDetailCartButton(productId);

  document.getElementById("detailQty").textContent = currentDetailQty;
}
/* ============================================================
   RENDER PRODUCT DETAIL
============================================================ */
function renderProductDetail(product) {
  const imgs = product.images && product.images.length > 0
  ? product.images
  : [generatePlaceholder(product)]; // Repeated for demo

  const thumbsHTML = imgs.map((src, i) => `
<div class="gallery-thumb ${i === 0 ? 'active' : ''}"
    onclick="switchMainImg(this, '${src}')"
    aria-label="Imagen ${i + 1}">
    <img src="${src}" alt="${product.name}">
    
</div>`).join('');

  const sizesHTML = product.sizes.map(size =>
  `<button class="size-option"
          data-size="${size}"
          onclick="selectSize(this)">
      ${size}
    </button>`
).join('');

  const specsHTML = Object.entries(product.specs).map(([key, val]) =>
    `<tr><th scope="row">${key}</th><td>${val}</td></tr>`
  ).join('');

  const careHTML = product.care.map(c => `<li>• ${c}</li>`).join('');

  const reviewsHTML = product.sampleReviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
        <span class="review-date">${r.date}</span>
      </div>
      <p class="review-text">${r.comment}</p>
    </div>`).join('');

  const priceHTML = product.originalPrice
    ? `<span class="detail-price-current">${formatPrice(product.price)}</span>
       <span class="detail-price-original">${formatPrice(product.originalPrice)}</span>
       <div class="detail-discount-badge">🔥 ${product.discount}% OFF — Ahorras ${formatPrice(product.originalPrice - product.price)}</div>`
    : `<span class="detail-price-current">${formatPrice(product.price)}</span>`;

  const stockStatus = product.stock > 5
    ? `<span class="detail-availability in-stock"><span class="availability-dot"></span> En stock (${product.stock} disponibles)</span>`
    : product.stock > 0
    ? `<span class="detail-availability in-stock"><span class="availability-dot"></span> ¡Últimas ${product.stock} unidades!</span>`
    : `<span class="detail-availability out-of-stock"><span class="availability-dot"></span> Agotado</span>`;

  return `
    <div class="detail-layout">
      <!-- Gallery -->
      <div class="detail-gallery">
        <div class="gallery-main-img" id="galleryMainImg" aria-label="Imagen principal del producto">
        <img
        src="${imgs[0]}"
        alt="${product.name}"
        id="mainProductImage"
        class="main-product-image">
        </div>
        <div class="gallery-thumbs" role="list" aria-label="Galería de imágenes">${thumbsHTML}</div>
      </div>

      <!-- Info -->
      <div class="detail-info">
        <div class="detail-breadcrumb">
          <span>Inicio</span> / <span>${getCategoryLabel(product.category)}</span> / <span>${product.name}</span>
        </div>

        <h1 class="detail-name">${product.name}</h1>

        <div class="detail-rating-row">
          <span class="detail-stars">${renderStars(product.rating)}</span>
          <span style="font-size:0.9rem; font-weight:600;">${product.rating}</span>
          <span class="detail-review-count" onclick="scrollToReviews()">${product.sampleReviews.length} reseñas</span>
        </div>

        ${stockStatus}

        <div class="detail-price-area">${priceHTML}</div>

        <!-- Size selector -->
        <label class="size-label" for="sizeSelector">Selecciona tu talla:</label>
        <div class="size-grid" id="sizeSelector" role="group" aria-label="Tallas disponibles">${sizesHTML}</div>

        <!-- Size chart link -->
        <button style="font-size:0.78rem;color:var(--color-lavender);text-decoration:underline;margin-bottom:var(--space-lg);display:block;" onclick="showTab('sizetab')">📏 Ver tabla de tallas</button>

        <!-- Quantity -->
        <div class="qty-selector" aria-label="Cantidad">
          <button class="qty-btn" onclick="changeDetailQty(-1)" aria-label="Reducir cantidad">−</button>
          <span class="qty-display" id="detailQty" aria-live="polite">1</span>
          <button class="qty-btn" onclick="changeDetailQty(1)" aria-label="Aumentar cantidad">+</button>
          <span style="font-size:0.78rem;color:var(--color-text-muted);margin-left:var(--space-sm);">Máx. ${product.stock}</span>
        </div>

        <!-- Actions -->
        <div class="detail-actions">
          <button class="detail-buy-btn"
          onclick="buyNow(${product.id})"
          aria-label="Comprar ahora">
          ⚡ Comprar Ahora
          </button>
          <button class="detail-cart-btn"
          id="detailCartBtn"
          onclick="addToCartFromDetail(${product.id})"
          aria-label="Agregar al carrito">
          🛒 Agregar al Carrito
          </button>
        <div class="detail-secondary-actions">

        <!-- Tabs -->
        <div class="detail-tabs">
          <div class="detail-tab-buttons" role="tablist">
            <button class="detail-tab-btn active" role="tab" aria-selected="true" onclick="showTab('desc')">Descripción</button>
            <button class="detail-tab-btn" role="tab" aria-selected="false" onclick="showTab('specs')">Especificaciones</button>
            <button class="detail-tab-btn" role="tab" aria-selected="false" onclick="showTab('care')">Cuidados</button>
            <button class="detail-tab-btn" role="tab" aria-selected="false" id="sizetabBtn" onclick="showTab('sizetab')">Tabla de Tallas</button>
          </div>
          <div class="detail-tab-content">
            <div class="detail-tab-panel active" id="tab-desc">
              <p>${product.description}</p>
              <br/>
              <p><strong>Material:</strong> ${product.material}</p>
              <br/>
              <p><strong>Color:</strong> ${product.color}</p>
            </div>
            <div class="detail-tab-panel" id="tab-specs">
              <table class="specs-table">
                <tbody>${specsHTML}</tbody>
              </table>
            </div>
            <div class="detail-tab-panel" id="tab-care">
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">${careHTML}</ul>
            </div>
            <div class="detail-tab-panel" id="tab-sizetab">
              <table class="size-chart-table">
                <thead>
                  <tr><th>Talla</th><th>Cintura (cm)</th><th>Cadera (cm)</th><th>Largo (cm)</th></tr>
                </thead>
                <tbody>
                  <tr><td>XS</td><td>60–64</td><td>85–89</td><td>95</td></tr>
                  <tr><td>S</td><td>65–69</td><td>90–94</td><td>96</td></tr>
                  <tr><td>M</td><td>70–74</td><td>95–99</td><td>97</td></tr>
                  <tr><td>L</td><td>75–80</td><td>100–105</td><td>98</td></tr>
                  <tr><td>XL</td><td>81–87</td><td>106–112</td><td>99</td></tr>
                  <tr><td>XXL</td><td>88–95</td><td>113–120</td><td>100</td></tr>
                </tbody>
              </table>
              <p style="font-size:0.75rem;color:var(--color-text-muted);margin-top:0.5rem;">* Medidas aproximadas. En caso de duda, elige la talla mayor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="reviews-section" id="reviewsSection">
      <h3>Reseñas de Clientas (${product.sampleReviews.length})</h3>
      <div class="reviews-summary">
        <div>
          <div class="rating-big">${product.rating}</div>
          <div class="rating-stars-big">${renderStars(product.rating)}</div>
          <div class="rating-total">${product.reviews} calificaciones totales</div>
        </div>
      </div>
      ${reviewsHTML}

      <!-- Review Form -->
      <div class="review-form">
        <h4>Deja tu Opinión</h4>
        <p style="font-size:0.82rem;color:var(--color-text-muted);margin-bottom:var(--space-md);">¿Compraste este producto? ¡Cuéntanos tu experiencia!</p>
        <div class="star-rating-input" id="starRatingInput" role="group" aria-label="Calificación">
          <span data-val="1" aria-label="1 estrella" tabindex="0">★</span>
          <span data-val="2" aria-label="2 estrellas" tabindex="0">★</span>
          <span data-val="3" aria-label="3 estrellas" tabindex="0">★</span>
          <span data-val="4" aria-label="4 estrellas" tabindex="0">★</span>
          <span data-val="5" aria-label="5 estrellas" tabindex="0">★</span>
        </div>
        <input type="text" id="reviewName" placeholder="Tu nombre" aria-label="Tu nombre" />
        <textarea id="reviewText" placeholder="Escribe tu reseña aquí..." aria-label="Tu reseña"></textarea>
        <button class="submit-review-btn" onclick="submitReview(${product.id})">Publicar Reseña</button>
      </div>
    </div>`;
}

/* ============================================================
   DETAIL HELPERS
============================================================ */
let currentDetailQty = 1;

function updateDetailQty(val) {
  currentDetailQty = val;
  const el = document.getElementById('detailQty');
  if (el) el.textContent = val;
}

function changeDetailQty(delta) {
  const newVal = currentDetailQty + delta;
  if (newVal < 1) return;
  updateDetailQty(newVal);
  updateDetailCartButton(currentProduct.id);
}

let selectedSize = null;
let currentProduct = null;

function selectSize(btn) {
  document.querySelectorAll('.size-option')
    .forEach(b => b.classList.remove('selected'));

  btn.classList.add('selected');

  selectedSize = btn.dataset.size;

  console.log("Talla seleccionada:", selectedSize);
  const productId = currentProduct.id;

updateDetailCartButton(productId);
}

function showTab(tabId) {
  document.querySelectorAll('.detail-tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.detail-tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  const panel = document.getElementById('tab-' + tabId);
  if (panel) panel.classList.add('active');
  const btn = document.getElementById(tabId + 'Btn') || document.querySelector(`.detail-tab-btn[onclick*="${tabId}"]`);
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
}

function initDetailTabs() {
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.detail-tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
    });
  });
}

function initReviewStars() {
  const stars = document.querySelectorAll('#starRatingInput span');
  let selectedRating = 0;
  stars.forEach((star, idx) => {
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => s.classList.toggle('active', i <= idx));
    });
    star.addEventListener('click', () => {
      selectedRating = idx + 1;
      stars.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
    });
    star.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        selectedRating = idx + 1;
        stars.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
      }
    });
  });
  document.getElementById('starRatingInput').addEventListener('mouseleave', () => {
    stars.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
  });
}

function scrollToReviews() {
  const el = document.getElementById('reviewsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function submitReview(productId) {
  const name = document.getElementById('reviewName')?.value.trim();
  const text = document.getElementById('reviewText')?.value.trim();
  if (!name || !text) {
    showToast('Por favor completa tu nombre y reseña', 'error');
    return;
  }
  showToast('¡Gracias por tu reseña! Será publicada pronto.', 'success');
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewText').value = '';
}

function switchMainImg(thumb, src) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}
function switchMainImg(element, src){
  document.getElementById('mainProductImage').src = src;
  document.querySelectorAll('.gallery-thumb')
  .forEach(thumb => thumb.classList.remove('active'));
  element.classList.add('active');
}
function shareProduct(name) {
  if (navigator.share) {
    navigator.share({ title: name, text: `Mira este producto de G-FIT: ${name}`, url: window.location.href });
  } else {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Enlace copiado al portapapeles', 'info');
  }
}
// funcion de producto agregado
function isProductInCart(productId, size) {

  const cart = getCart();

  return cart.some(
    item =>
      item.id === productId &&
      item.size === size
  );
}
function getCartItem(productId, size) {

  const cart = getCart();

  return cart.find(
    item => item.id === productId && item.size === size
  );

}
// actualizacion del estatado de agregado del boton del carrito
function updateDetailCartButton(productId) {

  const btn = document.getElementById("detailCartBtn");

  if (!btn) return;

  if (!selectedSize) {

    btn.innerHTML = "🛒 Agregar al carrito";
    btn.style.background = "";

    return;

  }

  const cartItem = getCartItem(productId, selectedSize);

  // No existe en el carrito
  if (!cartItem) {

    btn.innerHTML = "🛒 Agregar al carrito";
    btn.style.background = "";

  }

  // Ya existe y la cantidad coincide
  else if (cartItem.quantity === currentDetailQty) {

    btn.innerHTML = "✓ Agregado";
    btn.style.background = "#27ae60";
    btn.style.color = "#fff";
  }

  // Ya existe pero cambió la cantidad
  else {

    btn.innerHTML = "🔄 Actualizar pedido";
    btn.style.background = "#f39c12";
    btn.style.color = "#fff";
  }

}

/* ============================================================
   ADD TO CART FROM DETAIL
============================================================ */
function addToCartFromDetail(productId) {

    console.log("selectedSize =", selectedSize);

    if (!selectedSize) {

        console.log("No hay talla seleccionada");

        showToast('Por favor selecciona una talla', 'error');

        return;
    }

    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) return;


    // Buscar si ya existe ese producto con esa talla
    const cart = getCart();

    const existingItem = cart.find(
        item =>
            item.id === productId &&
            item.size === selectedSize
    );


    if (existingItem) {

        // Actualizar cantidad
        existingItem.quantity = currentDetailQty;

        saveCart(cart);

        updateCartBadge();

        renderCart();

        showToast("Pedido actualizado 🔄", "success");

    } else {

        // Agregar nuevo producto
        addToCart(product, selectedSize, currentDetailQty);

        showToast(`"${product.name}" agregado al carrito`, "success");

    }


    // Actualizar el aspecto del botón
    updateDetailCartButton(productId);

}

function buyNow(productId) {
  if (!selectedSize) {
    showToast('Por favor selecciona una talla', 'error');
    return;
  }
  addToCartFromDetail(productId);
  closeProductDetail();
  setTimeout(() => toggleCart(), 300);
}

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const cart = getCart();

const existingItem = cart.find(
  item =>
    item.id === productId &&
    item.size === selectedSize
);

if (existingItem) {

  existingItem.quantity = currentDetailQty;

  saveCart(cart);
  updateCartBadge();
  renderCart();

  showToast("Pedido actualizado 🔄", "success");

} else {

  addToCart(product, selectedSize, currentDetailQty);

  showToast(`"${product.name}" agregado al carrito`, "success");

}

  if (product) {

    const defaultSize =
      product.sizes[Math.floor(product.sizes.length / 2)] || 'M';

    addToCart(product, defaultSize, 1);

    showToast(`"${product.name}" agregado — Talla ${defaultSize}`, 'success');
  }
}

/* ============================================================
   CLOSE PRODUCT DETAIL
============================================================ */
function closeProductDetail() {
  const overlay = document.getElementById('productDetailOverlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   FAVORITES
============================================================ */

/* ============================================================
   CART
============================================================ */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('gfit_cart') || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem('gfit_cart', JSON.stringify(cart));
  } catch {}
}
function addToCart(product, size = 'M', quantity = 1) {

  let cart = getCart();

  const existing = cart.find(
    item => item.id === product.id && item.size === size
  );

  if (existing) {

    existing.quantity += quantity;

  } else {

    cart.push({
      id: product.id,
      size: size,
      quantity: quantity
    });

  }

  saveCart(cart);

  updateCartBadge();

  renderCart();

  toggleCart();
}
function renderCart() {

  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');

  if (!cartItems || !cartFooter) return;

  const cart = getCart();

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Tu carrito está vacío</p>
      </div>
    `;

    cartFooter.innerHTML = '';

    return;
  }

  let total = 0;

  cartItems.innerHTML = '';

  cart.forEach(item => {

    const product = PRODUCTS.find(p => p.id === item.id);

    if (!product) return;

    total += product.price * item.quantity;

cartItems.innerHTML += `
<div class="cart-item">

    <img
        class="cart-item-image"
        src="${product.images[0]}"
        alt="${product.name}">

    <div class="cart-item-info">

        <h4>${product.name}</h4>

        <p>${formatPrice(product.price)}</p>

        <select class="cart-size-select"
        onchange="changeCartSize(${product.id}, '${item.size}', this.value)">

    ${product.sizes.map(size => `
      <option value="${size}"
        ${size === item.size ? 'selected' : ''}>
        ${size}
      </option>
    `).join('')}

</select>

        <div class="cart-qty">

            <button onclick="changeCartQty(${product.id},'${item.size}',-1)">−</button>

            <span>${item.quantity}</span>

            <button onclick="changeCartQty(${product.id},'${item.size}',1)">+</button>

        </div>

    </div>

    <button class="remove-cart-item"
            onclick="removeFromCart(${product.id},'${item.size}')">

        🗑️

    </button>

</div>
`;

  });

  cartFooter.innerHTML = `

<div class="cart-summary">

    <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>${formatPrice(total)}</span>
    </div>

    <div class="cart-summary-row">
        <span>Envío</span>
        <span>Gratis</span>
    </div>

    <div class="cart-summary-total">
        <strong>Total</strong>
        <strong>${formatPrice(total)}</strong>
    </div>

    <button class="checkout-btn"
            onclick="checkout()">

        Finalizar Compra
    </button>
</div>
`;
}
function checkout(){

    if(getCart().length === 0){

        showToast("El carrito está vacío","info");

        return;
    }

    showToast("Próximamente disponible 🚀","success");

}
/* ============================================================
   TOGGLE CART
============================================================ */
function toggleCart() {

  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');

  if (!cartSidebar || !cartOverlay) return;

  cartSidebar.classList.toggle('active');

  cartOverlay.classList.toggle('active');

}
function changeCartQty(productId, size, amount) {

  let cart = getCart();

  const item = cart.find(
    i => i.id === productId && i.size === size
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {

    cart = cart.filter(
      i => !(i.id === productId && i.size === size)
    );

  }

  saveCart(cart);

  updateCartBadge();

  renderCart();

}
function removeFromCart(productId, size) {

  let cart = getCart();

  cart = cart.filter(
    item => !(item.id === productId && item.size === size)
  );

  saveCart(cart);

  updateCartBadge();

  renderCart();

}
function changeCartSize(productId, oldSize, newSize) {

  let cart = getCart();

  const item = cart.find(
    i => i.id === productId && i.size === oldSize
  );

  if (!item) return;

  item.size = newSize;

  saveCart(cart);

  renderCart();

  showToast(
    `Talla cambiada a ${newSize}`,
    'success'
  );
}
function updateCartBadge() {

  const badge = document.getElementById('cartBadge');

  if (!badge) return;

  const total = getCart().reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  badge.textContent = total;

}
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('gfit_favorites') || '[]'); }
  catch { return []; }
}

function saveFavorites(favs) {
  try { localStorage.setItem('gfit_favorites', JSON.stringify(favs)); }
  catch (e) { /* localStorage may not be available */ }
}

function toggleFavorite(productId, btn) {
  let favs = getFavorites();
  const idx = favs.indexOf(productId);
  if (idx > -1) {
    favs.splice(idx, 1);
    btn?.classList.remove('active');
    showToast('Eliminado de favoritos', 'info');
  } else {
    favs.push(productId);
    btn?.classList.add('active');
    showToast('Agregado a favoritos ♡', 'success');
  }
  saveFavorites(favs);
  updateFavBadge();
}

function updateFavBadge() {
  const badge = document.getElementById('favBadge');
  if (badge) badge.textContent = getFavorites().length;
}

function showFavorites() {
  const favs = getFavorites();
  if (favs.length === 0) {
    showToast('No tienes favoritos aún', 'info');
    return;
  }
  activeCategory = 'all';
  filteredProducts = PRODUCTS.filter(p => favs.includes(p.id));
  currentPage = 1;
  renderProducts();
  scrollToProducts();
  showToast(`Mostrando ${favs.length} favoritos`, 'info');
}

/* ============================================================
   SEARCH
============================================================ */
function performSearch() {
  const query = document.getElementById('searchInput')?.value.trim().toLowerCase();
  if (!query) return;

  filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    getCategoryLabel(p.category).toLowerCase().includes(query)
  );

  currentPage = 1;
  activeCategory = 'all';
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  renderProducts();
  scrollToProducts();
  hideSuggestions();
  showToast(`${filteredProducts.length} resultado(s) para "${query}"`, 'info');
}

function hideSuggestions() {
  const el = document.getElementById('searchSuggestions');
  if (el) { el.classList.remove('visible'); el.innerHTML = ''; }
}

/* ============================================================
   SCROLL TO PRODUCTS
============================================================ */
function scrollToProducts(smooth = true) {
  const el = document.getElementById('catalogSection');
  if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render initial products
  filteredProducts = [...PRODUCTS];
  renderProducts();
  updateFavBadge();
  renderCart();
  updateCartBadge();

  // Nav category links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterByCategory(link.dataset.category);
    });
  });

  // Search suggestions
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      const suggestionsEl = document.getElementById('searchSuggestions');
      if (!q || q.length < 2) { hideSuggestions(); return; }

      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || getCategoryLabel(p.category).toLowerCase().includes(q)
      ).slice(0, 6);

      if (matches.length > 0) {
        suggestionsEl.innerHTML = matches.map(p =>
  `<div class="suggestion-item"
        role="option"
        onclick="selectSuggestion('${p.name.replace(/'/g,"\\'")}')">

      <img
        src="${p.images[0]}"
        alt="${p.name}"
        class="suggestion-image">

      <span>${p.name}</span>

  </div>`
).join('');
        suggestionsEl.classList.add('visible');
      } else {
        hideSuggestions();
      }
    });

    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') performSearch();
      if (e.key === 'Escape') hideSuggestions();
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.header-search')) hideSuggestions();
    });
  }
});

function selectSuggestion(name) {
  document.getElementById('searchInput').value = name;
  hideSuggestions();
  performSearch();
}
