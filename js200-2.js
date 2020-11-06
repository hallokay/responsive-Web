
    //표준 내장 객체의 이해
    //전역스코프 안에 있는 객체 참조 자스흫 실행할때 어쩐 환경 (브라우저, 서버) 이라도 전역에서 사용가능

    const str = new String('자바 스크립트');
    const num = new Number(200);
    const bool = new Boolean(true);
    const date =  new Date();
    const map = new Map();
    //키: 값 데이터 구조를 지닌 데이터 집합체
    const set = new Set();
    //오직 값으로 이루어진 데이터 집합체

    console.log(Math.PI);
    console.log(Date.parse('2020=10-01'));
    console.log(JSON.parse('{}'));


    const str1 = 'js 200제';
    const str2 = new String('자바 스크립트 200제');

    // console.log(typeOf str1);
    // console.log(typeOf str2);

    console.log(str1 === 'js 200제');
    console.log(str2 === new String('자바 스크립트 200제'));

    console.log(str1.valueOf());
    console.log(str2.valueOf());

console.clear();

{
    //자료형 확인
    // typeof는 특정 원시 자료형 확인 원시자료형과 객체형을 구분하기 위해
    // instanceof 는 객체 확인을 위해 어떤 종류의 객체인지

    // NaN(Not a Number)숫자가 아님 값 확인하기
    console.log(Number.isNaN(NaN));
    // NaN이면 true 아니면 false

//  음수는 숫자 자료형 그래서 false 반환
//0을 0으로 나누는 것은 숫자가 아님 true
console.log(Number.isNaN(new Date()));
//날짜는 숫자임으로 false
console.log(Number.isNaN(new Date().toString));
//문자열은 NaN이 아니기때문에 false
console.log(Number.isNaN('infinity'));
//무한대는 숫자형으로 구분됨 false

function verifyNumber(n){
    if(!n || Number.isNaN(n)) return 0;
    return n;
}
//함수에 대입된 값이 빈 값이거나 숫자가 아니면 0리턴
//그대로이면 그대로 반환
const num1 = verifyNumber(15); 
const num2 = verifyNumber(undefined); 
const num3 = verifyNumber(null); 
const num4 = verifyNumber(NaN); 
console.log(num1 + num2 + num3 + num4);
}

{
    //정수 확인 isInteger
    console.log(Number.isInteger(-1));
    //정수이면 true 0 -1 77777777 은 정수 true
    //null 0/0 'infinity' true {} 는 false 반환

    function verifyInteger(n){
        if(!Number.isInteger(n)) return 0;
        return n;
    }
    const num1 = verifyInteger(15); 
    const num2 = verifyInteger(Infinity); //0
    const num3 = verifyInteger(0.05); //0
    console.log(num1, num2, num3);
}
{
    //배열 자료형 확인 isArray
    function callRoll(students) {
        if(!Array.isArray(students)) return;
        //만약 students 변수가 배열이 아니면 빠져나가기

        students.forEach((student) => {
            console.log(` 여기있닝? ${student}`);
        });

    }
    const students = ['kay', 'bungbung', 'hungnyang', 'zzizzi'];
    callRoll(students);
}

{
//문자열 양끝 공백 없에기 trim
const sentences = ['      ABC  abc', 'ABC  abc    ', `first second third

      forth
      sentence
      
`];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;

}
 console.log(filterSentence(sentences));
}
{
    //문자열 자르기 slice
    // '문자열'.slice(시작인덱스, 종료인덱스)
    const sentence = 'the sun will shine on us again';
    console.log(sentence.slice(13));
    //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환됨
    console.log(sentence.slice(13,24));
    console.log(sentence.slice(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.slice(0, -23));
    //-23은 뒤에서부터 23번째 문자를 의미 
    console.log(sentence.slice(50));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.slice(7,2));
    //첫번째인자가 두번째 인자보다 크면 출력되지 않음
}

