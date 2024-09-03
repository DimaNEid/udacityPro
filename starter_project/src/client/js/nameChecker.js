// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ];

//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!");
//     }
//     else {
//         alert("Enter a valid captain name");
//     }
// }

// export { checkForName };

function validateUrl(inputText) {
    console.log("::: Running validateUrl :::", inputText);
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    return regex.test(inputText);
}

export { validateUrl };
