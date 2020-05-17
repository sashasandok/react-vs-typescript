export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface ITodoFormProps {
  onAdd(title: string): void;
}
