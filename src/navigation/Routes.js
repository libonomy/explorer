import { Blocks } from 'src/views/blocks';
import ViewBlock from 'src/views/blocks/ViewBlock';
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
  },
  {
    path: '/blocks/:id',
    component: ViewBlock
  }
];
