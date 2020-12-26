export type Category = {
  id: number;
  name: string;
};
export type Question = {
  question: string;
  options: Array<string>;
  correctOption: string;
};
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
