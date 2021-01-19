"user strict";


// class staff {
//     constructor(name, id, age) {
//         this.name = name;
//         this.id = id;
//         this.age = age;
//     }
// }

// class admin extends staff {
//     set privilege(access) {
//         this.access = access;
//     }
// }

// class intern extends staff {
//     set timeLeave(time) {
//         this.timeLeave = time;
//     }
// }

// let jimmy = new intern('Jimmy', 1234, 24);
// jimmy.access = true;
// console.log(jimmy);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with a speed of ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is standing still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} is hiding.`);
    }

    stop() {
        // This will be used for rabbit.stop(), overwrites parent Animal.stop()
        // To fix this
        super.stop(); // Call the parent stop
        this.hide(); // Then it hides
    }
}

let rabbit = new Rabbit('Peter');
rabbit.run(10);
rabbit.stop();