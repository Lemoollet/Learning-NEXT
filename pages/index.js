import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const rest = await fetch(`${server}api/articles`);
  const articles = await rest.json();
  return {
    props: { articles },
  };
};

/* export const getStaticProps = async () => {
  const rest = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await rest.json();
  return {
    props: { articles },
  };
};
 */
