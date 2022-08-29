
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

function studentSearchLoadHandler() {
    var count = readFromLocalStorage("counter");
    if (count <= 1) {
        alert(`Hey, I need your support. You will be redirected to a LinkedIn post, do like it; thanks!`);
        var link = "https://www.linkedin.com/feed/update/urn:li:activity:6969896146219462656/?ref=therajababu.com";
        window.open(link, '_blank');
    }

    if (count >= 15) {
        var vahana = document.getElementById("vahana");
        vahana.style.display = `none`;
    }
    count++;
    saveToLocalStorage("counter", count);
    console.log("count-", count);
}