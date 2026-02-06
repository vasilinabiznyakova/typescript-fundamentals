interface Address {
  city?: string;
  street?: string;
  coords: number[];
}

type User = {
  firstname: string;
  age?: number;
  address: Address;
};

const user: User = {
  firstname: 'name',
  age: 40,
  address: {
    coords: [5, 5],
  },
};

const users: User[] = [{}];




export {};