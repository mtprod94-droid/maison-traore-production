// =========================================
// MAISON TRAORÉ PRODUCTION
// MAIN JAVASCRIPT
// =========================================


// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});

const castingForm = document.getElementById("casting-form");

if (castingForm) {

    castingForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton = castingForm.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;

        submitButton.textContent = "ENVOI EN COURS...";


        const formData = new FormData(castingForm);


        try {

            const response = await fetch(
                castingForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                castingForm.innerHTML = `
                    <div class="form-success">

                        <span>✓</span>

                        <h3>
                            Candidature envoyée.
                        </h3>

                        <p>
                            Merci pour votre candidature.
                            Maison Traoré Production
                            vous contactera si votre profil
                            correspond à l'un de nos prochains
                            projets.
                        </p>

                    </div>
                `;

            } else {

                submitButton.disabled = false;

                submitButton.textContent =
                    "ENVOYER MA CANDIDATURE";

                alert(
                    "Une erreur est survenue. Veuillez réessayer."
                );

            }

        } catch (error) {

            submitButton.disabled = false;

            submitButton.textContent =
                "ENVOYER MA CANDIDATURE";

            alert(
                "Impossible d'envoyer la candidature. Vérifiez votre connexion."
            );

        }

    });

}
