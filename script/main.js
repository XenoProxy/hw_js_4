//task 1
function task1(){
    let arr1 = [1, 2, 3, 4, 5];
    for(let i = 0; i < arr1.length; i++){
        document.write(`${arr1[i]}` + ' ');
    }
}

//task 2
function task2() {
    let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for(let i = 0; i < arr2.length; i++){
        if ((arr2[i] > -10) && (arr2[i] < -3)){
            document.write(`${arr2[i]}` + ' ');
        }
    }
}

//task 3
function task3(){
    let arr3_while = [];
    let arr3_for = [];
    let result = 0;

    for(let i = 23; i < 58; i++){
        arr3_for.push(i);
    }
    document.write(`Массив 'for': ` + arr3_for + `</br>`);

    let i = 23;
    while(i < 58){
        arr3_while.push(i);
        i++;
    }
    document.write(`Массив 'while': ` + arr3_while + `</br>`);

    for(let i = 0; i < arr3_for.length; i++){
        result += arr3_for[i];
    }
    document.write(`Сумма элементов массива: ${result}`);
}

//task4
function task4(){
    let arr4 = ['10','20','30','50','235','3000'];
    for(let i = 0; i < arr4.length; i++){
        if (
            arr4[i][0] == 1 || 
            arr4[i][0] == 2 || 
            arr4[i][0] == 5
        ) {
            document.write(`${arr4[i]}` + ' ');
        }
    }
}

//task 5
function task5(){
    let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (let i = 0; i < arr5.length; i++){        
        if (arr5[i] == 'СБ' || arr5[i] == 'ВС'){
            document.write(`<b>${arr5[i]}</b>` + ' ');
        } else {
            document.write(`${arr5[i]}` + ' ');
        }
              
    }
}

//task 6
function task6(){
    let arr6 = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];

    document.write(`Исходный массив: ${arr6} </br></br>`);    
    
    arr6.push('Ъ');    
    document.write(
        `Что в английском алфавите теперь делает исконно русский ${arr6[arr6.length-1]}? </br>${arr6} </br></br>`
    );

    document.write(
        `Ладно, пусть остаётся там. Теперь ${arr6[arr6.length-1]} - это последний добавленный элемент в массиве`
    );    
}

//task 7 
function task7(){
    let arr7 = [];
}