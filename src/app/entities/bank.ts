import { Entity } from './entity';

type BankData = { name: string };

export class Bank extends Entity {
  static data: Bank[] = [];

  name: string;

  constructor({ name }: BankData) {
    super();
    this.name = name;
  }

  static getAll() {
    return this.data;
  }

  static create(data: BankData) {
    const bank = new Bank(data);
    this.data.push(bank);
    return bank;
  }

  static update(id: string, data: Partial<BankData>) {
    const bank = this.data.find(b => b.id === id);
    if (!bank) return null;
    Object.assign(bank, data);
    return bank;
  }

  static delete(id: string) {
    const index = this.data.findIndex(b => b.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
}
