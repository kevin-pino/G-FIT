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
    color: 'Negro / Rosado',
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
    color: 'Lavanda / Dorado',
    material: '80% Poliamida, 20% Elastano',
    emoji: '👙',
    colorHex: '#B07BC4',
    description: 'Top deportivo con relleno removible y efecto push-up natural. Ideal para entrenamiento intenso con soporte de nivel medio-alto. Diseño atrevido con detalles en tono dorado.',
    specs: {
      'Soporte': 'Medio-Alto',
      'Relleno': 'Removible',
      'Cierre': 'Sin cierre / elástico',
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
    name: 'Conjunto Deportivo Galaxy Set',
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
    color: 'Negro / Lila',
    material: '72% Poliéster, 22% Nylon, 6% Elastano',
    emoji: '👗',
    colorHex: '#2d1126',
    description: 'Conjunto completo legging + top coordinado con estampado galaxy exclusivo de G-FIT. Tecnología anti-transparencia y compresión progresiva para máximo rendimiento y estilo.',
    specs: {
      'Incluye': 'Legging + Top',
      'Compresión legging': 'Alta',
      'Soporte top': 'Medio',
      'Estampado': 'Galaxy G-FIT Exclusive',
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
    color: 'Negro / Coral',
    material: '88% Poliéster, 12% Elastano',
    emoji: '🩳',
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
    name: 'Chaqueta Windbreaker Urban Flow',
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
    color: 'Negro / Rosado Metalizado',
    material: '100% Nylon repelente al agua',
    emoji: '🧥',
    colorHex: '#0d0d0d',
    description: 'Chaqueta cortavientos liviana con detalles metalizados en rosado dorado. Capucha desmontable, reflectivos para seguridad nocturna y bolsillos con cremallera.',
    specs: {
      'Tipo': 'Windbreaker / Cortaviento',
      'Capucha': 'Desmontable',
      'Bolsillos': '2 laterales + 1 interior',
      'Reflectivos': 'Sí, para seguridad nocturna',
      'Resistencia': 'Viento y lluvia ligera',
      'Uso ideal': 'Running outdoor, Urban Fitness'
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
    color: 'Gris Marengo / Rose Gold',
    material: '60% Algodón, 35% Poliéster, 5% Elastano',
    emoji: '🧸',
    colorHex: '#3d3d3d',
    description: 'Sudadera oversize de tejido suave tipo velvet touch. Manga raglan para mayor libertad de movimiento. Perfecta para post-entreno o días casual en casa.',
    specs: {
      'Silueta': 'Oversize',
      'Manga': 'Raglan larga',
      'Bolsillos': 'Canguro frontal',
      'Cuello': 'Redondo con elástico',
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
    color: 'Negro / Detalles Neón',
    material: '78% Poliéster Reciclado, 22% Elastano',
    emoji: '🏃‍♀️',
    colorHex: '#1a1a1a',
    description: 'Legging de alto rendimiento para running con paneles de malla estratégicos para ventilación. Costuras planas anti-rozamiento y cintura con bolsillo para smartphone.',
    specs: {
      'Compresión': 'Progresiva (tobillo a rodilla)',
      'Bolsillo cintura': 'Para smartphone hasta 6.5"',
      'Malla': 'Paneles laterales de ventilación',
      'Costuras': 'Planas anti-rozamiento',
      'Reflectivos': 'Sí',
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
    color: 'Nude / Lila Pastel',
    material: '85% Nylon, 15% Elastano',
    emoji: '🧘‍♀️',
    colorHex: '#C9956C',
    description: 'Bralette deportivo de corte limpio para yoga y pilates. Diseño sin costuras visibles con tela de segunda piel ultra cómoda. Soporte ligero a medio.',
    specs: {
      'Soporte': 'Ligero a medio',
      'Diseño': 'Sin costuras visibles',
      'Relleno': 'Sin relleno',
      'Cierre': 'Sin cierre',
      'Tela': 'Segunda piel, opaca',
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
    name: 'Conjunto Gym Power Duo',
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
    color: 'Negro Total',
    material: '70% Nylon, 25% Poliéster, 5% Elastano',
    emoji: '🏋️‍♀️',
    colorHex: '#0d0d0d',
    description: 'Conjunto de alta performance para gym intenso. Legging de cintura ancha con soporte lumbar y top de tirantes ajustables. Material de secado ultra-rápido.',
    specs: {
      'Incluye': 'Legging + Top de tirantes',
      'Soporte lumbar': 'Panel ancho de soporte',
      'Tirantes top': 'Ajustables',
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
    color: 'Rosado / Lila Tie-Dye',
    material: '75% Poliéster, 20% Nylon, 5% Elastano',
    emoji: '🌸',
    colorHex: '#d4a0c0',
    description: 'Legging con exclusivo estampado tie-dye rosado y lila. Edición limitada con efecto artesanal único. Corte de cintura media y tela de compresión moderada.',
    specs: {
      'Estampado': 'Tie-Dye exclusivo',
      'Cintura': 'Media',
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
    color: 'Negro / Rosado Neón',
    material: '82% Poliamida, 18% Elastano',
    emoji: '💪',
    colorHex: '#1a0a14',
    description: 'Top deportivo de espalda cruzada con soporte medio-alto ideal para entrenamientos de alta intensidad. Tiras ajustables y diseño que deja respirar la espalda.',
    specs: {
      'Soporte': 'Medio-Alto',
      'Diseño espalda': 'Crossback con tiras',
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
    color: 'Negro / Detalles Dorados',
    material: '80% Nylon, 20% Elastano',
    emoji: '🚴‍♀️',
    colorHex: '#1a1a1a',
    description: 'Short de ciclismo de corte largo con acolchado interior 3D para máximo confort. Cintura alta y costuras planas. Perfecto también para running y cardio.',
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
    color: 'Azul Noche / Plata',
    material: '76% Poliéster reciclado, 24% Elastano',
    emoji: '⚡',
    colorHex: '#1a2040',
    description: 'Conjunto completo para running outdoor con tecnología Storm Shield. Resistente al viento y repelente al agua ligero. Reflectivos para máxima visibilidad nocturna.',
    specs: {
      'Incluye': 'Legging + Top técnico',
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
    color: 'Arena / Rosado Nude',
    material: '92% Nylon, 8% Elastano',
    emoji: '✨',
    colorHex: '#C9956C',
    description: 'Legging sin costuras con efecto segunda piel. La más vendida de G-FIT. Tela opaca de alta densidad, moldeadora y de secado ultra-rápido. Compresión progresiva.',
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
    color: 'Gris Oscuro / Rose Gold',
    material: 'Exterior: 100% Poliéster. Interior: Micro-fleece térmico',
    emoji: '🌡️',
    colorHex: '#2a2a2a',
    description: 'Chaqueta deportiva con forro micro-fleece térmico para días fríos. Cremallera frontal completa, bolsillos calentadores y puños de punto para retención de calor.',
    specs: {
      'Tipo': 'Térmica con forro fleece',
      'Cremallera': 'Frontal completa YKK',
      'Bolsillos': '2 calentadores laterales',
      'Puños': 'Punto elástico',
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
    color: 'Multicolor',
    material: '95% Algodón Pima, 5% Elastano',
    emoji: '🎽',
    colorHex: '#4a3040',
    description: 'Top tipo camiseta sin mangas de algodón pima con textura acanalada (rib). Perfecto para el gym o para el día a día. Corte crop ligeramente holgado.',
    specs: {
      'Tipo': 'Camiseta sin mangas crop',
      'Textura': 'Acanalada (Rib)',
      'Ajuste': 'Slightly oversized',
      'Largo': 'Crop (hasta ombligo)',
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
    color: 'Negro / Rosado Dorado',
    material: 'Nylon 600D resistente al agua',
    emoji: '🎒',
    colorHex: '#1a1a1a',
    description: 'Mochila deportiva compacta con compartimento para zapatos separado, bolsillo lateral para botella y detalle en correa de color rosado dorado G-FIT.',
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
    color: 'Crudo / Café',
    material: '68% Poliéster, 26% Viscosa, 6% Elastano',
    emoji: '🌺',
    colorHex: '#8B6548',
    description: 'Legging estilo flare con acampanado en la parte inferior. Diseño boho-sport ideal para yoga, pilates y actividades de bajo impacto. Cintura alta y plisados decorativos.',
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
    color: 'Gris Claro / Lavanda',
    material: '58% Algodón, 38% Poliéster, 4% Elastano',
    emoji: '🌙',
    colorHex: '#9B6DB5',
    description: 'Sudadera crop con capucha ligera y acabado suave. Diseño minimalista con logo G-FIT bordado en lavanda. Perfecta para post-workout o loungewear.',
    specs: {
      'Tipo': 'Crop con capucha',
      'Logo': 'Bordado en lavanda',
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
    color: 'Negro / Detalles Rose Gold',
    material: '68% Nylon, 28% Poliéster, 4% Elastano + Hilo metalizado',
    emoji: '💎',
    colorHex: '#1a0a14',
    description: 'Conjunto premium de edición especial con hilo metalizado rose gold tejido en la tela. Legging de cintura muy alta con doble capa sculpting y top con soporte alto integrado. La prenda más exclusiva de G-FIT.',
    specs: {
      'Incluye': 'Legging + Top con soporte integrado',
      'Detalle': 'Hilo metalizado Rose Gold',
      'Soporte': 'Alto integrado en top',
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
  if (!product) return;

  const overlay = document.getElementById('productDetailOverlay');
  const container = document.getElementById('productDetailContainer');

  container.innerHTML = renderProductDetail(product);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Init detail features
  initSizeSelector();
  initDetailTabs();
  initReviewStars();
  updateDetailQty(1);
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
    `<button class="size-option" data-size="${size}" onclick="selectSize(this)" aria-label="Talla ${size}">${size}</button>`
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
          <button class="detail-buy-btn" onclick="buyNow(${product.id})" aria-label="Comprar ahora">⚡ Comprar Ahora</button>
          <button class="detail-cart-btn" onclick="addToCartFromDetail(${product.id})" aria-label="Agregar al carrito">🛒 Agregar al Carrito</button>
          <div class="detail-secondary-actions">
            <button class="detail-fav-btn" onclick="toggleFavorite(${product.id}, this)" aria-label="Agregar a favoritos">
              ♡ Favoritos
            </button>
            <button class="detail-share-btn" onclick="shareProduct('${product.name}')" aria-label="Compartir producto">
              ↗ Compartir
            </button>
          </div>
        </div>

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
}

let selectedSize = null;

function selectSize(btn) {
  document.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = btn.dataset.size;
}

function initSizeSelector() {
  selectedSize = null;
  currentDetailQty = 1;
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

/* ============================================================
   ADD TO CART FROM DETAIL
============================================================ */
function addToCartFromDetail(productId) {
  if (!selectedSize) {
    showToast('Por favor selecciona una talla', 'error');
    // Highlight size grid
    document.getElementById('sizeSelector')?.animate([
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(0)' }
    ], { duration: 300 });
    return;
  }
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    addToCart(product, selectedSize, currentDetailQty);
    showToast(`"${product.name}" agregado al carrito`, 'success');
  }
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
  if (product) {
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)] || 'M';
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
