//1.
// 'use strict';

//2. Valina Javascript.
//let (ES6에서 추가 되었다.)


let globalname = '글로벌_스코프'
{
    let name = '짱구';
    name = '철수';
    console.log(globalname);
}
console .log(globalname);

//글로벌 스코프

//var 는 선언을 주지 않았어도 console에서 호출이 가능하였고,
//블럭스코프 안,밖 상관없이 내용을 불러올 수 있었다.

//3. Contants
//const 는 값을 변경할 수 없다.

const infinity = 1 / 0; 
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2);//false

const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
console.log(gSymbol1 === gSymbol2);//true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//symbole은 바로 출력하면 오류가 나니 description  를 넣어주어야 한다.



let text = 'hello';

console.log(`value: ${text}, type: ${typeof text}`);
// value : hello, type : string
text = 1; 
console.log(`value: ${text}, type: ${typeof text}`);
// value : 1, type : number
text = `7` + 5; 
console.log(`value: ${text}, type: ${typeof text}`);
// value : 75, type : string
text = `8` / `2`; 
console.log(`value: ${text}, type: ${typeof text}`);
// value : 4, type : number

//string 과 number 에서 주의할 점 ex) hello
console.log(text.charAt(0));//  첫번째 아이를 가져와야지~ >> h
//누가 type을 number로 바꿨을때!
console.log(text.charAt(0));//  첫번째 아이를 가져와야지~ >> error

//다이나믹 타입>> 런타임에서 타입이 정해지기 때문에 error가 뜨는 경우가 많음


