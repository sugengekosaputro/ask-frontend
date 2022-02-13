import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'zmdi zmdi-view-dashboard', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/services-support', title: 'Services & Support', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'UI Elements', icon: 'zmdi zmdi-layers', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ui-elements/buttons', title: 'Buttons', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ui-elements/alerts', title: 'Alerts', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },
    { path: '/dashboard/user', title: 'User', icon: 'fa fa-address-book', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/dashboard/role', title: 'Role', icon: 'zmdi zmdi-help-outline', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }

    
];
