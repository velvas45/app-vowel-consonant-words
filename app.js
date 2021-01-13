const inputText = document.getElementById("text");
const btnSubmit = document.getElementById('submitBtn');
const vowelHTML = document.getElementById("vowel");
const consonantHTML = document.getElementById('consonant');

// function vowelAndConsonan
const vowelAndConsonan = () => {
    // regex untuk mencari huruf vocal
    const vowelRegex = /[aiueo]/
    // algoritma
    // masukkan kalimat -> diubah ke lowercase
    const textValue = inputText.value.toLowerCase();
    // ganti kalimat menjadi tidak ada spasi/whitespace
    const textValueNoSpace = textValue.replace(/\s/g, '');
    // ubah kalimat menjadi sebuah huruf -> bentuknya array
    const words = textValueNoSpace.split('');
    // filter huruf tersebut jika ada consonan maka masuk ke consonan, jika huruf vocal masuk ke vocal sekalian sorting untuk kedua huruf tadi => berubah menjadi string karena join. 
    const filterVowel = words.filter(word => word.match(vowelRegex)).sort().join(); 
    const filterConsonant = words.filter(word => !word.match(vowelRegex)).sort().join();
    // return ke html / console.log
    vowelHTML.innerHTML = filterVowel;
    consonantHTML.innerHTML = filterConsonant;
   
}

btnSubmit.addEventListener('click', vowelAndConsonan)