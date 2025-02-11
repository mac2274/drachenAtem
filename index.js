// easy way 
// let input = document.querySelector('#portions');
// let ingredientsDiv = document.querySelector('#ingredients');

// input.addEventListener('input', calcPortion); //EventHandler bei Input

// function calcPortion(){ //Definition der Funktion
//     let newPortion = input.value; //innerhalb der funktion wird der neue Wert erfasst
    
//     ingredientsDiv.innerHTML = `
//         <tr>
//             <td>${newPortion*1}</td>
//             <td>Huhn</td>
//         </tr>
//         <tr>
//             <td>${newPortion*10}g</td>
//             <td>Currypulver</td>
//         </tr>
//         <tr>
//             <td>${newPortion*250}ml</td>
//             <td>Kokosmilch</td>
//         </tr>
//         <tr>
//             <td>${newPortion*2}g</td>
//             <td>Ingwer</td>
//         </tr>
//         <tr>
//             <td>${newPortion*1}</td>
//             <td>Zwiebel/n</td>
//         </tr>
//         <tr>
//             <td>${newPortion*200}g</td>
//             <td>Reis</td>
//         </tr>
//         <tr>
//             <td>${newPortion*20}ml</td>
//             <td>Zitronensaft</td>
//         </tr>
//         <tr>
//             <td>${newPortion*0.5}g</td>
//             <td>Chili</td>
//         </tr>
//     `;
// }


// Lösung mit 3 Variablen
let input = document.querySelector('#portions');
let ingredientsDiv = document.querySelector('#ingredients');
let actualAmount = [1, 10, 250, 2, 1, 200, 20, 0.5];

let unitRecipe = document.getElementsByClassName('unit');
let ingredientUnit = ['','g','ml','g','','g','ml','g'];


input.addEventListener('input', calcFunction);

function calcFunction(){
    let inputPortion = input.value; //Wer aus input nehmen

    // im html-tag die neubeerchneten Werte ausgeben
    ingredientsDiv.innerHTML = ` 
         <tr>
            <td>${inputPortion*actualAmount[0]}${ingredientUnit[0]}</td>
            <td>Huhn</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[1]}${ingredientUnit[1]}</td>
            <td>Currypulver</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[2]}${ingredientUnit[2]}</td>
            <td>Kokosmilch</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[3]}${ingredientUnit[3]}</td>
            <td>Ingwer</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[4]}${ingredientUnit[4]}</td>
            <td>Zwiebel/n</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[5]}${ingredientUnit[5]}</td>
            <td>Reis</td>
        </tr>
        <tr>
            <td>${inputPortion*actualAmount[6]}${ingredientUnit[6]}</td>
            <td>Zitronensaft</td>
        </tr>
        <tr>
            <td>0.${inputPortion*actualAmount[7]}${ingredientUnit[7]}</td>
            <td>Chili</td>
        </tr>
    `;
}