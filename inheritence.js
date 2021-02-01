class Parent {
    constructor() {
        this.fatherName = "Korim";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + "bin" + " " + this.fatherName;
    }
}

const baby = new Child('Robin');
const baby2 = new Child('Sabbir');
console.log(baby.getFullName());
console.log(baby2);