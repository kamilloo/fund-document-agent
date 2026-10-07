import type { DocumentChunk} from "./document-chunk.ts";

export type EmbeddedDocumentChunk = DocumentChunk & {
    embedding: number[];
}