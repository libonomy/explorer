import { Accounts } from 'src/views/accounts';

import { Blocks, ForkedBlocks, ViewBlock } from 'src/views/blocks';
import { InternalTxs, VerifiedContracts } from 'src/views/contracts';
import { Landing } from 'src/views/landing';
import { PendingTxs, Transactions, ViewTx } from 'src/views/transactions';
import { UncleBlocks } from 'src/views/uncles';
import { ViewAddress } from 'src/views/addresses';
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
    path: '/pending_txs',
    component: PendingTxs
  },
  {
    path: '/blocks',
    component: Blocks
  },
  {
    path: '/forked_blocks',
    component: ForkedBlocks
  },
  {
    path: '/uncles',
    component: UncleBlocks
  },
  {
    exact: true,
    path: '/blocks/:height',
    component: ViewBlock
  },
  {
    path: '/accounts',
    component: Accounts
  },
  {
    path: '/verified_contracts',
    component: VerifiedContracts
  },
  {
    path: '/internal_txs',
    component: InternalTxs
  },
  {
    path: '/not_found',
    component: NotFound
  },
  {
    path: '/addresses/:hash',
    component: ViewAddress
  }
];
