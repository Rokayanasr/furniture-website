
const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "/stocks/header1.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "living rooms",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "/stocks/header.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "living rooms",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "/stocks/header2.jpg",
      amt: 2799,
      seller: "Rajesh living roomss",
      catagory: "living rooms",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "/stocks/slider/1-2.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "chairs",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "/stocks/slider/1.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "sofa",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "/stocks/slider/2.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "sofa",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "/stocks/slider/3.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "chairs",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "/stocks/slider/4.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "sofa",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "/stocks/slider/15.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "chairs",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "/stocks/slider/16.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "sofa",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const categoryList = document.querySelector(".category-list");
  
  function displayProducts(products) {
    if (products.length > 0) {
      const product_details = products
        .map(
          (product) => `
          <div class="product">
            <div class="img">
              <a style="text-decoration: none; position: relative; display: block; text-align: center;" href="#">
                <i id="favBtn" class="fa fa-heart" aria-hidden="true" style="padding: 10px;"></i>
              </a>
              <img src="${product.img}" alt="${product.name}" />
            </div>
            <div class="product-details">
              <span class="name">${product.name}</span>
              <span class="amt">Rs.${product.amt}</span>
            </div>
          </div>`
        )
        .join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  
  
  function setCategories() {
    const allCategories = data.map((product) => product.catagory);
    //console.log(allCategories);
    const catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];
    //console.log(catagories);
    categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
  
    categoryList.addEventListener("click", (e) => {
      const selectedCatagory = e.target.textContent;
      selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
    });
  }
  const priceRange = document.querySelector("#priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  function setPrices() {
    const priceList = data.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "Price range : " + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "Rs." + e.target.value;
      displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
  }
  
  const txtSearch = document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
      displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  
  displayProducts(data);
  setCategories();
  setPrices();

  let link = document.getElementsByClassName("link");
let currentvalue = 1;
function activelink(){
  for(l of link){
l.classList.remove("active");

  }
  event.target.classList.add("active");
  currentvalue = event.target.value;
}
function backbtn(x){
  if(currentvalue > 1){
    for(l of link){
      l.classList.remove("active");
    }
    currentvalue--;
    link[currentvalue-1].classList.add("active");
  }
  
}

function nextbtn(x){
  if(currentvalue < 3){
    for(l of link){
      l.classList.remove("active");
    }
    currentvalue++;
    link[currentvalue-1].classList.add("active");
  }
  
}