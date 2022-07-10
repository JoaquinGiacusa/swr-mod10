import { useProduct } from "lib/hooks";

export function Product({ productId }: any) {
  const productData = useProduct(productId);
  console.log({ productData });

  return <div>Product Data{JSON.stringify(productData)}</div>;
}
