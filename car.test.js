const Voiture = require('./car') // importation de la classe Voiture

test('Affiche les propriétés de la voiture', () => {
    // Création d'un objet Voiture
    let voiture_ipnet = new Voiture("BMW", "K", 2022, "focus");

    // Utilisation de la méthode AfficheVoiture
    voiture_ipnet.AfficheVoiture();

    // Vérification des propriétés de la voiture
    expect(voiture_ipnet.get_marque()).toBe("BMW");
    expect(voiture_ipnet.get_modele()).toBe("K");
    expect(voiture_ipnet.get_annee()).toBe(2022);
    expect(voiture_ipnet.proprietaire).toBe("focus");
});