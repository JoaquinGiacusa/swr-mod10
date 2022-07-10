import { MainLayout } from "components/layout";
import { useMe } from "lib/hooks";

export default function UsersPage() {
  const myData = useMe();
  return (
    <MainLayout>
      <div>USER DATA:</div>
      <div>NOMBRE: {myData?.name}</div>
    </MainLayout>
  );
}
