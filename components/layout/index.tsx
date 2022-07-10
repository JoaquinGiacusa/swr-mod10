import { useMe } from "lib/hooks";

export function MainLayout({ children }: any) {
  const myData = useMe();

  return (
    <div>
      <header>
        <h2 style={{ border: "solid 3px red" }}>
          HEADER ---- MY EMAIL: {myData?.email}
        </h2>
      </header>
      <div>{children}</div>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}
