import { ProfessorService } from './professor.service';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    findAll(): Promise<({
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        disciplinas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    })[]>;
    findAllSort(order_field: string, order: string): Promise<({
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        disciplinas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    })[]>;
    findSort(order_field: string, order: string, limit: number): Promise<({
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        disciplinas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    })[]>;
    findUser(id: number): Promise<{
        avaliacoes: {
            id: number;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        disciplinas: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nome: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        departamento: string;
    }>;
}
