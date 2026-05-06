fetch("connectbe-production-9a5b.up.railway.app")
    .then(res => res.text())
    .then(data => {
        document.getElementById("result").innerText = data;
    })
    .catch(err => console.error("Error connecting to backend:", err));