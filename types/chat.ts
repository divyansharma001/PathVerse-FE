// types/chat.ts
export type Message = {
    id: string;
    content: string;
    type: "user" | "bot";
    timestamp: Date;
  };