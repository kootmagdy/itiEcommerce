const productsData = [
  {
    imgSrc: "/asset/5.jpg",
    title: "BiTECOOL",
    rating: 4,
    reviews: 102,
    price: "$298",
    disc: "BiTECOOL 15.6 Windows 11 Laptop, Intel Core i3-5005U, 16GB RAM, 512GB SSD, FHD IPS Display, 2.4G/5G WiFi, BT5.0, RJ45, Type C, Webcam, Long Battery Life - for Work, Study, and Entertainment"
  },
  {
    imgSrc: "/asset/6.jpg",
    title: "Ruzava",
    rating: 4,
    reviews: 423,
    price: "$153",
    disc: "Ruzava/Aocwei Laptop Win 10 14 6GB DDR4 64GB Storage Intel N4020 (Up to 2.8Ghz) 2-Core 1920x1080 FHD Dual WiFi BT 4.2 Mini HDMI Support 512GB TF 1TB SSD Expand for Work Study Entertainment-Gray"
  },
  {
    imgSrc: "/asset/7.jpg",
    title: "WOZIFAN",
    rating: 5,
    reviews: 134,
    price: "$262",
    disc: "WOZIFAN Laptop Windows 11 14 6GB DDR4 128GB SSD Intel N4020 (Up to 2.8Ghz)2-Core Computer 1920x1080 FHD Dual WIFI BT 4.2 Mini HDMI Support 512GB TF 1TB SSD Expand for Work Study Entertainment-Silver"
  },
  {
    imgSrc: "/asset/8.jpg",
    title: "Lenovo",
    rating: 3,
    reviews: 60,
    price: "$199",
    disc: "Lenovo Ideapad 3 Laptop, 15.6 Full HD Screen, Intel Pentium Silver N5030 Quad-Core Processor, 4GB RAM, 128GB SSD, Webcam, Wi-Fi, Windows 11 Home, Office 365 1-Year Subscription Included"
  },
  {
    imgSrc: "/asset/9.jpg",
    title: "Hp Chromebook",
    rating: 4,
    reviews: 3560,
    price: "$230",
    disc: "HP Chromebook 14-inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0010nr, Mineral Silver)"
  },
  {
    imgSrc: "/asset/10.jpg",
    title: "jumper",
    rating: 3,
    reviews: 102,
    price: "$260",
    disc: "jumper 14 Inch Laptop, 12GB LPDDR4 RAM 512GB SSD, Intel Celeron Quad-Core Processor, Windows 11 Computer with FHD IPS Screen, UHD Graphics 600, 5G+2.4G WiFi, Dual Speakers, USB3.0, Webcam, Slim."
  },
  {
    imgSrc: "/asset/11.jpg",
    title: "Microsoft",
    rating: 5,
    reviews: 1396,
    price: "$509",
    disc: "Microsoft Surface Laptop Go - 12.4 Touchscreen - Intel Core i5 - 8GB Memory - 256GB SSD - Platinum"
  },
  {
    imgSrc: "/asset/12.jpg",
    title: "Lenovo - IdeaPad",
    rating: 4,
    reviews: 3053,
    price: "$198",
    disc: "Lenovo 2020 IdeaPad Laptop ComputerAMD A6-9220e 1.6GHz 4GB Memory 64GB eMMC Flash Memory 14 AMD Radeon R4 AC WiFi Microsoft Office 365 Platinum Gray Windows 10 Home"
  },
  {
    imgSrc: "/asset/13.jpg",
    title: "Apple MacBook Pro",
    rating: 4,
    reviews: 1242,
    price: "$388",
    disc: "Apple 2022 MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 256GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
  },
  {
    imgSrc: "/asset/14.jpg",
    title: "Apple M2 Pro Chip",
    rating: 4,
    reviews: 331,
    price: "$498",
    disc: "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Silver"
  },
  {
    imgSrc: "/asset/15.jpg",
    title: "Exilapsire LeadBook T7",
    rating: 3,
    reviews: 154,
    price: "$329",
    disc: "Exilapsire Windows 11 Laptop Intel Celeron Quad-coreBT4.2,Ultra Slim Light，Weight Notebook,Work Study Laptop Computers (15.6-16G+512G)"
  },
  {
    imgSrc: "/asset/16.jpg",
    title: "Apple M3 chip",
    rating: 4,
    reviews: 67,
    price: "$1764",
    disc: "Apple 2023 MacBook Pro Laptop M3 chip with 8‑core CPU, 10‑core GPU: 14.2-inch Liquid Retina XDR Display, 8GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver"
  }
];

