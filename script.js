let button1 = document.getElementById('btn');
let request = document.getElementById('request');
console.log('ready');


let isfriend = true;
function logic() {

    if(isfriend) {
        request.textContent = 'FRIEND';
        button1.textContent = ' Remove';
        button1.style.backgroundColor="red";
        request.style.color = "green";
        isfriend = false;
    }
    else{
        request.textContent = 'NOT FRIEND';
        button1.textContent = 'Add Friend';
        button1.style.backgroundColor="green";
        request.style.color = "red";
        isfriend = true;
    }
    
}

