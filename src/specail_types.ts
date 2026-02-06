let value: any;
value = 5;
value = {};
value = [];

function logData(data: unknown) {
  let value: string;
  if (typeof data === 'string') {
    value = data;
  }

  if (Array.isArray(data)) {
    data;
  }
  console.log(data);
}

enum Values {
  FIRST,
  SECOND,
  THIRD,
}

function fn(value: Values) {
  switch (value) {
    case Values.FIRST:
      return 1;
    case Values.SECOND:
      return 2;
    default:
      const exhaustiveCheck: never = value; // this check would guarantee we worked out all the cases
      return value;
  }
}

fn(Values.FIRST);

function fn2(): void {
  console.log();
}

fn2();
