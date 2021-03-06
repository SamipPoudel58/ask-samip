import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Loader from '../components/loader';
import QuestionPlate from '../components/question-plate';

const Home: NextPage = () => {
  const router = useRouter();
  const hasQuestion = !!router.query.q;
  let formattedQuestion = '';
  let answer = '';
  if (hasQuestion) {
    const question = (router.query.q as string) || 'a-b-c';
    answer = question.split('-').slice(-1)[0];
    formattedQuestion = question
      .split('-')
      .slice(0, -1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }

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
      {hasQuestion && <Header />}
      <main className="h-screen flex justify-center items-center px-8 lg:px-0">
        {hasQuestion ? (
          <QuestionPlate question={formattedQuestion} answer={answer} />
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
};

export default Home;
