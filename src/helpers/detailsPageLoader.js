
export const productDetailsPageLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('https://api.escuelajs.co/api/v1/products/' + id)

    if(!res.ok) {
      throw Error('Could not find that product')
    }
    return res.json();
  }
  
  