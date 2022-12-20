function ProductRow(props) {
  return (
    <tr>
      <td className={!props.product.stocked ? "text-red-600" : undefined}>
        {props.product.name}
      </td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;
