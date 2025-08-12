document.getElementById("alertBtn").addEventListener("click", () => {
    alert("Hello! You clicked the alert button.");
});

document.getElementById("colorBtn").addEventListener("click", () => {
    const colors = ["#f5f7fa", "#ffdddd", "#ddffdd", "#ddeeff", "#fff3cd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.background = randomColor;
});
