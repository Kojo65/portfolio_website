import { type ContactMessage } from "@shared/schema";

// Interface for our storage system
export interface IStorage {
  saveContactMessage(message: ContactMessage): Promise<void>;
  getContactMessages(): Promise<ContactMessage[]>;
}

// Simple in-memory storage implementation
export class MemStorage implements IStorage {
  private messages: ContactMessage[];

  constructor() {
    this.messages = [];
  }

  // Save a contact message
  async saveContactMessage(message: ContactMessage): Promise<void> {
    this.messages.push({
      ...message,
    });
  }

  // Get all contact messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return [...this.messages];
  }
}

// Export a singleton instance
export const storage = new MemStorage();