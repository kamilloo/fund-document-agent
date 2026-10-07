import { pipeline } from "@huggingface/transformers";

const extractor = await pipeline(
    "feature-extraction",
    "onnx-community/all-MiniLM-L6-v2-ONNX",
);

export async function embedText(text: string): Promise<number[]> {
    const output = await extractor(text, {
        pooling: "mean",
        normalize: true,
    });

    return Array.from(output.data);
}