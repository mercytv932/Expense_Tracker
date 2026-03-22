const expenseForm = document.querySelector("#expenseForm") as  HTMLFormElement;
const amountInput = document.querySelector("#amountInput") as HTMLInputElement;
const dateInput = document.querySelector("#dateInput") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLSelectElement;
const submitBtn = document.querySelector(".submitBtn") as HTMLButtonElement;
const displayArea = document.querySelector("#displayArea") as HTMLDivElement;
const descriptionInput = document.querySelector("#descriptionInput") as HTMLInputElement;



type Category = 'food' | 'transport' | 'entertainment' | 'bills' | 'other';

class Expense {
  id: number;
  description: string;
  amount: number;
  date: Date;
  category: Category;


constructor( amount: number, date: Date, category: Category, description: string){

  if(amount <= 0) {
     throw new Error ("Amount must be a positive number");
  }
  if (isNaN(date.getTime())){
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
  private expenses: Expense[] = [];

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  deleteExpense(id: number): void {
    this.expenses = this.expenses.filter(expense => expense.id !==id);
  }

  getTotal(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  getExpense(): Expense[] {
    return this.expenses;
  }
}


 const tracker = new ExpenseTracker();

expenseForm.addEventListener("submit", function(e){
  e.preventDefault();

  const description = descriptionInput.value;
  const amount = Number(amountInput.value);
  const date = new Date(dateInput.value);
  const selectedCategory = category.value as Category;

  if(!description.trim()){
    alert("Description is required");
    return;
  }

  if(amount <= 0){
  alert("Amount must be greater than 0");
  return;
  }

  if(!dateInput.value){
    alert("Please pick a date");
    return;
  }

  if(!selectedCategory){
    alert("You need to select something")
    return;
  }

  const newExpense = new Expense(amount, date, selectedCategory, description);
  tracker.addExpense(newExpense);
  displayExpense(tracker.getExpense());
});


function displayExpense(expenses: Expense[]): void{
  displayArea.innerHTML = "";

  expenses.forEach(expense =>{

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
    newDiv.appendChild(newHTag3)

    displayArea.appendChild(newDiv);
  });
  
}
