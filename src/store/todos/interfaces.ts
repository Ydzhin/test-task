export interface TodosState {
  todos: ITodoItem[]
}

export interface ITodoItem {
  id: string
  text: string
  selected: boolean
}
