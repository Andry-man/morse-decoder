function decode(expr) {
    let firstMatrix = [];
    let arr = [];
    let morzeCod = []
    let morzeCodtwo = [];
    let morzeCodtree = "";
    let leng = expr.length/10;
    const table = {
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
      'sssss':  ' ',
  };
      for (let ine = 0; ine < expr.length; ine++) { //исходные данные кладём по ячейкам массива
    firstMatrix.push(expr[ine])
    }
      for (let index = 0; index < leng; index++) { //исходные данные разбиваем по ячейчам по 10 символов
    var answ = firstMatrix.slice(0, 10);
    arr.push(answ.join(''));
    for (let i = 0; i < leng; i++) { 
    firstMatrix.splice(0, 10);
    break
    }
     } 
    
     for (let index = 0; index < arr.length; index++) { // сортируем массив из 10 символов, по 2 символа
      var a = arr[index]
      var o = []
      for (var i = 0; i < a.length; i++) {
       var next = a[i + 1]
       var pair = '' + a[i] + (next ? next : '')
       o.push(pair)
       i++
      }
      morzeCod.push(o)
     }
     for (var i = 0; i < morzeCod.length; i++) { // если в массиве есть цифра 10 то пушим точку,если 11 то тире
       morzeCodtwo.push('"')
       let lMorzecod = morzeCod[i].length;
     for (let index = 0; index <lMorzecod; index++) {
       if (morzeCod[i][index] == 10) {
        morzeCodtwo.push('.')
       }
       if (morzeCod[i][index] == 11) {
        morzeCodtwo.push('-')
       }
       if (morzeCod[i][index] == '**') {
        morzeCodtwo.push('s')
       }
     }
     }
    let sortCodtree = morzeCodtwo.join('').split('"')
    console.log(sortCodtree[11])
    for (let index = 1; index < sortCodtree.length; index++) { //вставляем вместо морзе кода-буквы
      if (sortCodtree[index] == '.-') { //a
        morzeCodtree+=table['.-']
      }
      if (sortCodtree[index] == '-...') {//b
        morzeCodtree+=table['-...']
      }
      if (sortCodtree[index] == '-.-.') {//c
        morzeCodtree+=table['-.-.']
      }
      if (sortCodtree[index] == '-..') {//d
        morzeCodtree+=table['-..']
      }
      if (sortCodtree[index] == '.') {//e
        morzeCodtree+=table['.']
      }
      if (sortCodtree[index] == '..-.') {//f
        morzeCodtree+=table['..-.']
      }
      if (sortCodtree[index] == '--.') {//g
        morzeCodtree+=table['--.']
      }
      if (sortCodtree[index] == '....') {//h
        morzeCodtree+=table['....']
      }
      if (sortCodtree[index] == '..') {//i
        morzeCodtree+=table['..']
      }
      if (sortCodtree[index] == '.---') {//j
        morzeCodtree+=table['.---']
      }
      if (sortCodtree[index] == '-.-') {//k
        morzeCodtree+=table['-.-']
      }
      if (sortCodtree[index] == '.-..') {//l
        morzeCodtree+=table['.-..']
      }
      if (sortCodtree[index] == '--') {//m
        morzeCodtree+=table['--']
      }
      if (sortCodtree[index] == '-.') {//n
        morzeCodtree+=table['-.']
      }
      if (sortCodtree[index] == '---') {//o
        morzeCodtree+=table['---']
      }
      if (sortCodtree[index] == '.--.') {//p
        morzeCodtree+=table['.--.']
      }
      if (sortCodtree[index] == '--.-') {//q
        morzeCodtree+=table['--.-']
      }
      if (sortCodtree[index] == '.-.') {//r
        morzeCodtree+=table['.-.']
      }
      if (sortCodtree[index] == '...') {//s
        morzeCodtree+=table['...']
      }
      if (sortCodtree[index] == '-') {//t
        morzeCodtree+=table['-']
      }
      if (sortCodtree[index] == '..-') {//u
        morzeCodtree+=table['..-']
      }
      if (sortCodtree[index] == '...-') {//v
        morzeCodtree+=table['...-']
      }
      if (sortCodtree[index] == '.--') {//w
        morzeCodtree+=table['.--']
      }
      if (sortCodtree[index] == '-..-') {//x
        morzeCodtree+=table['-..-']
      }
      if (sortCodtree[index] == '-.--') {//y
        morzeCodtree+=table['-.--']
      }
      if (sortCodtree[index] == '--..') {//z
        morzeCodtree+=table['--..']
      }
      if (sortCodtree[index] == '.----') {//1
        morzeCodtree+=table['.----']
      }
      if (sortCodtree[index] == '..---') {//2
        morzeCodtree+=table['..---']
      }
      if (sortCodtree[index] == '...--') {//3
        morzeCodtree+=table['...--']
      }
      if (sortCodtree[index] == '....-') {//4
        morzeCodtree+=table['....-']
      }
      if (sortCodtree[index] == '.....') {//5
        morzeCodtree+=table['.....']
      }
      if (sortCodtree[index] == '-....') {//6
        morzeCodtree+=table['-....']
      }
      if (sortCodtree[index] == '--...') {//7
        morzeCodtree+=table['--...']
      }
      if (sortCodtree[index] == '---..') {//8
        morzeCodtree+=table['---..']
      }
      if (sortCodtree[index] == '----.') {//9
        morzeCodtree+=table['----.']
      }
      if (sortCodtree[index] == '-----') {//0
        morzeCodtree+=table['-----']
      }
      if (sortCodtree[index] == 'sssss') {//' '
        morzeCodtree+=table['sssss']
      }
    } 
  
    return morzeCodtree;   //расшифрованый код 
}

module.exports = {
    decode
}