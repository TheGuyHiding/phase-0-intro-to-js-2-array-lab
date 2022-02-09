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

function appendCat(){
    cats.splice("Broom");
    return cats;
}

function prependCat(){
    cats.slice("name");
    return cats;
}

function removeLastCat(){
    cats.slice(2);
    return cats;
}

function removeFirstCat(){
    cats.slice(0);
    return cats;
}