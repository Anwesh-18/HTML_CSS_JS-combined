let timerid;

// choosing random color
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

const changeColor = () => {
    let str = randomColor();
    document.body.style.backgroundColor = str;
}

document.querySelector('#start').addEventListener('click',function(){
    // alert('Event started');
    timerid = setInterval(changeColor,1000)
})

document.querySelector('#stop').addEventListener('click',function(){
    alert('Event Terminated');
    clearInterval(timerid);
})