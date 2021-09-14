import "./ProductGrid.css";
import teaImg from "../../shared/img/tea2.jpg";

export const ProductGrid = () => {
  return (
    <div className="productgrid">
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
      <img className="productimg" src={teaImg} />
    </div>
  );
};
