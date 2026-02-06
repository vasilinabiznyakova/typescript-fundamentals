//1 способ сузить типы это сделать это через проверки typeof
// typeof type guards

function fn(arg: number | string | null) {
  if (typeof arg === 'number') {
    return;
  } else if (typeof arg === 'string') {
    return;
  }

  return arg;
}

// 2 Truthiness narrowing
function fn2(arg: number | string | null) {
  if (arg === null) {
    arg;
  } else if (arg === 5) {
    return arg;
  }

  return arg;
}

//3

interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}

//4
function fn3(arg: User | Person) {
  if ('username' in arg) {
    arg;
  }

  if ('firstname' in arg) {
    arg;
  }

  arg;
}

//5 works only with classes

class Bmw {
  bmwDrive();
}
class Audi {
  audiDrive();
}

const bmw = new Bmw();
const audi = new Audi();

function fn4(arg: Bmw | Audi) {
  if (arg instanceof Bmw) {
    arg.bmwDrive();
  } else {
    arg.audiDrive();
  }
}

//6 Discriminated unions

interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmw extends BaseCar {
  type: 'bmw';
  bmwField: string;
}

interface Audi extends BaseCar {
  type: 'audi';
  audiField: string;
}

type Car = Audi | Bmw;

function fn5(arg: Bmw | Audi) {
  switch (arg.type) {
      case 'audi':
          audi.audiField
      break;
  }
}
