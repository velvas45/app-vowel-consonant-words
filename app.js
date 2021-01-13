const inputText = document.getElementById("text");
const btnSubmit = document.getElementById('submitBtn');
const vowelHTML = document.getElementById("vowel");
const consonantHTML = document.getElementById('consonant');



const testing = (e) => {
    e.preventDefault();
    const vowelRegex = /[aiueo]/
    const textValue = inputText.value.toLowerCase();
    const textValueNoSpace = textValue.replace(/\s/g, '');
    const words = textValueNoSpace.split('');
    const filterVowel = words.filter(word => word.match(vowelRegex)).sort().join();
    const filterConsonant = words.filter(word => !word.match(vowelRegex)).sort().join();
    vowelHTML.innerHTML = filterVowel;
    consonantHTML.innerHTML = filterConsonant;
   
}

btnSubmit.addEventListener('click', testing)