import { Entity } from './entity';

type CategoryData = { name: string };

export class Category extends Entity {
  static data: Category[] = [];

  name: string;

  constructor({ name }: CategoryData) {
    super();
    this.name = name;
  }

  static getAll() {
    return this.data;
  }

  static create(data: CategoryData) {
    const category = new Category(data);
    this.data.push(category);
    return category;
  }

  static update(id: string, data: Partial<CategoryData>) {
    const category = this.data.find(c => c.id === id);
    if (!category) return null;
    Object.assign(category, data);
    return category;
  }

  static delete(id: string) {
    const index = this.data.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
}
