import { ProfessorService } from './professor.service';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    findAll(): Promise<({
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                id: number;
                nome: string;
                departamento: string;
                createdAt: Date;
                updatedAt: Date;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findAllSort(order_field: string, order: string): Promise<({
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                id: number;
                nome: string;
                departamento: string;
                createdAt: Date;
                updatedAt: Date;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findSort(order_field: string, order: string, limit: number): Promise<({
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                id: number;
                nome: string;
                departamento: string;
                createdAt: Date;
                updatedAt: Date;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findUser(id: number): Promise<{
        disciplinas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        avaliacoes: ({
            professor: {
                nome: string;
            };
            user: {
                id: number;
                nome: string;
                departamento: string;
                curso: string;
                foto_perfil: Buffer;
            };
            disciplina: {
                id: number;
                nome: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            professorId: number;
            disciplinaId: number;
            conteudo: string;
        })[];
    } & {
        id: number;
        nome: string;
        departamento: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
