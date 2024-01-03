export interface HeaderMenu {
    name: string;
    icon: string;
    routerUrl: string;
}

export interface Menu {
    name: string;
    icon: string;
    routerUrl: string;
    sub_menus: Menu[];
}