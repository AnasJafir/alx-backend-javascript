interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
	}
	
let student1: Student = {
	firstName: "Anas",
	lastName: "Jafir",
	age: 29,
	location: "Casablanca"
	};
	
let student2: Student = {
	firstName: "Achraf",
	lastName: "Jafir",
	age: 27,
	location: "Marrakesh"
	};
	
let studentsList: Array<Student> = [student1, student2];

let table = document.createElement("table");


document.body.appendChild(table);

studentsList.forEach((student) => {
    
    let row = table.insertRow();

    
    let firstNameCell = row.insertCell(0);
    let locationCell = row.insertCell(1);

    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

