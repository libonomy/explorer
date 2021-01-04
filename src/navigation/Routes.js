import { Blocks } from 'src/views/blocks';
import ViewBlock from 'src/views/blocks/ViewBlock';
import { Landing } from 'src/views/landing';
import { Transactions, ViewTx } from 'src/views/transactions';
import NotFound from './NotFound';

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
    path: '/txs/:hash',
    component: ViewTx
  },
  {
    path: '/blocks',
    component: Blocks
  },
  {
    path: '/blocks/:id',
    component: ViewBlock
  },
  {
    path: '/not-found',
    component: NotFound
  }
];
