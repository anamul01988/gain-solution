import React from "react";

function TableBody({product}) {
    console.log(product);
    const {phone_images ,brand, phone_details, ram, internal_storage, phone_price} = product;
  return ( 
    <tr>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
     
            <div class=" flex align-items-center justify-center ">
            <img class="w-[90px] h-[100px] object-center" src={phone_images[0]} alt="img" />
            {/* <h3>img</h3> */}
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-sm mb-2 w-20 h-4 " >{phone_details.model}</div>
                <div class="font-regular text-sm mb-2 w-20 h-4  ">{brand}</div>
            </div>
            </div>
        
      
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {ram}/{internal_storage}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        Otto
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        TK {phone_price}
      </td>
    </tr>
  );
}

export default TableBody;
