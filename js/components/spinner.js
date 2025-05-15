const spinner = document.getElementById("spinner");
const eliminateProduct = document.getElementById("eliminate-product");
const addProduct = document.getElementById("add-product");

addProduct.addEventListener("click", () => {
    spinner.value = parseInt(spinner.value) + 1;
});

eliminateProduct.addEventListener("click", () => {
    if (spinner.value <= 1) {
        spinner.value = 1
    } else {
        spinner.value = parseInt(spinner.value) - 1;
    }
});