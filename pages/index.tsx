import type { NextPage } from "next";
import { MainLayout } from "components/layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <h1>Soy el Home</h1>
        <Link href="/users">
          <a>Ir a users page</a>
        </Link>
      </MainLayout>
    </div>
  );
};

export default Home;