{
    //문자열 자르기 2 substring
    // '문자열'.substring(시작인덱스, 종료인덱스)
    const sentence = 'this will be the end of Wakanda';
    console.log(sentence.substring(13));
       //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환됨
    console.log(sentence.substring(13,20));
    console.log(sentence.substring(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.substring(0, -23));
    //음수는 정상 출력되지 않음 
    console.log(sentence.substring(50));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.substring(7,2));
    //(2,7)과 같은 값이 나옴
}
{
        //문자열 자르기 2 substr
    // '문자열'.substr(시작인덱스, 길이)
    const sentence = 'Wakanda forever!!!';
    console.log(sentence.substr(8));
       //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환
    console.log(sentence.substr(8,7));
    //8부터 7개 인덱스 불러짐
    console.log(sentence.substr(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.substr(-10));
    //음수는 뒤에서부터 출력 끝까지
    console.log(sentence.substr(0,-3));
    //두번째 인자에 음수를 넣으면 정상출력이 안됨
    console.log(sentence.substr(30));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.substr(0,30));
    //0부터 끝가지 출력됨
}

{
    // 문자열 길이 구하기 length
    // 문자열.length
    const arr = ['short', 'long sentence, it is not appropriate'];

    arr.forEach(str => {
        if(str.length < 10) console.log(str);
    });
    //arr를 각각의내부요소로 접근 그때 인자의 길이가 10보다 작으면 출력 
}
{
    //문자열로 반환 toString
    const num = 5;
    const bool = true;
    const str = '문자열 값';
    const arr = [1,2,3];
    const obj = {a: 15};

    console.log(num.toString());
    console.log(bool.toString());
    console.log(str.toString());
    console.log(arr.toString());
    console.log(obj.toString());

    // num.__proto__.toString = () => {
    //     return 'toString 덮어쓰기';
    // };
    //num에서 __proto__ f를 통해 toString 메소드 직접재정의
    console.log(num.toString());
}

{
    // 두개의 문자열 하나로 합치기 concat
    const str1 = 'good afternoon';
    const str2 = ', good evening';
    const str3 = ', and good night!';
    const str4 = ' - the truman Show, 1998';
    console.log(str1.concat(str2, str3, str4));
    //concat보다 연산자가 더 많이 사용됨
}
console.clear();
{
    //특정위치 문자 반환 charAt
    const str = 'good afternoon, good evening, and good night!' 
                + ' - the truman Show, 1998';

    console.log(str.charAt(0));
    console.log(str.charAt(5));
    console.log(str.charAt(14));
    console.log(str.length);
    console.log(str.charAt(500));
    //존재하지 않기에 빈값 출력
}

{
    //특정 문자열 위치 확인 indexOf
    const str = 'Carpe diem, seize the day';
    console.log(`e는 ${str.indexOf('e')}에 있습니다`);
    console.log(`대문자 C는 ${str.indexOf('C')}에 있습니다`);
    console.log(`소문자 c는 ${str.indexOf('c')}에 있습니다`);
    //소문자 c는 없기때문에 -1반환
    console.log(`문자열 ", se"는 ${str.indexOf(', se')}에 있습니다`);

    const arr = ['Carpe', 'diem', 'seize', 'the','day'];
    const howManyHasE = (arr) => {
        let count = 0
        arr.forEach((str) => {
            if(str.indexOf('e') > -1) count++;
        });
        return count;
    }

    console.log(`${arr}에 e가 있는 요소는 모두 ${howManyHasE(arr)}개 있습니다`);
}

{
    //특정 문자열 위치 확인 lastIndexOf
    //뒤에서부터 위치 확인 뒤에서부터 0번인덱스 
    const str = 'Carpe diem, seize the day';
    console.log(`e는 ${str.lastIndexOf('e')}에 있습니다`);
    console.log(`대문자 C는 ${str.lastIndexOf('C')}에 있습니다`);
    console.log(`소문자 c는 ${str.lastIndexOf('c')}에 있습니다`);
    //소문자 c는 없기때문에 -1반환
    console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')}에 있습니다`);
}

{
    //특정 문자열 포함여부 알아보기 includes
    // 문자열.includes(문자열, 인덱스)
    //두번째 인자는 필수값이 아님 지정하면 해당 인덱스 위치부터 문자열 확인
    //true/ false반환

    const str = 'Make your lives extraordinary';

    console.log(str.includes('Make'));
    console.log(str.includes('Make', 1));
}

{
 //문자열 대소문자 변환
 console.log('find your one voice'.toLowerCase());
 console.log('find your one voice'.toUpperCase());

 const value = 'find your one voice';
 console.log(value.toLowerCase() === value.toUpperCase());
}

