document.getElementById("download").addEventListener("click", () => {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => display(data));
});
function display(data) {
    info = data["results"][0];
    data = document.createElement("div");
    data.setAttribute("id", "data");

    let picture = document.createElement("img");
    picture.src = info["picture"]["large"];
    data.appendChild(picture);

    let cell = document.createElement("p");
    cell.innerHTML = `Cell: ${info["cell"]}`;
    data.appendChild(cell);

    let email = document.createElement("p")
    email.innerHTML = `E-mail: ${info["email"]}`;
    data.appendChild(email);

    let country = document.createElement("p");
    country.innerHTML = `Country: ${info["location"]["country"]}`;
    data.appendChild(country);

    let coordinates = document.createElement("p");
    coordinates.innerHTML = `Coordinates: ${info["location"]["coordinates"]["latitude"]},
    									  ${info["location"]["coordinates"]["longitude"]}`
    data.appendChild(coordinates);

    document.getElementById("results").appendChild(data);
    document.getElementById("success").innerHTML = "";
}

