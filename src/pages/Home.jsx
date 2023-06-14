import Layout from "../components/layout/Layout";
import { ApiRequest } from "../components/Fetch";

export function Home() {
  return (
    <Layout>
      <section>
        <ApiRequest />
      </section>
    </Layout>
  );
}
