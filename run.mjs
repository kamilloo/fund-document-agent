// run-tool.mjs

import { searchDocuments } from "./src/application/search-documents.ts";
import { documents } from "./src/infrastructure/in-memory-document-repository.ts";

console.log("Documents:", documents);
console.log("Query:", JSON.stringify("management fee"));


const result = await searchDocuments("management fee", documents);

console.log(JSON.stringify(result, null, 2));