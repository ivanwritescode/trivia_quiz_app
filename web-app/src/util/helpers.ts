import { IQuestion } from "./interfaces";

export const selectRandomQuestions = (questions: IQuestion[], count: number) => {
    const randomQuestions = [];

    const indices: number[] = [];
    while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!indices.includes(randomIndex))
            indices.push(randomIndex);
    }

    for (const index of indices) {
        randomQuestions.push(questions[index]);
    }

    return randomQuestions;
}