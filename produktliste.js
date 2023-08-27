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
  copy.querySelector(".productdisplayname").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount;
  copy.querySelector("img").src = product.img;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
