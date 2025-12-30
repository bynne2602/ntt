export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
}