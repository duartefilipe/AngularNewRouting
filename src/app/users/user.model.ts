    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface responseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
    }

    //modelos para a criação
    export interface RequestCreate {
        name: string;
        job: string;
    }
    export interface ResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }

    //modelos para o update
    export interface responseUser{
        data: User;
    }

    export interface RequestUpdate {
        name: string;
        job: string;
    }
    export interface ResponseUpdate {
        name: string;
        job: string;
        updateAt: Date;
    }
    
