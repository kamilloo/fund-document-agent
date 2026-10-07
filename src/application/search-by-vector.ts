import type { EmbeddedDocumentChunk } from "../domain/EmbeddedDocumentChunk.ts";
import {cosineSimilarity} from "./cosine-similarity.ts";

export function searchByVector(
    queryEmbedding: number[],
    chunks: EmbeddedDocumentChunk[],
    limit: number
) {
    return chunks.filter(chunk => chunk.embedding !== undefined)
        .map((chunk) => ({
        chunk: chunk,
        similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
    })).sort((similarity, similarity2) => similarity2.similarity - similarity.similarity)
        .slice(0, limit)
}