const Person = require('./person'); // importation de la classe persons

test('Affiche les propriétés de la personne', () => {
    // Création d'un objet personne
    let personne = new Person("Focus", "25ans", "Masculin");

    // Utilisation de la méthode InfoPerson
    personne.InfoPerson();

    // Vérification des propriétés de la personne
    expect(personne.get_nom()).toBe("Focus");
    expect(personne.get_age()).toBe("25ans");
    expect(personne.get_sexe()).toBe("Masculin");
});