{
    //배열요소 분할/ 변환하기 from
    // Array.from(배열로 변환될 값, 반환될 배열내부 요소에 대한 callback함수)
    // 두번쨰인자는 필수값이 아님-callback 함수를 대입하면 분할과 동시에 각 값을 변환시킬수 있음
    
    const str = '123456';

    const distributedArr = Array.from(str);
    console.log(distributedArr);

    const modifiedArr = Array.from(distributedArr, el => el*2 );
    console.log(modifiedArr);
}
console.clear();

{
    // 문자열을 특정 구분자에 의해 배열로 나누기 split
    const capitals = `prague, czeco Republic
    Copenhagen, Denmark
    Paris, France
    Madrid, Spain
    Rome, Italy`

    capitals.split('\n').forEach(s => {
        const capital = s.split(',')[0];
        const country = s.split(',')[1];
        console.log(`${capital} is in ${country}`);
    });
// capitals 의 문자열 값을 줄바꿈으로 분리
//배열로 변환된 값은 forEach로 접근
//각 문장을 다시 split로 배열로 변환 구분자는 ,로 분리된 배열 0 인덱스요소는 캐피탈에
//1인덱스는 컨츄리에 대입 
}

{
    //배열뒤에 요소 추가 push
//자바스크립트 배열 자료형은 Linked List 자료구조형태를 가지고 잇다
//따라서 앞뒤에 요소추가하는 것이 가능
const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name => {
    console.log(name);
});
}

{
    //배열 앞에 요소 추가 unshift
    const festa = ['mang'];
festa.unshift('chimmy');
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('shooky');
festa.unshift('koya');
festa.unshift('rj');

festa.forEach(name => {
    console.log(name);
});
}
{
    //배열 길이 구하기 length
    const ship = {
        max: 4,
        passengers: [],
        onBoard: function(name){
            if (this.passengers.length === 4) {
                console.log(`this ship is full. ${name} can not board this ship.`);
            } else {
                this.passengers.push(name);
                console.log(`${name} boarded`);
            }
        }
    }

    ship.onBoard('kay');
    ship.onBoard('bomi');
    ship.onBoard('suk');
    ship.onBoard('jay');
    ship.onBoard('chole');
    ship.onBoard('daniel');
}
console.clear();

{
    //배열 합치기 concat

    const prevList = [1,2,3];
    const currList = [4,5,6];
    const nextList = [7,8,9];

    console.log(prevList.concat(currList));
    console.log(prevList.concat(currList,nextList));

    console.log(['배열'].concat('합치기'));
    console.log(['배열'].concat('합치기','js200'));
} 
{
//배열에 특정 구분자를 넣어 문자형으로 변환하기 join
const dialog = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you'
];
console.log(dialog.join('.'));
//구분자 .을 넣어서 합친다
console.log(dialog.join('.\n'));
//구분자 .과 줄바꿈을 이용해 합친다
}

{
    // 배열 마지막 요소 추출 pop
    const arr = [1,2,3];
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    //개수보다 많이 호출되면 undefined
    //마지막 요소가 추출되면서 원본 배열도 수정됨

}
{
    // 배열 맨앞 요소 추출 shift
    const arr = [1,2,3];
    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
    //개수보다 많이 호출되면 undefined
    //호출과 동시에 원본 배열도 수정됨
}

{
// 배열의 특정 위치의 요소 추출 slice
//시작 인덱스 부터 끝 인덱스 지정 단, 끝 인덱스의 요소는 포함이 안됨 끝번호의 이전까지
// 배열.slice(시작 인덱스, 끝 인덱스)

const arr = ['멜론','레몬','소스', '사과', '쥬스'];
console.log(`과일이 아닌 요소는 ${arr.slice(2,3)}와 ${arr.slice(4,5)}`);
console.log(arr.slice(0,10));
//더 큰 값을 넣으면 배열 가장 마지막까지 반환

}

{
    // 배열 인덱스로 특정 요소 수정 splice
    // 배열.splice(시작 인덱스,삭제할 요소 개수 , 추가 요소)
    // 시작 인덱스부터 삭제하고자 하는 개수만큼 삭제되고 시작인덱스부터 추가됨
    const fruits =  ['멜론','레몬','소스', '사과', '쥬스'];

    fruits.splice(4,1);
    fruits.splice(4, 0, '포도');
    fruits.splice(2, 1, '귤', '바나나','딸기');
    console.log(fruits);
}

console.clear();

