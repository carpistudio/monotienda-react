const categorias = [
    {
       titulo:"Auriculares"
    },
    {
       titulo:"Calefaccion"
    },
    {
       titulo:"Celulares"
    },
    {
       titulo:"Electrodomesticos"
    },
    {
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