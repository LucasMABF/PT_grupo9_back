import { ProfessorService } from './professor.service';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }[]>;
    findAllSort(order_field: string, order: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }[]>;
    findSort(order_field: string, order: string, limit: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }[]>;
    findUser(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }>;
}
