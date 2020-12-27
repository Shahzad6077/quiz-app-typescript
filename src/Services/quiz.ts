import {
  Category,
  Question,
  QuestionApiResult,
  GetQuestionParams,
} from "./../Types/fetchTypes";
import { shuffleArray } from "./../Utils";
export const getCategories = async () => {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    return data.trivia_categories;
  } catch (err) {
    return new Error(err);
  }
};
export const getQuestions = async ({
  amount,
  difficulty,
  categoryId,
  type,
}: GetQuestionParams) => {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}&category=${categoryId}`
    );
    const data = await res.json();
    return data?.results.map(
      (
        { question, correct_answer, incorrect_answers }: QuestionApiResult,
        i: number
      ) => {
        const options: Array<string> = shuffleArray([
          ...incorrect_answers,
          correct_answer,
        ]);
        return { question, options, correct_answer, user_answer: "", id: i };
      }
    );
  } catch (err) {
    return new Error(err);
  }
};
