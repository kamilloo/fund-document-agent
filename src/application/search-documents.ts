import type { Document} from "../domain/document.js";
export function searchDocuments(
    query: string,
    documents: Document[]
): Document[] {
    const normalizedQuery = query.trim().toLowerCase();

    return documents.filter(document => document.content.toLowerCase().includes(normalizedQuery))
}