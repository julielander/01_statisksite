// fetche////
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // loope//
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".productdisplayname").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount;
  /* copy.querySelector("img").src = product.img; */

  if (product.onSale) {
    copy.querySelector(".product").classList.add("onSale");
    copy.querySelector(".discount1").textContent = product.discount + "%";
  }
  // produkt udsolgt//
  if (product.soldout) {
    copy.querySelector(".product").classList.add("udsolgt");
  }

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
