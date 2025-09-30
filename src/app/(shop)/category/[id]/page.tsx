// import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  const labels: Record<Category, string> = {
    men: "for men",
    women: "for women",
    kid: "for kids",
    unisex: "for everyone",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Products ${labels[id]}`}
        subtitle="Browse our full collection"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
