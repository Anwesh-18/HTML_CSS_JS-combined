const getTime = document.querySelector('.getTime');

getTime.addEventListener("click", () => {
    setInterval(function() {
    let time = new Date();
    box.innerHTML = time.toLocaleTimeString();
}, 1000);
});
// Learned about setInterval function which calls a function at specified intervals (in milliseconds).