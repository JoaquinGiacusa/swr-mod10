import { MainLayout } from "components/layout";
import { Product } from "components/product";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const productId = router.query.id;

  return (
    // <MainLayout>
    //   <Product productId={productId} />
    // </MainLayout>
    <div>
      <Product productId={productId} />
    </div>
  );
}
