
function readFromLocalStorage(key) {
    // Getting data from local storage
    let getFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let data = getFromLocalStorage ? getFromLocalStorage : [];
    return data; // returning array of object
}

function saveToLocalStorage(key, value) {
    // key is string and values is array of objects
    localStorage.setItem(key, JSON.stringify(value));
    // returns nothing
}