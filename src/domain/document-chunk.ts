export type DocumentChunk = {
    id: string;
    documentId: string;
    content: string;
    position: number;
    section?: string;
    page?: string;
    embedding?: number[];
};