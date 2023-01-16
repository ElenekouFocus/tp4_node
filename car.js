// Importation de la classe Personne dans le fichier person.js

// Declaration d'une classe voiture avec son constructeur ainsi que ses attributs qui herite de la classe Person
class Voiture {
    // Declaration des variables attributs avec l'accessibilité private
    #marque = ""
    #modele = ""
    #annee = 0
    // Construction de l'objet voiture
    constructor(marque, modele, annee, proprietaire) {
        this.#modele = modele
        this.#marque = marque
        this.#annee = annee
        this.proprietaire = proprietaire
    }
    // Les getteurs et les setteurs permettent d'acceder et de modifier les attributs de la classe Person
    get_marque() {
        return this.#marque
    }
    set_marque(marque) {
        return this.#marque = marque
    }
    get_modele() {
        return this.#modele
    }
    set_modele(modele) {
        return this.#modele = modele
    }
    get_annee() {
        return this.#annee
    }
    set_annee(annee) {
        return this.#annee = annee
    }
    AfficheVoiture(){
        return "Cette voiture est une " + this.marque + ", modèle " + this.modèle + " de l'année " + this.année +
        " appartenant à Monsieur " + this.propriétaire
    }
}

// Instanciation de la classe voiture avec les attributs du construteur ainsi que leurs valeurs
    voiture_ipnet = new Voiture('BMW', 'nouveau', '1994')

// Affichage en console les caracteristiques de l'objet instancier
console.log("Notre voiture est " + voiture_ipnet.get_marque() +
    " de l'annee" + voiture_ipnet.get_annee() + " et de modele " + voiture_ipnet.get_modele())
    module.exports = Voiture