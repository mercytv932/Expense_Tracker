"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expense_1 = require("./expense");
class ExpenseTracker {
    expenses = [];
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
/*

Step 5: Create ExpenseTracker class (30 min)

Properties: expenses array
Methods: addExpense, deleteExpense, getTotal
Use proper TypeScript types
Test: Methods work

Step 6: Setup form handling (20 min)

Get form elements with proper types
Add submit listener
Type event parameter
Test: Form submission

Step 7: Validate inputs (25 min)

Check all fields filled
Check amount is number
Show typed error messages
Test: Try invalid inputs

Step 8: Display expenses (25 min)

Create displayExpense function with typed parameter
Loop through expenses array
Render each
Test: See expenses
*/ 
//# sourceMappingURL=expenseTracker.js.map