import { useState,useContext } from "react";
import SaleProductsContext from "../../context/SaleProductsContext";

const SaleProducts = () => {
  const [state] = useState({
    title: "Sales",
  });
  const {SaleProductsData: {saleProducts}, } = useContext(SaleProductsContext);
  console.log(saleProducts)
  return (
    <div className="saleProducts">
      <div className="saleProducts__contents">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="saleProducts__contents__heading">{state.title}</div>
            </div>
          </div>
          <div className="saleProducts__blocks">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;