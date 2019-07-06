/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout';

const contactRoutes = {
  path: '/contacts',
  component: Layout,
  redirect: 'noredirect',
  children: [{
    path: 'index',
    component: () => import('@/views/contacts'),
    name: 'Contacts',
    meta: { title: 'Contacts', icon: 'icon' },
  }],
};

export default contactRoutes;
