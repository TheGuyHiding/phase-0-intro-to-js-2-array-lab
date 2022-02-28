// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats,name];
}

function prependCat(name){
    return [name,...cats];
}

function removeLastCat(newCats){
    newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat(newCats){
    newCats = [...cats];
    newCats.shift();
    return newCats;
}