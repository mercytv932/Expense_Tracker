"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
class Expense {
    id;
    amount;
    category;
    description;
    date;
    constructor(amount, date, category, description) {
        if (amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        if (isNaN(date.getTime())) {
            throw new Error(" A valid date is required");
        }
        this.id = Date.now();
        this.amount = amount;
        this.date = date;
        this.category = category;
        this.description = description;
    }
}
exports.Expense = Expense;
//# sourceMappingURL=expense.js.map