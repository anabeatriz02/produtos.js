'use strict';

const url = 'http://10.107.131.29:8080/produtos';

const getProdutos = async () => {
    const response = await fetch(url);
    return response.json();
};

const postProduto = (produto) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {

        }
    };
    fetch(url, options);
};

const deleteProduto = (id) => {
    const options = {
        method: 'DELET',
        headers:{
            'content-Type': 'application/json',
        },
    };
    fetch(`${url}/${id}, options`)
}



export { getProdutos };
export { postProduto };