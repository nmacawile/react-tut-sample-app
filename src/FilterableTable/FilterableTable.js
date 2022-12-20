import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
import PRODUCTS from "./products.json";

function FilterableTable() {
  const [products, setProducts] = useState(PRODUCTS);
  const [hideUnavailable, setHideUnavailable] = useState(false);
  const [q, setQ] = useState("");

  function toggleHide(e) {
    const _hideUnavailable = e.target.checked;
    setHideUnavailable(_hideUnavailable);
    filter(q, _hideUnavailable);
  }

  function filterNames(e) {
    const _q = e.target.value.trim();
    setQ(_q);
    filter(_q, hideUnavailable);
  }

  function filter(_q, _hideUnavailable) {
    const regExp = new RegExp(_q, "i");
    let _products = PRODUCTS.filter((p) => {
      return (
        (!_hideUnavailable || p.stocked) &&
        (_q == "" || p.name.match(regExp) || p.category.match(regExp))
      );
    });
    setProducts(_products);
  }

  return (
    <div className="p-4">
      <SearchBar
        toggleHide={toggleHide}
        hideUnavailable={hideUnavailable}
        filterNames={filterNames}
      ></SearchBar>
      <ProductTable products={products}></ProductTable>
    </div>
  );
}

export default FilterableTable;
