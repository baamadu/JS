const addButton = document.querySelector('.add-users');
console.log(addButton);
 
let addUser = document.querySelector('.add-users');
addButton.addEventListener('click', function () {
    console.log('De knop werkt!');
});
 
addButton.addEventListener('click', function () {
    const voornaam = prompt('Wat is je voornaam?');
    const achternaam = prompt('Wat is je achternaam?');
    const leeftijd = prompt('Wat is je leeftijd?');
 
    
    if (!voornaam || !achternaam || !leeftijd) {
        alert('Alle velden moeten worden ingevuld!');
    } else {
        
        if (isNaN(leeftijd) || leeftijd <= 0 || leeftijd > 140) {
            alert('Voer een geldige leeftijd in (tussen 1 en 140).');
        } else {
            const gebruikerInfo = voornaam + " " + achternaam + ", Leeftijd: " + leeftijd;
            const lijst = document.querySelector('.all-users');
            lijst.innerHTML += "<ul>" + gebruikerInfo + "</ul>";
        }
    }
});






