export const ProductList = [
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    },
    {
        linkToPage: '../pages/product.html',
        imageProduct: '../views/img/img.jpg',
        imageText: "Funda para iPhone con diseño de LA",
        productName: "Funda Case 31 hats - Murakami Thirty One hats",
        price: 300
    }
];

const productsContainer = document.getElementById('products');

ProductList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <a href="${product.linkToPage}">
            <img src="${product.imageProduct}" alt="${product.imageText}" />
            <span class="product-name">${product.productName}</span>
        </a>
        <span class="product-price">$ ${product.price} MX</span>
    `;
    productsContainer.appendChild(productCard);
});
