export interface BookModel {
  id: number;
  bookName: string;
  borrowDate: string;
  dueDate: string;
  returnDate: string | null;
}
