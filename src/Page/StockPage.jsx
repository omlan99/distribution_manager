import axios from "axios";
import { useEffect, useState } from "react";

const StockPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/stock')
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })

    } , [])
    // console.log(added)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Buy Price</th>
              <th>Sell Price</th>
              <th>Initail Qty</th>
              <th>Initial Qty Value</th>
              <th>Sold Qty</th>
              <th>Sold Value</th>
              <th>Ordered Qty</th>
              <th>Remained Qty</th>
              <th>Remained Qty Value</th>
              <th>Damaged Value</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                products.map(product => {
                    <tr>
              <th>1</th>
              <td></td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
                })
            }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockPage;
