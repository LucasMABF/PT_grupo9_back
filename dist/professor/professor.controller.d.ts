import { ProfessorService } from './professor.service';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    findAll(): Promise<{
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findAllSort(order_field: string, order: string): Promise<{
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findSort(order_field: string, order: string, limit: number): Promise<{
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findUser(id: number): Promise<{
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
