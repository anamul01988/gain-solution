import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import TableBody from "./TableBody";
import useLazyLoad from "./useLazyLoad";
import { LoadingTable } from "./LoadingTable";

function Table() {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('./data.1658407534.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setProduct(data)
        })
    },[])
  
    const NUM_PER_PAGE = 20;
    const TOTAL_PAGES = 3;
    // const TOTAL_PAGES = product.length;
    // const TOTAL_PAGES = parseInt(product.length/20);
    // console.log(TOTAL_PAGES);
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const data = product.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data);
            resolve(data);
        }, 1000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    console.log(data);
  return (
    <div className="px-[120px]">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Modal
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Ram/Rom
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Tag
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                   {
                       data.map(product => {
                           return <TableBody key={product._id} product={product}/>;
                       })
                   }
                </tbody>
              </table>
              <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
              {/* <LoadingTable product={product}/> */}
            <h2>Loading Posts...</h2>
        </div>
            </div>
          </div>
        </div>
      </div>
      {/* <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table> */}
    </div>
  );
}

export default Table;