{
    // 배열의 특정 요소 위치 확인indexOf
    // 배열.indexOf(검색할 값, 시작 인덱스);

    const arr = ['spring','summer','fall', 'winter', 'is', 'down'];

    console.log(`winter is in this index ${arr.indexOf('winter')}`);
    console.log(`winter is not in here, look this value ${arr.indexOf('winter', 4)}`);
}
{
    // 배열 순환하기 forEach
    // 배열.forEach(callback함수)
    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},

    ];

    arr.forEach((el) => {
        console.log(el.name);
    });
    //arr는각각 el로 받아오고 el의 name속성 출력
}

{
    // 배열 정렬 sort

    // 배열.sort(function(a,b){
    //     return 비교값;
    // })
//  비교값 > 0 a가 b보다 작은 숫자 인덱스를 가진다 작은 인덱스란 배열 앞에 위치 
//  비교값 < 0 b가 작은 숫자 인덱스를 가짐 b가 앞에 위치
//  비교값 = 0 a와 b의 위치를 변경하지 않음

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'leo'},
    {id: 0, name: 'kay'},
    {id: 3, name: 'bomi'},
    {id: 1, name: 'jason'},
    {id: 4, name: 'lena'},
];

numArr1.sort(function(a, b){
    return a - b;
    //a-b를 리턴 오름차순 정렬
});
    
numArr2.sort(function(a, b){
    return b - a;
    //b-a를 리턴 내림차순 정렬
});
objArr.sort(function(a, b){
    if(a.name > b.name) return 1;
    //a의 이름이 b이름보다 크면 1반환  즉 a를 b앞에 정렬시킴
    else if (b.name > a.name) return -1;
    //반대의 경우 b가 a앞에 정렬됨
    else return 0;
    //속성값이 같으면 0반환
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
}

{
    //reverse 배열순서 반대로 나열하기

 const str = 'abcdefghijklmnopqrstuvwxyz';
 const arr = str.split('');
 //문자열을 배열로 변환 
 arr.reverse();
 //반대로 나열

 console.log(arr.join(''));
 //배열arr은 구분자 없이 한 문자열로 병합됨
}

{
    //배열 요소가 특정 조건을 만족하는지 확인 some
    // some메소드는 callback함수의 리턴값이 트루를 반환할때까지만 배열 요소 순환
    // 마지막 요소까지 순환해도 트루가 없으면 false반환
    //중간에 true가 나오면 거기서 정지됨

    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},
    ];

    const isjisuk = arr.some(el => el.name === '지숙');
    const olderThanSix = arr.some(el => el.age >6);
    //ㅂ6보다 큰 나이가 있는지 확인후 false반환

    console.log(isjisuk);
    console.log(olderThanSix);

}

{
    //모든 배열의 요소가 특정 조건을 만족하는지 확인 --every

    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},
    ];

    const isAlljisuk = arr.every(el => el.name === '지숙');
    const olderThanSix = arr.every(el => el.age < 7);
    //모두가 7보다 작은 나이인지 확인후 반환

    console.log(isAlljisuk);
    console.log(olderThanSix);
}

{
    //배열의 특정 조건을 기준으로 필터링하기 filter
    const arr = [1,2,3,4,5,6,7,8,9,10];
    
    const filteredTwo = arr.filter(a =>{
        console.log(`현재 위치의 값은${a}`);
        return a % 2 === 0;
    });
    // arr의 내부 요소가 각각a변수로 할당
    //a를 2로 나누어지는 값을 리턴
    //리턴된 값으로 새로운 배열로 반환

    console.log(filteredTwo);

    const filteredThree = arr.filter(a => a % 3 == 0);
    console.log(filteredThree);

}

{
    //특정 조건을 만족하는 요소 찾기 find

    const arr = [
        {name: '혜림', age: 4},
        {name: '현일', age: 30},
        {name: '지숙', age: 5},
        {name: '두식', age: 3}
    ];

    const myFriend = arr.find(a => a.age === 30);
    console.log(myFriend);
}

{
    //배열요소 일괄 변경 map
    const arr = [
        {name: '혜림', age: 4},
        {name: '현일', age: 6},
        {name: '지숙', age: 5},
        {name: '두식', age: 3}
    ];

    const arr2 = arr.map(el => {
        el.age = el.age + 1;
        return el;
        //map메소드는 콜백함수의 리턴값에 따라 반환되는 배열 값이 바뀜
        // 속성만 변경해서 객체를 다시 반환했기때문에 arr2는 객체요소로 구성된 배열 할당
    });

    const arr3 = arr.map(el => el.name);
//콜백함수는 전달된 요소의 이름속성만 반환 따라서 문자열로 된 새로운 배열 할당
// return el; 을 안해줫기때문
    console.log(arr2);
    console.log(arr3);
}

