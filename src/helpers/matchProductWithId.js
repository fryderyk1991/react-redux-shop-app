export const matchProductsWithId = (arr1, arr2) => {
    return arr1.filter(product => arr2.includes(product.id))
   
}