const container = document.querySelector(".container");

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card border-0 rounded-0 shadow col-md-3 mb-3"; // Set width and margins based on Bootstrap grid system

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.className = "card-img-top rounded-0 hand-cursor";
  img.alt = "...";
  img.addEventListener('click', () => showMoreDetails(product));

  const cardBody = document.createElement("div");
  cardBody.className = "card-body mt-3 mb-3";

  const row = document.createElement("div");
  row.className = "row";

  const col10 = document.createElement("div");
  col10.className = "col-10";

  const title = document.createElement("h4");
  title.className = "card-title";
  title.textContent = product.title;

  const rating = document.createElement("p");
  rating.className = "card-text";
  for (let i = 0; i < product.rating; i++) {
    let star = document.createElement('i');
    star.className = 'fa fa-star rating-color';
    rating.appendChild(star);
  }

  const reviewsParagraph = document.createElement('p');
  reviewsParagraph.textContent = ` (${product.reviews}) reviews`;
  rating.appendChild(reviewsParagraph);

  const col2 = document.createElement("div");
  col2.className = "col-2";

  const row2 = document.createElement("div");
  row2.className = "row align-items-center text-center g-0";

  const col4 = document.createElement("div");
  col4.className = "col-4";

  const price = document.createElement("h5");
  price.textContent = product.price;

  const col8 = document.createElement("div");
  col8.className = "col-8";

  const addToCart = document.createElement("a");
  addToCart.className = "btn btn-dark w-100 p-3 rounded-0 text-warning";
  addToCart.textContent = "ADD TO CART";

  addToCart.addEventListener("click", function () {
    addToCart.textContent = "ADDED!!";
  
    addToCartClicked(product);
  
    setTimeout(function () {
      addToCart.textContent = "ADD TO CART";
    }, 1300);
  });

  col10.appendChild(title);
  col10.appendChild(rating);
  row.appendChild(col10);
  row.appendChild(col2);
  cardBody.appendChild(row);
  card.appendChild(img);
  card.appendChild(cardBody);
  col4.appendChild(price);
  col8.appendChild(addToCart);
  row2.appendChild(col4);
  row2.appendChild(col8);
  card.appendChild(row2);

  return card;
}

// Assuming 'containerId' is the unique ID of the container you want to select
const containerId = "prods";
const containerProds = document.getElementById(containerId);

function renderProducts() {
  productsData.forEach((product) => {
    const productCard = createProductCard(product);
    containerProds.appendChild(productCard);
  });
}

// Render products
renderProducts();

// // // /// /// /// // / / // / // / //// / / / // / // // cart
function updateCartNotification() {
  const cartNotification = document.getElementById('cart-notification');

  // Calculate the total number of items in the cart
  const totalItems = cartItems.length;

  // Update the notification count
  cartNotification.innerText = totalItems;

  // Show or hide the notification based on the total items
  if (totalItems > 0) {
    cartNotification.classList.remove('d-none');
  } else {
    cartNotification.classList.add('d-none');
  }
}

let cartItems = [];

function addToCartClicked(product) {
  //console.log(`Product added to cart: ${product.title} ${product.price}`);
  cartItems.push(product); // Add the product to the cart array
  updateCartNotification();
  updateCartContent();
}

function removeFromCart(index) {
  cartItems.splice(index, 1); // Remove the item from the cart array based on the index
  updateCartNotification();
  updateCartContent();
}

