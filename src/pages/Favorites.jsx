import Layout from "../components/layout/Layout";
import useFav from "../hooks/useFav";
import { useFavSetFav } from "../hooks/useFav";

export function Favorites() {
  const { animes } = useFav()
  useFavSetFav()
  // console.log(data)
  return <Layout>
    <h1>Favorites</h1>
  </Layout>;
}
