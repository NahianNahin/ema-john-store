import { getTheCartFromDB } from "../utilities/fakedb";

export const productsAndCartLoader = async()=> {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const saveCart = getTheCartFromDB();
    const initialCart = [];
    for(const id in saveCart){
        const addCart = products.find(product => product.id === id);
        if(addCart){
            const quantity = saveCart[id];
            addCart.quantity = quantity;
            initialCart.push(addCart);

        }
        
        
    }
    
    return {products: products , initialCart: initialCart};

}