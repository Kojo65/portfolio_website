import { type ContactMessage } from "@shared/schema";

export interface IStorage {
  saveContactMessage(message: ContactMessage): Promise<void>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private messages: ContactMessage[];

  constructor() {
    this.messages = [];
  }

  async saveContactMessage(message: ContactMessage): Promise<void> {
    this.messages.push({
      ...message,
    });
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return [...this.messages];
  }
}

export const storage = new MemStorage();
