import type { Category } from './types';
export declare class Expense {
    id: number;
    amount: number;
    category: Category;
    description: string;
    date: Date;
    constructor(amount: number, date: Date, category: Category, description: string);
}
//# sourceMappingURL=expense.d.ts.map