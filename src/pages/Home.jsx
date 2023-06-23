import Layout from "../components/layout/Layout";
import AnimeList from "../components/AnimeList";
import AnimeFilter from "../components/AnimeFilter";

export function Home() {
  return (
    <Layout>
      <section>
        <AnimeFilter />
        <AnimeList url={"https://api.jikan.moe/v4/anime"}/>
      </section>
    </Layout>
  );
}
