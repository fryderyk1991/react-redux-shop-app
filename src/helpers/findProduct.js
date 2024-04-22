export const findProduct = (array ,id) => {
    const product = array.find((item) => item.id === id);
    return product
}

