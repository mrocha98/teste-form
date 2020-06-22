import { customAlphabet } from 'nanoid/async';

const total = 8;
const generate = customAlphabet('1234567890', total);

export default async function nanoid() {
  return generate();
}
