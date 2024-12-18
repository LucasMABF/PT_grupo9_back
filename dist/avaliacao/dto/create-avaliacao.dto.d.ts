export declare class CreateAvaliacaoDto {
    userId: number;
    disciplinaId: number;
    professorId: number;
    conteudo: string;
    comentarios?: {
        texto: string;
        autorId: number;
    }[];
}
