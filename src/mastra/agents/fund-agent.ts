import { Agent} from "@mastra/core/agent";
import { searchDocumentsTool } from "../tools/search-documents-tool.js";

export const fundAgent = new Agent({
    id: "fund-agent",
    name: "Fund Agent",
    instruction: `
    You are a fund document assistant.

    Answer questions using information from the available fund documents.
    Use the searchDocumentsTool when you need information from those documents.
    Do not invent facts that are not present in the documents.
    If you cannot find the information, say so clearly.
    `,
    model: "openai/gpt-5-mini",
    tools: {
        searchDocumentsTool,
    },
})