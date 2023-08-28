//https://kea-alt-del.dk/t7/api/products/1163//*
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".nameBrand h3").textContent = product.productdisplayname;
  document.querySelector(".nameBrand .brand").textContent = product.brandname;
  document.querySelector(".nameBrand .articletype").textContent = product.articletype;
  document.querySelector(".nameBrand .price").textContent = product.price;
  document.querySelector(".modelName").textContent = product.productdisplayname;
  document.querySelector(".inventoryNumber").textContent = product.id;
  document.querySelector(".underName").textContent = product.brandname;
  document.querySelector(".underName1").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
