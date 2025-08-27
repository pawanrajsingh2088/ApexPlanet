const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495" },
  { id: 2, name: "Smart Watch", price: 99.99, img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400" },
  { id: 3, name: "Bluetooth Speaker", price: 39.99, img: "https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=" },
  { id: 4, name: "Running Shoes", price: 79.99, img: "https://media.istockphoto.com/id/682176034/photo/marathon-running-race.jpg?s=612x612&w=0&k=20&c=kJfJwHBHX0lVzPXovgIpviYhItj8Zj04MFTdHp3PIgE=" },
  { id: 5, name: "Backpack", price: 49.99, img: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D" },
  { id: 6, name: "Sunglasses", price: 29.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTSbD3EVLf3-ZESsX9YbUIknHrUKG2jc8sA&s" }
];

let cart = [];

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==="cart") renderCart();
}

function renderProducts(){
  const list=document.getElementById("product-list");
  list.innerHTML="";
  products.forEach(p=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function addToCart(id){
  const product=products.find(p=>p.id===id);
  const existing=cart.find(item=>item.id===id);
  if(existing){existing.qty++;}
  else{cart.push({...product,qty:1});}
  updateCartCount();
}

function renderCart(){
  const cartItems=document.getElementById("cart-items");
  const totalEl=document.getElementById("cart-total");
  cartItems.innerHTML="";
  let total=0;
  cart.forEach((item,i)=>{
    total+=item.price*item.qty;
    const li=document.createElement("li");
    li.innerHTML=`
      ${item.name} (x${item.qty}) - $${(item.price*item.qty).toFixed(2)}
      <button onclick="removeFromCart(${i})">Remove</button>
    `;
    cartItems.appendChild(li);
  });
  totalEl.textContent=total.toFixed(2);
}

function removeFromCart(i){cart.splice(i,1);updateCartCount();renderCart();}
function updateCartCount(){document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);}
function checkout(){if(cart.length===0)return alert("Cart empty!");alert("✅ Order placed successfully!");cart=[];updateCartCount();renderCart();showPage("home");}

document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
showPage("home");
