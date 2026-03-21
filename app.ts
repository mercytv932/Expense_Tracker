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

}