{
    // 배열 내 값을 누적시키기 reduce

    // 배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
    //     return 누적 값으로 반환되는 값
    // }, 초기값);

    //누적된 값과 현재 요소값은 필수

    const numArr = [1,2,3,4,5];

    const result = numArr.reduce((acc,el) => {
        return acc + el
    }, 0);

    console.log(result);
    //acc는 0부터 들어온다. el은 numArr의 배열 인자 받아와서 1부터
    // 0 + 1 은 1이므로 1반환되어서 acc에 1이 들어감  
    // 더해진 리턴 값은 계속 acc에 들어간다
    // 1 + 2 ,3 + 3, 6 + 4, 10 + 5

}

console.clear();
{
    //중첩된 배열을 단일하게 만들기 reduce
    const arr = [1,[2,3],[4,5,6], ['배열', '나열하기'],'자스'];

    const result = arr.reduce((acc,el) => {
        return acc.concat(el);
    }, []);
    //배열에 reduce 누적하기 메소드를 호출 요소 순환 결과값은 result변수로 다시 대입
    // acc는 빈배열이 초기값으로 할당
    // 빈배열부터 [1], [1,2,3]이런식으로 내부요소들을 연속으로 차곡차곡 병합

    console.log(result);
}

{
    //객체에서 키만 추출 keys

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const arr = Object.keys(obj);
    //arr에 Object의 키를 호출하고 인자를 obj 넣음
    // obj의 키 속성만 배열로 담아짐

    console.log(arr);
}

{
    //객체에서 값만 추출 values 

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const arr = Object.values(obj);
    //arr에 Object의 values를 호출하고 인자를 obj 넣음
    // obj의 속성값만 배열로 담아짐

    console.log(arr);
}

{
    //객체를 배열로 변환 entries

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const modifiedObj = Object.entries(obj);
    //arr에 Object의 values를 호출하고 인자를 obj 넣음
    // obj의 속성값만 배열로 담아짐

    console.log(modifiedObj);
}

{
    //객체가 변경되지 않도록 하기 freeze
    //객체를 동결한다. 동결이후 추가하거나 제거하기 불가능

    let obj = {};

    obj.title = 'Idol';
    obj = Object.freeze(obj);
    obj.title = 'singer';

    console.log(obj);
//바뀌지 않는다 그리고 이떄는 'use strict'; 선언 전이라 에러가 나지 않는다


    const changeUntilNum = (obj, num) => {
        'use strict';

        while(true) {
            console.log(obj);
            
            if(obj.age >= num){
                obj = Object.freeze(obj);
            }
            obj.age += 1;
        }
        //반복문 내부가 true일때만 순환 에러 발생하면 반복문은 멈춘다.
        // 나이값이  넘버값보다 큰거나 같은지 확인 크거나 같으면 동결 아니면 +1해서 재할당

    }

    let profile = {name: '이지은', age: 28};
    // changeUntilNum(profile, 35);
}

console.clear();
{
    //객체에 속성 추가 못하게 만들기 seal
//seal은 객체를 밀봉 봉인된 객체이므로 속성을 추가/ 삭제 불가능 기존속성은 변경 가능

const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'Rm';

console.log(album);

Object.seal(album);

album.comment = 'answer';
//추가 불가능
album.singer = 'jk';
//기존 속성이라 변경 가능
delete album.name;
//삭제 불가능

console.log(album);
}

{
    //객체 병합 확장하기 assign
    //인자로 대입된 객체를 하나로 병합
    //첫번째 인자를 기준으로 병합됨 이 객체를 기준으로 병합되기 때문에 첫번째 인자는 원본이 수정되어서 반환됨

    const obj1 = {one: 1, two:2, three: 3};
    const obj2 = {name: '탄이', age:2, address: 'Seoul'};
    const obj3 = {friends: ['혜림', '케이', '뿡뿡이', '나래']};

    const newObj1 = Object.assign({}, obj1);
    const newObj2 = Object.assign({}, obj1, obj2);
    newObj1.four = 4;

    console.log(obj1);
    console.log(newObj1);
    console.log(newObj2);

    console.log('\n');

    const newObj3 = Object.assign(obj1, obj3); 
    //obj1를 기준으로 합쳤기 때문에 원본객체에 적접적 영향을 미침 변경됨
    // obj1 newObj3은 같은 값을 가짐
    console.log(obj1);
    //

    console.log(newObj1);
    console.log(newObj2);
    console.log(newObj3);
}

