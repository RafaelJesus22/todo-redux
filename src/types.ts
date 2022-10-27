export interface Task {
  id: string;
  name: string;
  complete: boolean;
  date?: Date;
}

export type Filter = "All" | "complete" | "todo";