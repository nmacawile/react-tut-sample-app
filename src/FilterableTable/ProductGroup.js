import ProductRow from "./ProductRow";

function ProductGroup(props) {
  const products = props.products;
  const category = props.category;

  return (
    <>
      <tr>
        <th colSpan="2" className=" text-left">
          {category}
        </th>
      </tr>

      {products.map((p, j) => (
        <ProductRow key={"product" + j} product={p} />
      ))}
    </>
  );
}

export default ProductGroup;
