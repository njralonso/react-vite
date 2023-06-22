import Layout from "../components/layout/Layout";
import useFav from "../hooks/useFav";

export function Favorites() {
  const { animes } = useFav()
  // console.log(animes)
  return <Layout>Favorites</Layout>;
}