console.clear();
{
    // 진수 변환 toString
// 지정된 객체 문자열을 출력
//10진수의 숫자를 다른 진법으로 변환
    const dec = 531;


    const binByDex = dec.toString(2);
    const octByDex = dec.toString(8);
    const hexByDex = dec.toString(16);


    console.log(binByDex);
    console.log(octByDex);
    console.log(hexByDex);

    //2는 2진수로 변환
    //8은 8진수
    //16은16진수
}

{
    //10진수 아닌 집법을 10 진법으로 변환 parseInt
    const bin = 1000010011;
    const oct = 1023;
    const hex = 213;

    const dexBybin = parseInt(bin, 2);
    const dexByoct = parseInt(oct, 8);
    const dexByhex = parseInt(hex, 16);
    const hexByOct = parseInt(oct, 8).toString(16);
    //8진수 값인 oct변수를 10진수로 변환 후 toString으로 16진수로 변환


console.log(dexBybin);
console.log(dexByoct);
console.log(dexByhex);
console.log(hexByOct);    
}

{
    //랜덤값 구하기 random
    //무작위의 실수형 값을 반환

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    for (let i = 0; i < 5; i++){
        console.log(generateRandom(1, 10));
    }
    //테스트를 5번 순환하는 반복문 1-10 까지의 랜덥값을 5회반환

    
    for (let i = 0; i < 5; i++){
        console.log(generateRandom(10, 100));
    }
//10에서 100까지를 5회반환
}

{
    //특정자리수에서 반올림 round
    
    const val = 573.926;

    console.log(Math.round(val));
    console.log(Math.round(val * 10) / 10);
    // 소수점 둘째자리에서반올림
    //10을 곱해서 소수점두번째 숫자 2앞으로 점을 옮기고 라운드 메소드 적용후 다시 소수점을 한칸 앞으로
    console.log(Math.round(val * 100) / 100);
    console.log(Math.round(val / 10) * 10);
    //1의자리에서 반올림
    console.log(Math.round(val / 100) * 100);
    //10의 자리에서 반올림

}

{
    //특정자리수에서 올림하기 ceil --높은 숫자로 만들기
    const positiveNum = 93.54;
    const negativeNum = -39.27;

    
    console.log(Math.ceil(positiveNum));
    console.log(Math.ceil(negativeNum));
    //-39 -39.27을 올림하면 -39가 큰숫자 이기때문
    console.log(Math.ceil(positiveNum * 10) / 10);
    //10곱하면 935.4 가됨 올림하면 936 그리고 다시 소수점 앞으로 땡김
    console.log(Math.ceil(positiveNum / 10) * 10);
    //9.354에서소수점 뒷자리 올림하면 10 10에서 10곱하면 100
    console.log(Math.ceil(negativeNum * 10) / 10);
       //- 392.7 에서 올림 392 에서 10나누면 39.2
    console.log(Math.ceil(negativeNum / 10) * 10);
    //-3.927 올림하면 -3 10곱하면 -30
}

{
    // 특정자리에서 내립 floor--낮은 숫자로 만들기
    const positiveNum = 93.54;
    const negativeNum = -39.27;

    
    console.log(Math.floor(positiveNum));
    console.log(Math.floor(negativeNum));
    //-39 에서 내림하면 -40
    console.log(Math.floor(positiveNum * 10) / 10);
    //10곱하면 935.4 가됨 4버리고 935 소수점 앞으로 땡김 93.5
    console.log(Math.floor(positiveNum / 10) * 10);
    //9.354에서소수점 뒷자리 내림하면 9 10에서 10곱하면 90
    console.log(Math.floor(negativeNum * 10) / 10);
       //- 392.7 에서 내림 393 에서 10나누면 39.3
    console.log(Math.floor(negativeNum / 10) * 10);
    // -3.927 에서 내임 -4 소수점 뒤로 -40
    
}
console.clear();
