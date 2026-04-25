"use strict";
class Expense {
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
class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }
    addExpense(expense) {
        this.expenses.push(expense);
    }
    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
    }
    getTotal() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
}
