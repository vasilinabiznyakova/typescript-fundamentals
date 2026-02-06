type Color = 'red' | 'green';
type Size = 4 | 8 | 16;

const color: Color = 'green';
const values = {
  color: 'green',
} as const;

function paint(color: Color) {}

paint(values.color);

interface User {
  readonly id: string;
}

type EventName = 'click' | 'change';

type EventHandler = `on${EventName}`;

type Userid = `user_id_${number}`;

export {};
