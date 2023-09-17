// * Referencing to the Buttons & link element.

const styleSheetLink = document.getElementById("stylesheet");
const styleButton1 = document.getElementById("styleButton1");
const styleButton2 = document.getElementById("styleButton2");
const styleButton3 = document.getElementById("styleButton3");

// * Adding Click Event Listeners to The Style Button 1 //

styleButton1.addEventListener('click', () => {
    styleSheetLink.href = "style.css"
});

// * Adding Click Event Listeners to The Style Button 2 //

styleButton2.addEventListener('click', () => {
    styleSheetLink.href = "./assets/variants/style-two.css"
});

// * Adding Click Event Listeners to The Style Button 3 //

styleButton3.addEventListener('click', () => {
    styleSheetLink.href = "./assets/variants/style.three.css"
});

