// // Parent And Child Class //

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     describe () {
//         console.log('I am ${this.name} and I am ${this.age} years old');
//     }
// }

// class Programmer extends Person {
//     constructor(_name, _age, _yearsOfExperience) {
//         super(_name, _age);

//         // Custom behavior
//         this.yearsOfExperience = _yearsOfExperience;
//     }

//     code () {
//         console.log('${this.name} is coding');
//     }
// }

// const programmers = [
//     new Programmer("Dom", 56, 12),
//     new Programmer("Jeff", 24, 4)
// ];


// function developSoftware (programmers) {
//        // Develop software
//        for(let programmer of programmers){
//         programmer.code();
//        }
// }

// developSoftware(programmers);