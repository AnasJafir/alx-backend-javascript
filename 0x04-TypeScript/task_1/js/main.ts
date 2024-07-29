interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
    
interface Directors extends Teacher {
    numberOfReports: number;
}
    
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
}


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("Anas", "Jafir");
console.log(student.workOnHomework());
console.log(student.displayName());
