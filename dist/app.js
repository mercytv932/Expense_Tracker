"use strict";
const expenseForm = document.querySelector("#expenseForm");
const amountInput = document.querySelector("#amountInput");
const dateInput = document.querySelector("#dateInput");
const category = document.querySelector("#category");
const submitBtn = document.querySelector(".submitBtn");
const displayArea = document.querySelector("#displayArea");
const descriptionInput = document.querySelector("#descriptionInput");
const totals = document.querySelector("#totals");
const filterBtn = document.querySelectorAll(".filterBtn");
let currentFilter = 'all';
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
    getExpense() {
        return this.expenses;
    }
    getTotalByCategory(category) {
        return this.expenses
            .filter(expense => expense.category === category)
            .reduce((total, expense) => total + expense.amount, 0);
    }
}
const tracker = new ExpenseTracker();
expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const description = descriptionInput.value;
    const amount = Number(amountInput.value);
    const date = new Date(dateInput.value);
    const selectedCategory = category.value;
    if (!description.trim()) {
        alert("Description is required");
        return;
    }
    if (amount <= 0) {
        alert("Amount must be greater than 0");
        return;
    }
    if (!dateInput.value) {
        alert("Please pick a date");
        return;
    }
    if (!selectedCategory) {
        alert("You need to select something");
        return;
    }
    const newExpense = new Expense(amount, date, selectedCategory, description);
    tracker.addExpense(newExpense);
    saveExpenses();
    displayExpense(tracker.getExpense());
    totals.textContent = `Total: $${tracker.getTotal()}`;
    expenseForm.reset();
});
function displayExpense(expenses) {
    displayArea.innerHTML = "";
    expenses.forEach(expense => {
        const newPTag = document.createElement("p");
        newPTag.textContent = expense.description;
        const newHTag1 = document.createElement("h3");
        newHTag1.textContent = expense.amount.toString();
        const newHTag2 = document.createElement("h4");
        newHTag2.textContent = expense.date.toLocaleDateString();
        const newHTag3 = document.createElement("h3");
        newHTag3.textContent = expense.category;
        const newDiv = document.createElement("div");
        newDiv.appendChild(newPTag);
        newDiv.appendChild(newHTag1);
        newDiv.appendChild(newHTag2);
        newDiv.appendChild(newHTag3);
        displayArea.appendChild(newDiv);
    });
}
filterBtn.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        const filtered = currentFilter === 'all'
            ? tracker.getExpense()
            : tracker.getExpense().filter(expense => expense.category === currentFilter);
        displayExpense(filtered);
    });
});
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(tracker.getExpense()));
}
window.addEventListener("load", function () {
    const stored = localStorage.getItem('expenses');
    if (stored) {
        const expenses = JSON.parse(stored); //loop through and add to tracker
        expenses.forEach((e) => {
            const expense = new Expense(e.amount, new Date(e.date), e.category, e.description);
            tracker.addExpense(expense);
        });
        displayExpense(tracker.getExpense());
        totals.textContent = `Total: $${tracker.getTotal()}`;
    }
});
