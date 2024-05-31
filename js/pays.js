(function () {
    console.log("rest API");

    // Add event listener to country menu links
    document.querySelectorAll(".pays-menu-unique a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            let countryName = event.target.getAttribute("data-country-name-unique");

            // URL of the WordPress REST API
            let url = `https://gftnth00.mywhc.ca/tim28/wp-json/wp/v2/posts?search=${countryName}`;

            // Perform the HTTP request using fetch()
            fetch(url)
                .then(function (response) {
                    // Check if the response is OK (HTTP status 200)
                    if (!response.ok) {
                        throw new Error(
                            "The request failed with status " + response.status
                        );
                    }

                    // Parse the JSON response
                    return response.json();
                })
                .then(function (data) {
                    // The "data" variable contains the JSON response
                    console.log(data);
                    let restapi = document.querySelector(".contenu__restapi-unique"); // Updated line
                    restapi.innerHTML = ""; // Clear the previous posts

                    // Now, you can process the data as you wish
                    // For example, extract the titles of the articles as in the previous example
                    data.forEach(function (article) {
                        let titre = article.title.rendered;
                        let contenu = article.content.rendered;
                        console.log(titre);
                        let carte = document.createElement("div");
                        carte.classList.add("restapi__carte");

                        carte.innerHTML = `
                            <h2>${titre}</h2>
                            <p>${contenu}</p>
                        `;
                        restapi.appendChild(carte);
                    });
                })
                .catch(function (error) {
                    // Handle errors
                    console.error("Error while retrieving data:", error);
                });
        });
    });
})();