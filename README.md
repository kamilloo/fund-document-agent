# Fund Document Agent

A small TypeScript/Mastra project built as part of technical interview preparation for an AI/backend engineering role.

The goal is to evolve this project from a simple document-search assistant into a production-oriented AI system covering:

- AI agents
- RAG
- semantic search
- embeddings
- evaluation
- LLM-as-judge
- LLMOps
- observability
- reliability
- system design

## Current Scope

Day 1 focuses on the basic architecture and tool boundary.

Current flow:

```text
User question
    ↓
Mastra Agent
    ↓
Search Documents Tool
    ↓
Application Service
    ↓
In-Memory Repository
    ↓
Matching Documents
```

The current document search is based on simple substring matching.

Example:

```text
Query:
management fee

Result:
The management fee shall be 2% of committed capital annually.
```

## Project Structure

```text
src/
├── application/
│   ├── search-documents.ts
│   └── search-fund-documents.ts
├── domain/
│   └── document.ts
├── infrastructure/
│   └── in-memory-document-repository.ts
└── mastra/
    ├── index.ts
    ├── agents/
    │   └── fund-agent.ts
    └── tools/
        └── search-documents-tool.ts
```

## Architecture

The project intentionally keeps AI framework code separate from application logic.

```text
Mastra / LLM
     ↓
AI adapter / tool
     ↓
Application service
     ↓
Domain
     ↓
Repository
```

## Running the Project

Install dependencies:

```bash
npm install
```

Start Mastra Studio:

```bash
npm run dev
```

Mastra Studio should be available at:

```text
http://localhost:4111
```

## OpenAI Configuration

To use a real OpenAI model, create a `.env` file:

```bash
OPENAI_API_KEY=your_api_key
```

Do not commit `.env`.