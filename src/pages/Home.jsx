import Layout from "../components/layout/Layout";
import { ApiRequest } from "../components/Fetch";
import InputSearch from "../components/InputSearch";

export function Home() {
  return (
    <Layout>
      <section>
        {/* <InputSearch/> */}
        <ApiRequest />
      </section>
    </Layout>
  );
}
