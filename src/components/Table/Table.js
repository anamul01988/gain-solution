import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import TableBody from "./TableBody";
import useLazyLoad from "./useLazyLoad";
import Loading from "./Loading";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
function Table() {
  // console.log(searchData);
  const [product, setProduct] = useState([]);
  // const [data1, setData1] =useState([]);
  const [data2, setData2] = useState([]);


  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("./data.1658407534.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
        // console.log(data);
        resolve(data);
      }, 1000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  console.log(data);

  //  useEffect(()=>{
  // setData2(data)
  //  },[data])
  //  console.log(data2);

  // const searchItems = searchData && data.filter((item) => console.log(item.brand.includes(searchData)));
  // console.log("searchItemssearchItemssearchItems", searchItems);
  // useEffect(() => {
  //   if (searchItems) {
  //     console.log("searchItemssearchItemssearchItems", searchItems);
  //     setData2(searchItems);
  //   } else {
  //     setData2(data);
  //   }
  // }, [data, searchData]);
 

  return (
    <>
      <div class="bg-[#0095A0] lg:px-[120px] md:px-[60px] sm:px-[20px] px-[10px]">
        <div class="navbar  ">
          <div class="flex-1">
            <h3 class=" font-bold text-xl text-white">Logo</h3>
          </div>

          <div class="flex-none gap-2">
            <form>
              <div class="form-control hidden sm:hidden md:block lg:block border-2 border-[#fff] relative">
                <input
                  type="text"
                  name="search "
                  class="h-[33px]  placeholder-white md:h-10 w-44 md:w-96 -mt-[2px] md:mt-[0px] pr-8 rounded-sm  px-4  text-[#fff]  bg-transparent border-solid outline-2 flex justify-center items-center md:text-sm text-[14px]"
                  placeholder="Search by Title or Brand..."
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <button
                  class="absolute h-8 w-8 cursor-pointer flex justify-center items-center right-[0px] md:right-[2px] md:top-[4px] top-[1px] text-md"
                  aria-label="search"
                >
                  <svg
                    stroke="currentColor"
                    fill="white"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <label
            htmlFor="my-modal-3"
            class="btn bg-[#F7F5F2] text-[#0095A0] btn-xs sm:btn-sm md:btn-md lg:btn-md ml-[8px] modal-button"
          >
            Add Product
          </label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative p-0 ">
              <div className="modal_header flex justify-between items-center h-20 px-8 bg-[#0095A0]">
                <label
                  for="my-modal-3"
                  class="btn text-[#ffff] bg-inherit border-none order-2 btn-sm btn-circle "
                >
                  ✕
                </label>
                <h3 className="font-bold text-[#ffff] order-1 text-lg">
                  Add Product:
                </h3>
              </div>
              <form className="grid grid-cols-1 gap-3  mt-2 px-8">
                <label class="label  p-0">
                  <span class="label-text m-0 text-left">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your product name"
                  className="input mt-0 input-bordered w-full max-w-md"
                />

                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label class="label  p-0">
                      <span class="label-text m-0 text-left">Brand</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your product name"
                      className="input mt-0 input-bordered w-full max-w-md"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label class="label  p-0">
                      <span class="label-text m-0 text-left">Ram/Rom</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Zip code"
                      className="input mt-0 input-bordered w-full max-w-md"
                    />
                  </div>
                </div>
                <label class="label  p-0">
                  <span class="label-text m-0 text-left">Tags</span>
                </label>
                <select
                  name="slot"
                  placeholder="Search and selects"
                  className="select select-bordered w-full max-w-md"
                ></select>
                <label class="label  p-0">
                  <span class="label-text m-0 text-left">Price</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your product price"
                  className="input input-bordered w-full max-w-md"
                />

                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 mr-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <ImCancelCircle class="mt-1 mr-2" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <MdOutlinePublishedWithChanges class="mt-1 mr-2" />
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[120px] md:px-[60px] sm:px-[20px] px-[10px]">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div class="px-4 md:px-10 py-4 md:py-7">
                  <div class="flex items-center md:justify-between lg:justify-between justify-around">
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
                        class="text-sm font-medium text-gray-600 lg:px-6 md:px-3 px-1 py-4"
                      >
                        Modal
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-600  md:px-3 px-1 py-4"
                      >
                        Ram/Rom
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-600  md:px-3 px-1 py-4"
                      >
                        Tag
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-600  md:px-3 px-1 py-4"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    data?.filter((row) =>
                    // note that I've incorporated the searchedVal length check here
                    !searchData.length || row.brand
                      .toString()
                      .toLowerCase()
                      .includes(searchData.toString().toLowerCase()) 
                  )
                    .map((product) => {
                      return <TableBody key={product._id} product={product} />;
                    })
                    }
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
    </>
  );
}

export default Table;
