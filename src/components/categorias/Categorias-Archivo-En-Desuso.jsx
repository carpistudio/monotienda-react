const categorias = [
    {
      id: 1,
      titulo:"Auriculares"
    },
    {
      id: 2,
      titulo:"Calefaccion"
    },
    {
      id: 3,
      titulo:"Celulares"
    },
    {
      id: 4,
      titulo:"Electrodomesticos"
    },
    {
      id: 5,
      titulo:"Parlantes"
    }
  ]

export const FetchCategorias = () =>
{
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(categorias);
      }, 1000);
    } else {
      reject(console.log("Error"));
    }
  })
};