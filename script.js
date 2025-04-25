// Attend que le contenu HTML soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionne les éléments importants de la page
    const testForm = document.getElementById('personality-test');
    const questionsSection = document.getElementById('questions-section');
    const resultSection = document.getElementById('result-section');
    const loadingMessage = document.getElementById('loading-message'); // Sélectionne le message de chargement

    // Ajoute un écouteur d'événement pour la soumission du formulaire
    testForm.addEventListener('submit', (event) => {
        // Empêche le rechargement de la page par défaut lors de la soumission
        event.preventDefault();

        // Cache la section des questions
        questionsSection.classList.add('hidden');

        // Affiche le message "Analyse en cours..."
        loadingMessage.classList.remove('hidden');


        // Simule un temps de "calcul" (par exemple, 1.5 secondes)
        setTimeout(() => {
            // Cache le message "Analyse en cours..."
            loadingMessage.classList.add('hidden');

            // Affiche la section du résultat (qui contient toujours l'Émeraude)
            resultSection.classList.remove('hidden');

        }, 1500); // 1500 millisecondes = 1.5 secondes
    });

});
