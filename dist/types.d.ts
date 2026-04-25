export type Category = 'food' | 'transport' | 'entertainment' | 'bills' | 'other';
export interface Expense {
    id: number;
    description: string;
    amount: number;
    date: string;
    category: Category;
}
//# sourceMappingURL=types.d.ts.map