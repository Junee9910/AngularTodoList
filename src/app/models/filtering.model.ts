export interface FilterButton {
    type:Filter;
    labels:string;
    isActive:boolean;
}

export enum Filter{
    All,
    Active,
    Completed
}