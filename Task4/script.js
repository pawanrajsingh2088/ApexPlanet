const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  if (taskInput.value.trim() === "") return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

window.onload = () => {
  loadTasks();
  renderProducts(products);
};

const products = [
  { name: "Laptop", price: 800, category: "electronics" },
  { name: "T-Shirt", price: 20, category: "clothing" },
  { name: "Headphones", price: 100, category: "electronics" },
  { name: "Jeans", price: 40, category: "clothing" }
];

function renderProducts(items) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p><p>${p.category}</p>`;
    container.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sortBy").value;
  let sorted = [...products];
  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  else if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  renderProducts(sorted);
}
