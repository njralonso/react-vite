import Layout from "../components/layout/Layout";
import AnimeList from "../components/AnimeList";

export function Home() {
  return (
    <Layout>
      <section>
        <AnimeList url={"https://api.jikan.moe/v4/anime"}/>
      </section>
    </Layout>
  );
}
