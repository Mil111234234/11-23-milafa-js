prompt('Как тебя зовут?');
let age = prompt('сколько тебе лет?');
if (age < 20){
    alert("Тебе меньше 20")
} else if(age> 20){
    for(var i = 0; i < 5; i++){
        alert('Привет')
    }
}

let vopros = confirm('Хочешь учить js?');
if (vopros == true){
    alert('супер')
} else {
    alert('ок')
}
    
