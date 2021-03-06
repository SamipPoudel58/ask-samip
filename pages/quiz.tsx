import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Loader from '../components/loader';
import QuizPlate from '../components/quiz-plate';

const Quiz = () => {
  const router = useRouter();
  const quizes = [
    {
      question: 'What',
      answer: ['cc pwat', 'sisi pwat'],
      messageImg:
        'https://images.unsplash.com/photo-1508061501437-e1b984a4d665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    },
  ];
  const questionNumber = Number(router.query.q) || 1;
  const { question, answer, messageImg } = quizes[questionNumber - 1];

  return (
    <div>
      <Head>
        <title>Ask Samip | Answering Questions With A GIF!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="asksamip, ask samip, Samip Poudel"></meta>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>"
        ></link>

        <meta
          property="og:title"
          content="Ask Samip | Answering questions with a GIF!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://asksamip.netlify.app/ograph.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://asksamip.netlify.app/ograph.png"
        />
        <meta
          property="og:description"
          content="Samip answers your questions with a GIF!"
        />
        <meta property="og:url" content="https://asksamip.netlify.app" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://asksamip.netlify.app/ograph.png"
        />
        <meta property="twitter:site" content="@samip4sure" />
        <meta property="twitter:creator" content="@samip4sure" />
      </Head>

      {question && <Header />}

      <main className="min-h-[90vh] flex justify-center items-center px-8 lg:px-0">
        {question ? (
          <QuizPlate
            question={question}
            answer={answer}
            messageImg={messageImg}
          />
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
};

export default Quiz;
