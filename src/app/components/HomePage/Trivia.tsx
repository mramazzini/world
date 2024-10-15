"use client";
import { useEffect, useState } from "react";
import triviaQuestions from "./triviaQuestions";

const Trivia = () => {
  const [question, setQuestion] = useState<{
    question: string;
    answers: string[];
    correctIndex: number;
  } | null>(null);
  const [clicked, setClicked] = useState<number>(-1);
  useEffect(() => {
    const random = Math.floor(Math.random() * triviaQuestions.length);
    const { wronganswers, correctanswer, question } = triviaQuestions[random];
    const randomIndex = Math.floor(Math.random() * 4);
    const answers = [...wronganswers];
    answers.splice(randomIndex, 0, correctanswer);
    setQuestion({
      question,
      answers,
      correctIndex: answers.indexOf(correctanswer),
    });
  }, []);

  const handleClick = (index: number) => {
    setClicked(index);
  };

  return (
    <>
      <h3 className="divider">Trivia</h3>
      {question && (
        <div className="flex flex-col items-center gap-4">
          <p>{question.question}</p>
          <div className="divider m-0"></div>
          <div className="flex flex-col gap-4 items-center bg-base-200 p-4 rounded-xl w-full lg:w-[256px]">
            <h4>Options:</h4>
            {question.answers.map((answer, index) => (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(
                    question.correctIndex,
                    question.answers.indexOf(answer)
                  );
                  handleClick(question.answers.indexOf(answer));
                }}
                className={`btn w-full ${
                  clicked === index
                    ? question.correctIndex === index
                      ? "btn-success"
                      : "btn-error"
                    : "btn-ghost border-gray-500"
                }`}
                key={answer}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Trivia;
