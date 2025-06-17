import { Entity } from './entity';

type TransactionType = 'income' | 'expense';
type TransactionData = {
  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  bankId: string;
};

export class Transaction extends Entity {
  static data: Transaction[] = [];

  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  bankId: string;

  constructor(data: TransactionData) {
    super();
    Object.assign(this, data);
  }

  static getAll() {
    return this.data;
  }

  static create(data: TransactionData) {
    const transaction = new Transaction(data);
    this.data.push(transaction);
    return transaction;
  }

  static update(id: string, data: Partial<TransactionData>) {
    const transaction = this.data.find(t => t.id === id);
    if (!transaction) return null;
    Object.assign(transaction, data);
    return transaction;
  }

  static delete(id: string) {
    const index = this.data.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
}
