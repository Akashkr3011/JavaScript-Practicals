// Name: Akash Kumar
// Roll No.: 2510303060
// Assignment No.: 9
// Task No.: 2

function validateForm(name) {
    const errors = [];

    if (name.trim() === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
