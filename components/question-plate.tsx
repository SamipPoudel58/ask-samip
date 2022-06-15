/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const QuestionPlate = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const yesImages = [
    'https://c.tenor.com/0zQRsHJRFQEAAAAC/hulk-hogan-nodding.gif',
    'https://c.tenor.com/vtC0C_NzM2oAAAAM/youre-goddamn-right-breaking-bad.gif',
  ];
  const noImages = [
    'https://c.tenor.com/sM-7HaE3Xb0AAAAd/no-no-no.gif',
    'https://c.tenor.com/6DqfGATMUJkAAAAd/nooo-no.gif',
  ];

  const yes = Boolean(Number(answer[0]));

  console.log(answer, yes);

  const imageNumber = answer[1]
    ? Number(answer[1])
    : Math.floor(Math.random() * yesImages.length);
  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-primary font-playfair text-3xl sm:text-4xl text-center">
        {question.split('-').join(' ') + '?'}
      </h1>

      <div className="flex justify-center mt-8 sm:mt-12">
        <img
          className="w-[520px]"
          src={yes ? yesImages[imageNumber] : noImages[imageNumber]}
          alt="answer"
        />
        {/* <div className="relative">
          <Image
            className="object-fit"
            src={yes ? yesImages[imageNumber] : noImages[imageNumber]}
            alt="answer"
            width={520}
            height={350}
          />
        </div> */}
      </div>
    </div>
  );
};

export default QuestionPlate;
