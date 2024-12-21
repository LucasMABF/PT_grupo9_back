export declare class CreateAvaliacaoDto {
    disciplinaId: number;
    professorId: number;
    conteudo: string;
    comentarios?: {
        texto: string;
        autorId: number;
    }[];
}
