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
    let a;
    while(true){
        a = prompt(`Введите число`);
        if(a == ``){
            break;
        }else { 
            arr7.push(a);
        }   
    }
    document.write(`Несортированный массив: ${arr7}`) ;   
    let sort_arr7 = [];
    sort_arr7 = arr7.sort(function(a, b) {
        return a-b;
    });
    document.write(`Отсортированный массив: ${sort_arr7}`);
}

//task 8
function task8(){
    let arr8 = [12, false, `Текст`, 4, 2, -5, 0];
    document.write(`Исходный массив: ${arr8} </br>`);
    let rev_arr8 = arr8.reverse();
    let i = 0;
    document.write(`Реверсивный массив: `);
    while(i < arr8.length){
        document.write(`${rev_arr8[i]}` + ',');
        i++;
    }
}

//task 9
function task9(){
    let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
    let count = 0;
    for (let i = 0; i < arr9.length; i++){
        if (arr9[i] == undefined){
            count++;
        }
    }
    document.write(count);
} 

//task 10
function task10(){
    let arr10_1 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
    let arr10_2 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
    let sum_arr10_1 = sum_btw_nulls(arr10_1);
    let sum_arr10_2 = sum_btw_nulls(arr10_2);
    document.write(`Сумма первого массива: ${sum_arr10_1} </br>`);
    document.write(`Сумма второго массива: ${sum_arr10_2}`);
}

function sum_btw_nulls(arr){
    let index = arr.indexOf(0);
    let last_index = arr.lastIndexOf(0);
    let sum = 0;
    for(index; index < last_index; index++){
        sum += arr[index]
    }
    return(sum);
}

//task 11
function task11(){

    // В задании использовался символ &nbsp (non-breaking space)
    // Это специальный символ, который при отображении в браузере выглядит как обычный пробел,
    // но имеет одну, очень важную особенность. При задании символ &nbsp мы получим заданное
    // пространство между словами, которое ни в коем случае не будет разорвано при перестроении текста.
    let height = prompt(`Введите высоту треугольника: `);     
    let weight = (height - 1);

    let symbol = `^`;      //символы заполнители
    let space =  `&nbsp`;
    
    // В цикле на каждой итерации будет создаваться строка.
    // В строку сначала вставляются пробелы в кол-ве половины ширины треугольника
    // затем символы-заполнители и снова пробелы, в том же кол-ве, что и первые
    // кол-во добавляемых пробелов уменьшается с каждой итерацией.
    for (let i = 1; i <= height; i++){
        document.write(
            space.repeat(weight) + symbol.repeat(i) + space.repeat(weight) +`<br>`
        );
        weight--;
    }
}
