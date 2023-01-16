
// Declaration d'une classe Person avec son constructeur ainsi que ses attributs
class Person{
    #nom=''
    #age=0
    #sexe=''
    constructor(nom,age,sexe){
        this.#nom=nom;
        this.#age=age;
        this.#sexe=sexe;
    }
  
 // Les getteurs permettent d'acceder aux attributs de la classe Person
    get_nom(){
        return this.#nom
    }
    get_age(){
        return this.#age
    }
    get_sexe(){
        return this.#sexe
    }
      
// Les Accesseurs permettent de changer les attributs de la classe Person
    set_nom(nom){
        return this.#nom=nom
    }
    set_age(age){
        return this.#age=age
    }
    set_sexe(sexe){
        return this.#sexe=sexe
    }
    InfoPerson(){
        return "Notre personne s'appele "+ this.#nom +
        " et a " + this.#age+ " ans de sexe "+this.#sexe
    }
}
// Instanciation de la classe Person avec les attributs du construteur ainsi que leur valeurs
    var person = new Person('root','16','masculin')  
 
// Affichage en console les caracteristiques de l'objet instancier
console.log("Notre personne s'appele "+ person.get_nom() +
 " et a " + person.get_age() + " ans de sexe "+ person.get_sexe())
console.log("Notre personne est maintemant "+ person.set_age('Geraldine')+
' avec un age de '+person.set_age('12')+" ans "+ 'et est de sexe '+ person.set_sexe('feminin'))
module.exports = Person