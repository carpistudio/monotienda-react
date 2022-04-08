const products = [
  {
     sku:1,
     titulo:"Samsung Galaxy A12 64 GB azul 4 GB RAM",
     imagen:"img/celulares/1.webp",
     precio:33999,
     stock:4,
     categoria:"Celulares"
  },
  {
     sku:2,
     titulo:"Samsung Galaxy S21 Fe Blanco 5g",
     imagen:"img/celulares/2.webp",
     precio:124999,
     stock:4,
     categoria:"Celulares"
  },
  {
     sku:3,
     titulo:"Quantum UP32 Dual SIM 32 GB negro 1 GB RAM",
     imagen:"img/celulares/3.webp",
     precio:12020,
     stock:8,
     categoria:"Celulares"
  },
  {
     sku:4,
     titulo:"Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
     imagen:"img/celulares/4.webp",
     precio:94999,
     stock:1,
     categoria:"Celulares"
  },
  {
     sku:5,
     titulo:"Samsung Galaxy A12 64 GB azul 4 GB RAM",
     imagen:"img/celulares/5.webp",
     precio:33999,
     stock:2,
     categoria:"Celulares"
  },
  {
     sku:6,
     titulo:"Samsung Galaxy M12 (5000 mAh) Dual SIM 128 GB black 4 GB RAM",
     imagen:"img/celulares/6.webp",
     precio:39999,
     stock:6,
     categoria:"Celulares"
  }
]
  
  export const Promesa = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  });
  