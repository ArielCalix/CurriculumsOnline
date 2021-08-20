export interface IPortfolio {
    title: string;
    tabs: ITab[];
    tabPanes: ITabPane[];
}

export interface ITab {
    id: number;
    icon: string;
    link: string;
}

export interface ITabPane {
    active?: string
    row: IRowPane;
}

export interface IRowPane {
    columns: IColumn[]
}

export interface IColumn {
    imagen: string;
    title: string;
    subTitle: string
}