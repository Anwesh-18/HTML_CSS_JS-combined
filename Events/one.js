// Not suggestable 
// document.getElementById("one").onclick = function() {
//     alert("You clicked on the first image");
// }

// There are more ways like attachEvent()
// jQuery - on
document.getElementById('one').addEventListener('click', function (e) {
    console.log('You clicked on the first image');
}, false);
// type
// timeStamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, metaKey, keyCode
// button, buttons
// relatedTarget

document.getElementById('images').addEventListener('click', function (e) {
    console.log('You clicked on the ul');
}, false);

document.getElementById('two').addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('You clicked on the second image');
}, true);

// if true in ul case then the event is captured first by ul then goes to li
// if false in ul case then the event is captured first by li then goes to ul

document.getElementById('four').addEventListener('click', function (e) {
    console.log('You clicked on the link');
    e.preventDefault();
    e.stopPropagation();
}, false);

// Event Delegation
// Instead of adding event listeners to multiple similar elements, we can add a single event listener to their common parent element. This is called event delegation. The event listener on the parent element can then check the event target to determine which child element was interacted with and respond accordingly.

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
    // There is also a removeChild method we can use to remove the element we want
})