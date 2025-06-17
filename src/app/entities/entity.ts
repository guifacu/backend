import { randomUUID } from 'crypto';

export abstract class Entity {
  public id: string;

  constructor() {
    this.id = randomUUID();
  }
}
