import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import TableBody from "./TableBody";
import useLazyLoad from "./useLazyLoad";
import Loading from "./Loading";

function Table() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("./data.1658407534.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  const NUM_PER_PAGE = 20;
  const TOTAL_PAGES = 3;

  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = product.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 1000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  console.log(data);
  return (
    <div className="lg:px-[120px] md:px-[60px] sm:px-[20px] px-[10px]">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <div class="px-4 md:px-10 py-4 md:py-7">
                <div class="flex items-center justify-between">
                  <p
                    tabindex="0"
                    class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white"
                  >
                    All Products
                  </p>
                  <div class=" flex items-center text-sm font-medium leading-none text-gray-600 border-solid border-2 border-black dark:text-gray-200   bg-transparent dark:bg-gray-800     dark:hover:bg-gray-700  cursor-pointer rounded">
                    <select
                      aria-label="select"
                      class="py-3 px-4  focus:text-indigo-600 focus:outline-none bg-transparent"
                    >
                      <option class="text-sm  text-indigo-800">
                        All Products
                      </option>
                      <option class="text-sm text-indigo-800">
                        Best Value
                      </option>
                      <option class="text-sm text-indigo-800">
                        Best Perfomence
                      </option>
                      <option class="text-sm text-indigo-800">
                        Best Camera
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <table class="min-w-full text-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-600 px-6 py-4"
                    >
                      Modal
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-600 px-6 py-4"
                    >
                      Ram/Rom
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-600 px-6 py-4"
                    >
                      Tag
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-600 px-6 py-4"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product) => {
                    return <TableBody key={product._id} product={product} />;
                  })}
                </tbody>
              </table>
              <div
                ref={triggerRef}
                className={clsx("trigger", { visible: loading })}
              >
                <Loading></Loading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
