import type {Document} from "../domain/document.js";

export const documents: Document[] = [
    {
        id: "fund-001",
        title: "Fund Agreement",
        content: `
# Fund Agreement
 tool boundary.

## Management Fees

The management fee shall be 2% of committed capital annually.
The fee is calculated quarterly and paid at the end of each quarter.

## Investment Territory

The fund may invest only in companies headquartered in the European Union.
Investments outside the European Union require approval from the investment committee.

## Investment Period

The investment period lasts five years from the first closing date.
The investment committee may extend this period by one additional year.

## Related Party Transactions

Transactions involving related parties must be approved by the compliance committee.
All such transactions must be documented and retained for regulatory review.
    `,
    },
    {
        id: "fund-002",
        title: "Investment Policy",
        content: "Investments are limited to companies headquartered in the European Union.",
    },
];