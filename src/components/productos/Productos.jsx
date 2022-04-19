const products = [
  {
    sku: 1,
    titulo: "Samsung Galaxy A12 64 GB azul 4 GB RAM",
    imagen: "/img/celulares/1.webp",
    precio: 33999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 2,
    titulo: "Samsung Galaxy S21 Fe Blanco 5g",
    imagen: "/img/celulares/2.webp",
    precio: 124999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 3,
    titulo: "Quantum UP32 Dual SIM 32 GB negro 1 GB RAM",
    imagen: "/img/celulares/3.webp",
    precio: 12020,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 4,
    titulo: "Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
    imagen: "/img/celulares/4.webp",
    precio: 94999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 5,
    titulo: "Samsung Galaxy A12 64 GB azul 4 GB RAM",
    imagen: "/img/celulares/5.webp",
    precio: 33999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 6,
    titulo: "Samsung Galaxy M12 (5000 mAh) Dual SIM 128 GB black 4 GB RAM",
    imagen: "/img/celulares/6.webp",
    precio: 39999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 7,
    titulo: "LG K62 128 GB sky blue 4 GB RAM",
    imagen: "/img/celulares/7.webp",
    precio: 35999,
    stock: 5,
    categoria: "Celulares"
  },
  {
    sku: 8,
    titulo: "Calefactor eléctrico convector Magiclick C1009 blanco 220V",
    imagen: "/img/calefaccion/1.webp",
    precio: 5138,
    stock: 5,
    categoria: "Calefaccion"
  },
  {
    sku: 9,
    titulo: "Calefactor Tiro Balanceado Emege Euro 2000c Multigas 2019",
    imagen: "/img/calefaccion/2.webp",
    precio: 20990,
    stock: 5,
    categoria: "Calefaccion"
  },
  {
    sku: 10,
    titulo: "Calefactor eléctrico convector Peabody PE-VC10 negro 220V",
    imagen: "/img/calefaccion/4.webp",
    precio: 8833,
    stock: 5,
    categoria: "Calefaccion"
  },
  {
    sku: 11,
    titulo: "Auriculares in-ear inalámbricos Samsung Galaxy Buds2 black",
    imagen: "/img/auriculares/1.webp",
    precio: 15499,
    stock: 5,
    categoria: "Auriculares"
  },
  {
    sku: 12,
    titulo: "Auriculares inalámbricos Sony WH-CH510 negro",
    imagen: "/img/auriculares/2.webp",
    precio: 4999,
    stock: 5,
    categoria: "Auriculares"
  },
  {
    sku: 13,
    titulo: "Auriculares Bluetooth F9 Tws Mejor Que Xiaomi Earpods",
    imagen: "/img/auriculares/3.webp",
    precio: 2766,
    stock: 5,
    categoria: "Auriculares"
  },
  {
    sku: 14,
    titulo: "Auriculares in-ear inalámbricos Xiaomi Redmi AirDots 2 negro",
    imagen: "/img/auriculares/4.webp",
    precio: 2439,
    stock: 5,
    categoria: "Auriculares"
  },
  {
    sku: 15,
    titulo: "Auriculares in-ear inalámbricos Samsung Galaxy Buds2 black",
    imagen: "/img/auriculares/5.webp",
    precio: 15499,
    stock: 5,
    categoria: "Auriculares"
  },
  {
    sku: 16,
    titulo: "Parlante Spica Sp-2065 Bluetooth Portatil Led Rgb Inalambric",
    imagen: "/img/parlantes/1.webp",
    precio: 1924,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 17,
    titulo: "Parlante Philco DJP10 portátil con bluetooth negro 220V",
    imagen: "/img/parlantes/2.webp",
    precio: 7699,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 18,
    titulo: "Parlante Edifier R2000DB con bluetooth wood finish",
    imagen: "/img/parlantes/3.webp",
    precio: 46990,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 19,
    titulo: "Parlante Spica SP-4408 con bluetooth",
    imagen: "/img/parlantes/4.webp",
    precio: 8999,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 20,
    titulo: "Parlante HP DHS-2101 black",
    imagen: "/img/parlantes/5.webp",
    precio: 3701,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 21,
    titulo: "Parlante Spica SP 3312TM con bluetooth 220V",
    imagen: "/img/parlantes/6.webp",
    precio: 9999,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 22,
    titulo: "Parlante Crown Mustang CMA-802BT con bluetooth negro",
    imagen: "/img/parlantes/7.webp",
    precio: 12021,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 23,
    titulo: "Parlante Aliver Iggy Go portátil con bluetooth negro",
    imagen: "/img/parlantes/8.webp",
    precio: 6999,
    stock: 5,
    categoria: "Parlantes"
  },
  {
    sku: 24,
    titulo: "Smart TV JVC LT-32DA3125 LED HD 32\" 220V",
    imagen: "/img/smarttv/1.webp",
    precio: 28999,
    stock: 5,
    categoria: "Smart TV"
  },
  {
    sku: 25,
    titulo: "Smart TV Noblex DK32X5000 LED HD 32\" 220V",
    imagen: "/img/smarttv/2.webp",
    precio: 33499,
    stock: 5,
    categoria: "Smart TV"
  },
  {
    sku: 26,
    titulo: "Smart TV BGH B5021UH6A LED 4K 50\" 220V",
    imagen: "/img/smarttv/3.webp",
    precio: 59960,
    stock: 5,
    categoria: "Smart TV"
  },
  {
    sku: 27,
    titulo: "Smart TV TCL S6500 Series L42S6500 LED Full HD 42\" 220V",
    imagen: "/img/smarttv/4.webp",
    precio: 40999,
    stock: 5,
    categoria: "Smart TV"
  }
]


export const FetchProductos = (categoria) =>
{
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        if (categoria) {
          resolve(products.filter((product) => product.categoria === categoria));
        } else {
          resolve(products);
        }
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  })
};


export const FetchProducto = (idProducto) =>
{
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products.find((product) => product.sku === parseFloat(idProducto)));
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  })
};