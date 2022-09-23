/*
* function fetch data from server
*/
const getData = async function () {
    const url = 'https://dummyjson.com/products?limit=100';
    const data = await (await fetch(url)).json();
    const parsedData = data.products;
    return parsedData;
};

/*
* function to get category data
*/

const getCategoryData = function () {
    // let category = getData.filter((items, i, arr) => arr.indexOf(items) === i)
    console.log("category", getData());
};

export { getCategoryData };