import type { DocumentChunk } from "../domain/document-chunk.ts";
import type { EmbeddedDocumentChunk } from "../domain/EmbeddedDocumentChunk.ts";
import { embedText } from "./embed-text.ts"

export async function embedChunks(
    chunks: DocumentChunk[]
): Promise<EmbeddedDocumentChunk[]> {
    const embeddedChunks: EmbeddedDocumentChunk[] = [];

    for (const chunk of chunks) {
        const embedding = await embedText(chunk.content);
        embeddedChunks.push({
            ...chunk,
            embedding,
        });
    }

    return embeddedChunks;
}
