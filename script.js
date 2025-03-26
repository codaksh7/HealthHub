document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/facilities")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("facility-list");
            data.forEach(facility => {
                const li = document.createElement("li");
                li.textContent = `${facility.name} - ${facility.type}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching facilities:", error));
});