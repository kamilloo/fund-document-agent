import {searchByVector} from "./src/application/search-by-vector.ts";

const chunks = [
    {
        content: "Management fee",
        embedding: [0.95, 0.05, 0],
    },
    {
        content: "Investment territory",
        embedding: [0.1, 0.9, 0],
    },
    {
        content: "Related party transactions",
        embedding: [0, 0.1, 0.9],
    },
];

const queryEmbedding = [1, 0, 0];

const found = searchByVector(queryEmbedding, chunks)

console.log(JSON.stringify(found, null, 2))
