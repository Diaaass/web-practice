// Student marks
const students = [
    { name: "Alice", marks: [85, 78, 92] },
    { name: "Bob", marks: [70, 65, 80] },
    { name: "Charlie", marks: [90, 95, 93] },
];

// Function to calculate average and determine grade
function calculateGrades(students) {
    const grades = [];
    students.forEach(student => {
        const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
        const average = totalMarks / student.marks.length;

        let grade;
        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else if (average >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        grades.push({ name: student.name, average: average.toFixed(2), grade });
    });
    return grades;
}

console.log(calculateGrades(students));

// Function to handle double click event
function onDoubleClick() {
    alert("Element double-clicked!");
}

// Add event listener to an element
const element = document.getElementById("myElement");
element.addEventListener("dblclick", onDoubleClick);

// FizzBuzz program
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
