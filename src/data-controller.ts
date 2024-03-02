import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <container class="image-container">
              <img src="${product.image}" alt="${product.name}" />
              </container>
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    for(let p of prods){
        const storeItem = document.createElement("div");
        storeItem.setAttribute('class','storeItemDiv');
        storeItem.innerHTML = `${generateProductHTML(p)}`;
        const mainContainer = document.getElementById("main-container");
        mainContainer!.appendChild(storeItem);
    }
}

function getByCategory(category: string): void {
    const mainContainer = document.getElementById("main-container");
    while (mainContainer!.firstChild) {
        mainContainer!.removeChild(mainContainer!.lastChild);
      }
    const newProds: Product[] = products.filter((p)=>p.category==`${category}`);
    renderProducts(newProds);
}

function getByRating(minRating: number): void {
    const mainContainer = document.getElementById("main-container");
    while (mainContainer!.firstChild) {
        mainContainer!.removeChild(mainContainer!.lastChild);
      }
    const newProds: Product[] = products.sort((i1,i2)=>i2.rating-i1.rating);
    renderProducts(newProds);
}

export { renderProducts, getByCategory, getByRating };