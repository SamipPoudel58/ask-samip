import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const QuizPlate = ({
  question,
  answer,
  message = 'Correct !',
  messageImg,
}: {
  question: string;
  answer: string[];
  message?: string;
  messageImg?: string;
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (answer.includes(userAnswer.toLowerCase())) {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }
  };

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <h1 className="text-primary font-playfair text-3xl sm:text-4xl text-center">
        {isCorrect ? message : question + '?'}
      </h1>
      {isCorrect && (
        <div className="flex justify-center mt-8">
          {messageImg && (
            <img
              className="object-cover w-full max-w-[400px] max-h-[250px]"
              src={messageImg}
              alt="message"
            />
          )}
        </div>
      )}
      {isWrong && (
        <div className="text-center text-rose-600 font-bold mt-8">Wrong!</div>
      )}
      <div className="flex justify-center mt-8">
        <form
          className="w-full max-w-[400px] flex flex-col sm:flex-row gap-x-2 gap-y-2"
          onSubmit={submitHandler}
        >
          <input
            onChange={(e) => setUserAnswer(e.target.value)}
            className="flex-1 px-4 py-2 rounded outline-blue-200 outline-offset-2 shadow"
            type="text"
            placeholder="Answer"
          />
          <button
            title={
              isCorrect
                ? 'Bruh! Your answer is correct, what are you submitting?'
                : 'Submit'
            }
            disabled={isCorrect}
            className="bg-primary disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg px-4 py-2 sm:py-0 rounded text-white hover:brightness-105 transition-filter duration-200 ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPlate;
