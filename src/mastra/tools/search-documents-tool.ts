import { createTool } from "@mastra/core/tools";
import { z } from "zod"
import {searchDocuments} from "../../application/search-documents.js";
import {documents} from "../../infrastructure/in-memory-document-repository.js";

export const searchDocumentsTool = createTool({
    id: "search-documents",
    description: "Search fund documents for information rellevant to the user's question.",
    inputSchema: z.object({
        query: z.string().min(1)
    }),
    outputSchema: z.array({
        documents: z.array(
            z.object({
                id: z.string(),
                title: z.string(),
                content: z.string(),
            })
        ),
    }),
    execute: async ({ query}) => {
        const results = searchDocuments(query, documents);
        return {
            documents: results,
        };
    },
});