export declare class UpdateAvaliacaoDto {
    userId?: number;
    disciplinaId?: number;
    conteudo?: string;
    comentarios?: {
        texto: string;
        autorId: number;
    }[];
}
