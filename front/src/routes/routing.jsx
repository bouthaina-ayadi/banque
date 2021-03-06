/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/

import Aoutcompte from '../views/ui-components/compteadd/Add.compte'
import Listecompte from '../views/ui-components/compteadd/List.compte'
import Transaction from '../views/ui-components/compteadd/Transaction'
import Listetransaction from '../views/ui-components/compteadd/List.transaction'
import Demandechequier from '../views/ui-components/compteadd/Demande.cheque'
import Listdemandechequier from '../views/ui-components/compteadd/Listdemandechequier'
var ThemeRoutes = [
  {
    path: '/starter/starter',
    name: 'List compte',
    icon: 'mdi mdi-reorder-horizontal',
    component: Listecompte
  },
  {
    path: '/ui-components/alert',
    name: 'Ajouter compte',
    icon: 'mdi mdi-account-plus',
    component: Aoutcompte
  },
  {
    path: '/ui-components/transaction',
    name: 'Transaction',
    icon: 'mdi mdi-exit-to-app',
    component: Transaction
  },
  /*{
    path: '/ui-components/listtransaction',
    name: 'List all Transaction',
    icon: 'mdi mdi-grid',
    component: Listetransaction
  },*/
  {
    path: '/ui-components/demandechequier',
    name: 'demande chequier',
    icon: 'mdi mdi-file-chart',
    component: Demandechequier
  },

  /*{
    path: '/ui-components/Listdemandechequier',
    name: 'Liste demande chequier',
    icon: 'mdi mdi-file-chart',
    component: Listdemandechequier
  },*/
  
 
 
  {
    path: '/',
    pathTo: '/starter/starter',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
