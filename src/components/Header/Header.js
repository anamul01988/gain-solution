import React from "react";

const Header = () => {
  return (
    <div class="bg-[#0095A0] px-[120px]">
      <div class="navbar  ">
        <div class="flex-1">
          {/* <a class="btn btn-ghost normal-case text-xl">Logo</a> */}
          <h3 class=" font-bold text-xl text-white">Logo</h3>
        </div>
        {/* <div class="flex-none gap-2 border">
          <div class="form-control inline-block">
            <input
              type="text"
              placeholder="Search by Title or Brand"
              class="input border-none bg-inherit" 
              
            />
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          
        <div>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Add Product</button>
        </div>
        </div> */}
        <div class="flex-none gap-2">
          <form>
            <div class="form-control border-2 border-[#fff] relative">
              <input
                type="text"
                name="search"
                class="h-[33px] placeholder-white md:h-10 w-44 md:w-96 -mt-[2px] md:mt-[0px] pr-8 rounded-sm  px-4  text-[#fff]  bg-transparent border-solid outline-2 flex justify-center items-center md:text-sm text-[14px]"
                placeholder="Search by Title or Brand..."
                //   value=""
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

        {/* <button class="bg-[#F7F5F2] text-[#0095A0] btn-xs sm:btn-sm md:btn-md lg:btn-md ml-[8px]">Add Product</button> */}
        <label htmlFor="my-modal-3" class="btn bg-[#F7F5F2] text-[#0095A0] btn-xs sm:btn-sm md:btn-md lg:btn-md ml-[8px] modal-button">
          {" "}
          Add Product
          {/* <button class="btn bg-[#F7F5F2] text-[#0095A0] btn-xs sm:btn-sm md:btn-md lg:btn-md ml-[8px]">
            Add Product
          </button> */}
        </label>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg text-secondary">
            Booking for: 
          </h3>
          <form
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
          
              // value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {/* {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))} */}
            </select>
            <input
              type="text"
              name="name"
       
              // value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
  
              // value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
