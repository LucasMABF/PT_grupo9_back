export declare class CreateCommentDto {
    userId: number;
    disciplinaId: number;
    conteudo: string;
    avaliacao?: {
        texto: string;
        autorId: number;
    }[];
}
