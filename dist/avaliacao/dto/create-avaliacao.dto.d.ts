export declare class CreateAvaliacaoDto {
    userId: number;
    disciplinaId: number;
    conteudo: string;
    comentarios?: {
        texto: string;
        autorId: number;
    }[];
}
