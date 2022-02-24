export interface TablePage {
  titlePage: string;
  getAllData(): void;
  create(): void;
  update(id: number): void;
  delete(id: number): void;
}