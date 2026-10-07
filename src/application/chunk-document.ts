import type { Document } from "../domain/document.ts";
import type {DocumentChunk} from "../domain/document-chunk.ts";

export function chunkDocument(document: Document): DocumentChunk[] {
    const paragraphs = document.content
        .split(/\n\s*\n/)
        .map((content) => content.trim())
        .filter(Boolean);

    const chunks: DocumentChunk[] = [];
    let currentHeading: string | undefined;

    for (const paragraph of paragraphs) {
        if (paragraph.startsWith("#")) {
            currentHeading = paragraph;
            continue;
        }

        const content = currentHeading
            ? `${currentHeading}\n${paragraph}`
            : paragraph;

        chunks.push({
            id: `${document.id}-chunk-${chunks.length}`,
            documentId: document.id,
            content,
            position: chunks.length,
            section: currentHeading,
        });
    }

    return chunks;
}