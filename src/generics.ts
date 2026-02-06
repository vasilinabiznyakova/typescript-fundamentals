interface MetaData {}

interface User {
  username: string;
}

interface Article {
  title: string;
}

//тут ApiResponse мы делаем универсальным, в зависимости от аргумента будет работать по разному
interface ApiResponse<T> {
  status?: 'error' | 'success';
  meta?: MetaData;
  requestId?: string;
  data: T; //мы не знаем заранее тип - какая-то информация о заказе
}

const responseFromUserApi: ApiResponse<User> = {
  data: {
    username: 'Vas',
  },
};

const responseFromArticleApi: ApiResponse<Article> = {
  data: {
    title: 'Some title',
  },
};

//хотим создать тип для создания деревьев, описание деревьей
interface Tree<T> {
  id: string;
  value: string;
  children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
  id: '10',
  value: 'dddd',
  children: [
    {
      id: '123',
      value: 'ffff',
      children: null,
    },
  ],
};

function genericFn<T>(arg: T) {}

const arrowGeneric = <T>(arg: T): T => {
  return arg;
};

const data = arrowGeneric<User>({ username: '123' });

//constraints - за счет extends мы загоняем обьект в определенные рамки
function createEntity<T extends { id: string; createdAt: Date }>(arg: T) {
  arg.id;
}

class Order<T> {
  private data: T;
  constructor(arg: T) {
    this.data = arg;
  }
}

type isArray<T> = T extends any[] ? true : false;

const first: isArray<string> = false;
const second: isArray<string[]> = true;



type RandomName<T> = T extends string ? { value: string } : { value: T };

const third: RandomName<{ username: number }>;
