import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

const descript =
  "Pith is an experimental online discussion space that builds on the notion of an electronic direct democracy. This is a place where articles about how and why it's being designed are posted";

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout title="Posts - Pith Blog" description={descript}>
        <div className="about">
          <p className="post-wrapper about-int">
            <a href="https://pith.is">Pith</a> is an experimental online
            discussion space that builds on the notion of an electronic direct
            democracy. This is a place where articles about how and why it's
            being designed are posted.
          </p>
        </div>
        {allPostsData.map(({ id, date, author, title, summary }) => (
          <div key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <div className="post-wrapper link">
                <h2 className="post-title">{title}</h2>
                <Date className="post-date" dateString={date} />
                <div className="post-author">{author}</div>
                <summary className="post-summary">
                  {summary.substring(0, 150) + "..."}
                </summary>
              </div>
            </Link>
          </div>
        ))}
      </Layout>
    </div>
  );
}
