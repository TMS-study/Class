// Task 1 
// Создайте класс Animal, в конструктор которого передается имя, и с помощью метода данного класса можно вывести фразу `This is a <animalType>. It's name is <name>`. Так же данный класс должен иметь статическое поле animalType, значение которого должно подставляться в фразу, которую выводит метод выше.

class Animal {
    name: string;

    static animalType: string = 'Bird';

    constructor(name: string){
        this.name = name;
    }

    showAnimal(){
        return `This is a ${Animal.animalType}. It's name is ${this.name}`
    }
}

const egglse = new Animal('Borat').showAnimal();
console.log(egglse);