document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".pays-menu a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            let countryName = event.target.textContent;

            let url = `https://gftnth00.mywhc.ca/tim28/wp-json/wp/v2/posts?search=${countryName}`;

            fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("The request failed with status " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {
                    let restapiPays = document.querySelector(".contenu__restapi__pays");
                    if (restapiPays) {
                        restapiPays.innerHTML = "";
                        data.forEach(function (article) {
                            let titre = article.title.rendered;
                            let contenu = article.content.rendered;
                            let carte = document.createElement("div");
                            carte.classList.add("restapi__carte__pays");

                            carte.innerHTML = `
                                <h2>${titre}</h2>
                                <p>${contenu}</p>
                            `;
                            restapiPays.appendChild(carte);
                        });
                    }
                })
                .catch(function (error) {
                    console.error("Error while retrieving data:", error);
                });
        });
    });
});