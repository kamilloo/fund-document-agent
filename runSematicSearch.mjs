import { embedText } from "./src/application/embed-text.ts";
import { searchByVector } from "./src/application/search-by-vector.ts";
import {chunkDocument} from "./src/application/chunk-document.ts";
import { documents } from "./src/infrastructure/in-memory-document-repository.ts";
import {embedChunks} from "./src/application/embed-chunks.ts";

const chunks = chunkDocument(documents[0])

console.log(`Created ${chunks.length} chunks`);

const query = "How long can the fund make investments?";
const queryEmbedding = await embedText(query);

const embeddedChunksPromise = embedChunks(chunks);

Promise.all([embeddedChunksPromise])
    .then(embeddedChunks => searchByVector(queryEmbedding, embeddedChunks[0], 3))
    .then((results) => {
        for (const result of results) {
            console.log(`${result.similarity}: ${result.chunk.content}`);
        }
    })


