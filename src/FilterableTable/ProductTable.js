import ProductGroup from "./ProductGroup";
import React from "react";

function ProductTable(props) {
  const products = props.products;
  const sortedProducts = products.reduce((sorted, p) => {
    const category = p.category;
    sorted[category] = sorted[category] ? [...sorted[category], p] : [p];
    return sorted;
  }, {});

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="2" className=" text-left">
              No match found.
            </td>
          </tr>
        ) : (
          Object.keys(sortedProducts).map((category, i) => (
            <ProductGroup
              key={category + i}
              category={category}
              products={sortedProducts[category]}
            ></ProductGroup>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
