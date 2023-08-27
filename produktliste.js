// fetche////
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(products);

function showProducts(products) {
  // loope//
  products.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  // clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".productName").textContent = product.productName;
  copy.querySelector(".subtle").textContent = product.subtle;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".newPrice").textContent = product.newPrice;
  copy.querySelector(".discount").textContent = product.discount;
  copy.querySelector("img").src = product.img;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
