// Q1

let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');

// Q2

let languages = ['JavaScript','PHP','Ruby','Python','Go'];

console.log(
  `私の好きな言語は${languages[0]} です。${languages[3]} を勉強してみたいです。`);

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

let avg = sum / playerList.length;

console.log(avg);


// Q6
function sayHello(){
  console.log('Hello');
}

sayHello();

let sayWorld = function(){
  console.log('World');
}

sayWorld();

// Q7

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};

console.log(user.birthday);
user.sayHello();

// Q8

let calc = {
  add : function(x,y){
    console.log(x + y);
  },
  subtract : function(x,y){
    console.log(x - y);
  },
  multiply : function(x,y){
    console.log(x * y);
  },
  divide : function(x,y){
    console.log(x / y);
  }
};

calc.add(3,4);
calc.subtract(20,10);
calc.multiply(7,7);
calc.divide(15,3);

// Q9

function remeainder(x,y){
  return x % y
}

let result = remeainder(5,3)

console.log(`5を3で割った余りは${result}です。`);

// Q10

// 変数xは、foo関数の中だけスコープが有効で、foo関数の外から変数xを参照しようとしているためエラーになる

// Q1
let randam = Math.floor(Math.random()*10);
console.log(randam);

// Q2
setTimeout(function(){
  console.log('Hello world!');
} ,3000);

// Q3

let num = 5 ;

if (num > 0){
  console.log('num is greater than 0')
}else if(num < 0){
  console.log('num is less than 0')
}else if(num = 0){
  console.log('num is 0')
};

// Q4

for (let numbers = 0; numbers < 100; numbers++){
  console.log(numbers)
}

// Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}