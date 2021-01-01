import { Blocks } from 'src/views/blocks';
import { Landing } from 'src/views/landing';
import { Transactions } from 'src/views/transactions';

export const app = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/txs',
    component: Transactions
  },
  {
    path: '/blocks',
    component: Blocks
  }
];
