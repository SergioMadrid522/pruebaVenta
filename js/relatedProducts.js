/* import { ProductList } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('related-products');
  
  // Aquí el resto del código que usa productsContainer
}); */

const productList = [
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
    },
]

const relatedProducts = document.getElementById('related-products');

productList.forEach(product => {
    const products = document.createElement('related-product');
    products.classList.add('related-product');
    products.innerHTML = `
        <a href="${product.linkToPage}">
            <img src="${product.imageProduct}" alt="${product.imageText}">
            <div class="recomended-product-name">${product.productName}</div>
        </a>
    `;
    relatedProducts.appendChild(products);
});
{/*
<div id="related-products">
<div class="related-product">
    <a href="product.html">
        <img src="../views/img/img.jpg" alt="producto 1">
        <div class="recomended-product-title first-product">
            Funda Case 31 Hats LA Chrome Thirty One Hats
        </div>
    </a>            
</div> 
*/}