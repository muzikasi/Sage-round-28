function score(x){
    if(x>=50){
        console.log("Pass")
    }else{
        console.log("fail")
    }
}

score(45);

for (let i=3; i<=9; i++){
    console.log(i);
}

let i=0;

while(i<5){
    console.log(i)
    i++
}

let title = document.getElementById('title');
title.innerText = "This text is from Javascript!";