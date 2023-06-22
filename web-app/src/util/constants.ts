export const maxQuestions = 10;

export const initialState = {
  questions: [{
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: [""],
  }],
  answers: [],
  score: 0,
  currentIndex: 0,
}