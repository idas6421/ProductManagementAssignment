export interface Theme {
    name: string;
    properties: any;
}

export const base: Theme = {
    name: 'Blue',
    properties: {
        "--background-btn": "#007bff",
        "--border-btn": "#007bff",
        "--background-btn-active": "#0062cc",
        "--border-btn-active": "#005cbf",
        "--background-btn-hover": "#0069d9",
        "--border-btn-hover": "#0062cc",
        "--background-btn-focus": "#0069d9",
        "--border-btn-focus": "#0062cc",
        "--color-btn-focus": "#fff",
        "--box-shadow-btn-focus": "0 0 0 0.2rem rgba(38, 143, 255, 0.5)",
        "--background-btn-disabled": "#007bff",
        "--border-btn-disabled": "#007bff",
        "--color-btn-disabled": "#fff",
        /*btn-light*/
        "--background-btn-light": "#f8f9fa",
        "--border-btn-light": "#f8f9fa",
        "--color-btn-light": "#212529",
        "--background-btn-light-hover": "#e2e6ea",
        "--border-btn-light-hover": "#dae0e5",
        "--color-btn-light-hover": "#212529",
        "--background-btn-light-active": "#e2e6ea",
        "--border-btn-light-active": "#d3d9df",
        "--color-btn-light-active": "#212529",
        "--background-btn-light-focus": "#e2e6ea",
        "--border-btn-light-focus": "#d3d9df",
        "--color-btn-light-focus": "#212529",
        "--box-shadow-btn-light-focus": "0 0 0 0.2rem rgba(216, 217, 219, 0.5)",
        /*list-group-item*/
        "--background-list-group-item": "#fff",
        "--border-list-group-item": "1px solid rgba(0, 0, 0, 0.125)",
        "--background-list-group-item-hover": "#f8f9fa",
        "--color-list-group-item-hover": "#495057",
        "--background-list-group-item-active": "#e9ecef",
        "--color-list-group-item-active": "#212529",
        "--background-list-group-item-css-active": "#007bff",
        "--border-list-group-item-css-active": "#007bff",
        /*card-header*/
        "--background-card-header": "rgba(0, 0, 0, 0.03)",
        "--border-card-header": "1px solid rgba(0, 0, 0, 0.125)",
        /*bg-light*/
        "--background-bg-light": "#007bff",
        "--color-navbar-brand": "#fff",
    }
}

export const dark: Theme = {
    name: 'Green',
    properties: {
        "--background-btn": "#0BB783",
        "--border-btn": "#0BB783",
        "--background-btn-active": "#04AA77",
        "--border-btn-active": "#04AA77",
        "--background-btn-hover": "#04AA77",
        "--border-btn-hover": "#04AA77",
        "--background-btn-focus": "#04AA77",
        "--border-btn-focus": "#04AA77",
        "--color-btn-focus": "#fff",
        "--box-shadow-btn-focus": "0 0 0 0.2rem rgba(4, 170, 119, 0.5)",
        "--background-btn-disabled": "#0BB783",
        "--border-btn-disabled": "#0BB783",
        "--color-btn-disabled": "#fff",
        /*btn-light*/
        "--background-btn-light": "#f8f9fa",
        "--border-btn-light": "#f8f9fa",
        "--color-btn-light": "#212529",
        "--background-btn-light-hover": "#e2e6ea",
        "--border-btn-light-hover": "#dae0e5",
        "--color-btn-light-hover": "#212529",
        "--background-btn-light-active": "#e2e6ea",
        "--border-btn-light-active": "#d3d9df",
        "--color-btn-light-active": "#212529",
        "--background-btn-light-focus": "#e2e6ea",
        "--border-btn-light-focus": "#d3d9df",
        "--color-btn-light-focus": "#212529",
        "--box-shadow-btn-light-focus": "0 0 0 0.2rem rgba(216, 217, 219, 0.5)",
        /*list-group-item*/
        "--background-list-group-item": "#fff",
        "--border-list-group-item": "1px solid rgba(0, 0, 0, 0.125)",
        "--background-list-group-item-hover": "#f8f9fa",
        "--color-list-group-item-hover": "#495057",
        "--background-list-group-item-active": "#e9ecef",
        "--color-list-group-item-active": "#212529",
        "--background-list-group-item-css-active": "#0BB783",
        "--border-list-group-item-css-active": "#0BB783",
        /*card-header*/
        "--background-card-header": "rgba(204, 238, 242, 1)",
        "--border-card-header": "1px solid rgba(0, 0, 0, 0.125)",
        /*bg-light*/
        "--background-bg-light": "#0BB783",
        /*navbar*/
        "--color-navbar-brand": "#fff"   
    }
}