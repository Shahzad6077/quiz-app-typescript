import { Category } from "./../Types/fetchTypes";

export const getCategories = async () => {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    return data.trivia_categories.map(({ name }: Category) => name);
  } catch (err) {
    return new Error(err);
  }
};
