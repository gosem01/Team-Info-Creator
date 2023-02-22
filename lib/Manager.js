const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNUmber){
        super(name, id, email);
        this.officeNUmber = officeNUmber;
    }

    getOfficeNumber(){
        return this.officeNUmber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;