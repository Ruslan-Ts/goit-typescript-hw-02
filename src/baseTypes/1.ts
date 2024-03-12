// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty:null = null;
let notInitialize: undefined;
let callback = (a: number):number => { return 100 + a };

export {};


class Team {
    members: Programmer[];
    constructor(members: Programmer[]) {
        this.members = members;
    }
    startProject() {
        this.members.forEach(member => member.code());
    }
}

class Programmer {
    code():void {
        console.log('Coding...');
    }
}

const programmers = [new Programmer(), new Programmer()];
const team = new Team(programmers); team.startProject();


class Computer {
    processor: Processor;
    constructor() {
        this.processor = new Processor();
    } start():void {
        this.processor.processData();
    }
}
class Processor {
    processData(): void {
        console.log('Processing data...');
    }
}

const computer = new Computer(); computer.start();