function updateCartContent() {
  const cartContentContainer = document.getElementById('c-content');
  cartContentContainer.innerHTML = ''; // Clear the existing content

  // Loop through the cart items and add them to the cart content
  cartItems.forEach((product, index) => {
    const cartItem = createCartItemElement(product, index);
    cartContentContainer.appendChild(cartItem);
  });

  // Create and append the total price div
  const totalPriceContainer = document.createElement('div');
  totalPriceContainer.id = 'total-price';
  totalPriceContainer.classList.add('fs-5', 'fw-bold', 'text-warning');
  totalPriceContainer.innerText = `Total Price: ${calculateTotalPrice()}$`;
  const checkout = document.createElement('a');
  checkout.innerText = `CheckOut!`;
  checkout.href = "#"
  checkout.classList.add('m-2', 'fs-5', 'fw-bold');
  totalPriceContainer.appendChild(checkout);
  cartContentContainer.appendChild(totalPriceContainer);
}

function calculateTotalPrice() {
  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, product) => {
    const price = parseFloat(product.price.replace('$', '').replace(',', ''));
    return total + price;
  }, 0);

  return totalPrice.toFixed(2); // Round to 2 decimal places
}

function createCartItemElement(product, index) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const productPhoto = document.createElement('img');
  productPhoto.src = product.imgSrc;
  productPhoto.alt = product.title;
  productPhoto.classList.add('cart-item-photo');
  cartItem.appendChild(productPhoto);

  const productDetails = document.createElement('div');
  productDetails.classList.add('cart-item-details');

  const productName = document.createElement('p');
  productName.innerText = product.title;
  productName.classList.add('cart-item-name');
  productDetails.appendChild(productName);

  const productPrice = document.createElement('p');
  productPrice.innerText = product.price;
  productPrice.classList.add('cart-item-price');
  productDetails.appendChild(productPrice);

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.addEventListener('click', () => removeFromCart(index));
  productDetails.appendChild(removeButton);

  cartItem.appendChild(productDetails);

  return cartItem;
}

// Additional functions for updating cart notification, showing/hiding cart overlay

function showCart() {
  const cartOverlay = document.getElementById('cart-overlay');
  cartOverlay.classList.toggle('d-none');
  updateCartContent(); // Update cart content when showing the cart
}

function closeCart() {
  const cartOverlay = document.getElementById('cart-overlay');
  cartOverlay.classList.add('d-none');
}





//product details section
function showMoreDetails(product) {
  // Print the product details to the console
  console.log('Product details:', product);
  //showing overlay
  const cartOverlay = document.getElementById('cart-overlay');
  cartOverlay.classList.toggle('d-none');

  //append the product with its details
  if (!cartOverlay.classList.contains('d-none')) {
    // If the overlay is visible, append the product details
    const cartContentContainer = document.getElementById('c-content');
    cartContentContainer.innerHTML = ''; // Clear the existing content

    // Create elements for product details and append them to the container
    const productDetailsContainer = document.createElement('div');

    // Example: Display product title, price, and image
    const titleElement = document.createElement('p');
    titleElement.innerText = `Title: ${product.title}`;

    const priceElement = document.createElement('p');
    priceElement.innerText = `Price: ${product.price}`;
    const revElement = document.createElement('p');
    revElement.innerText = `Reviews: ${product.reviews}`;
    
    const rating = document.createElement("p");
    rating.className = "card-text";
    for (let i = 0; i < product.rating; i++) {
      let star = document.createElement('i');
      star.className = 'fa fa-star rating-color';
      rating.appendChild(star);
    }
    
    const discElement = document.createElement('p');
    discElement.innerText = `Details: ${product.disc}`;

    const imageElement = document.createElement('img');
    imageElement.src = product.imgSrc;
    imageElement.alt = product.title;

    productDetailsContainer.appendChild(titleElement);
    productDetailsContainer.appendChild(priceElement);
    productDetailsContainer.appendChild(revElement);
    productDetailsContainer.appendChild(discElement);
    productDetailsContainer.appendChild(rating);
    productDetailsContainer.appendChild(imageElement);

    cartContentContainer.appendChild(productDetailsContainer);
  }
}