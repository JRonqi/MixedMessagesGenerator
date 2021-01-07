/* 
    Codecademy Portfolio Project: Mixed Messages Generator
    Created by: JRonqi
*/

function generateRandomNumber(num) {
    // Gets # from 0 -> (num - 1)
    return Math.floor(Math.random() * num)
}

//Storing Output strings into object arrays
const fortuneTeller = {
    newFriends: ['Scarlett Johansson', 'Gal Gadot', 'Keanu Reeves', 'Johnny Depp', 'The Weeknd', 'Rosalía', 'Dua Lipa',
               'Leo Messi', 'Cristiano Ronaldo','Kim Jong-un','Will Smith', 'your future wife', 'Rihanna', 'your future husband',],

    cities: ['New York', 'Madrid', 'London', 'Rio de Janeiro', ' Pionyang', 'Rome', 'Paris', 'Mexico', 'Buenos Aires', 'Tokyo', 'Moscow',
            "your grandmother's house", 'the supermarket', 'the Hospital'],

    newLanguage: ['JavaScript', 'PHP', 'Python', 'C++', 'SQL', 'Japanese', 'Spanish', 'Chinese', 'Italian', 'High Valyrian', 'Dothraki'],

    //extra emoji/array for fun
    emojisAscii: ['Front-End developer ⊂(◉‿◉)つ', 'Full-Stack developer ᕦ(ò_óˇ)ᕤ', 'Back-End developer ¿ⓧ_ⓧﮌ']

}

//To empty array to store output message
let nextFuture = []

//for each object item in object fortuneTeller
for(let item in fortuneTeller) {
    
    //calls function random generated number and assigns variable to act as index(range is the size of the array)
    let optionIdx = generateRandomNumber(fortuneTeller[item].length)

    //For each item push into an array the value of item at index location
    switch(item) {
        case 'newFriends':
        nextFuture.push(`You'll meet ${fortuneTeller[item][optionIdx]}.`)
        break
        case 'cities':
        nextFuture.push(`You'll travel to ${fortuneTeller[item][optionIdx]}.`)
        break
        case 'newLanguage':
        nextFuture.push(`You'll learn ${fortuneTeller[item][optionIdx]}.`)
        break
        case 'emojisAscii':
            nextFuture.push(`You'll work as a ${fortuneTeller[item][optionIdx]}.`)
            break
        default:
        nextFuture.push('Error!, Invalid Item')
    }
}

//Function to print strings in newline
function formatFuture(future) {
    //Using join method to concate all strings in nextFuture array
    const formatted = nextFuture.join('\n')
    console.log(formatted)
}

formatFuture(nextFuture);