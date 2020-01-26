
function lab() {                                      // Вывод загаловка 
    let lab= document.createElement("h1");
    content2 = document.createTextNode(" Where is the apartment  . . . ? ");
    lab.appendChild(content2);
     conteyner1 = document.querySelector("#lab");
    conteyner1.appendChild(lab);  
let img = new Image();                  //Вывод картинки
img.src = 'dom2.png';
console.log(img);
conteyner1.appendChild(img);
};

lab();

let button = document.getElementById('idButt')// button.onclick = searchApartament(e)
button.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault();
    let apNum = document.getElementById('apNum').value;  //номер квартиры
    let maxFloor = document.getElementById('maxFloor').value; //  кол. этажей дома
    let quantityAp = document.getElementById('quantityAp').value;  // колю кв. на этаже
    const prFloor = Math.ceil(apNum / quantityAp);  //промежут кол. этажей
    podezd = Math.ceil(prFloor / maxFloor);  // определяем подъезд
    const youFloor = prFloor % maxFloor;  //определяем этаж
    if ((youFloor === 0) && (prFloor != 0)) {    //если кв. последняя на этаже, то нам на этом этаже нужно остатся но если этот этаж существует
    youFloor = maxFloor;
}
    test2('You apartament № ' + apNum  +" , podezd " + podezd + " , floor " + youFloor);
});

function test() {                                  //Создание элимента для вывода результата
    let elem = document.createElement("h1");
    elem.id = "elem";
    content = document.createTextNode(" ");
    elem.appendChild(content);
    const conteyner = document.querySelector("#z");
    conteyner.appendChild(elem);
};

test();                          
function test2(string) {                            //Обновление данных результата при повторном использовании формы
    let oldElem = document.getElementById("elem");
    oldElem.textContent = string;
};
