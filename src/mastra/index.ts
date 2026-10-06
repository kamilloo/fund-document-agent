import {Mastra} from "@mastra/core";
import {fundAgent} from "./agents/fund-agent.js";

export const mastra = new Mastra({
    agents: {
        fundAgent,
    }
});

