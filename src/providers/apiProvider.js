
const url = 'https://api.escuelajs.co/api/v1/products';


export const fetchData = async () => {
    try {
        const response = await fetch(url);
        return response.json()
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        throw error
    }
};


