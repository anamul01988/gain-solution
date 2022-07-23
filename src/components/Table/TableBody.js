import React, { useEffect, useState } from "react";

function TableBody({product}) {
    console.log(product);
    const [bestValue, setBestValue] = useState("");
    const [bestCamera, setBestCamera] = useState("");
    const [bestPerform, setBestPerform] = useState("");
    const {phone_images ,brand, phone_details, ram, internal_storage, storage, phone_price} = product;
    useEffect(()=>{
        console.log(brand);
        if(phone_price <= 20000 && ram >= 4 && storage >= 64 && (brand === "Xiaomi")){
           setBestValue("Best Value")
        }
        else if(phone_details.selfieCamera >= "16 MP" && storage >=64 && phone_details.external ==="microSDXC (dedicated slot)"){
           setBestCamera("Best Camera")
        }
        else if(phone_price > 20000 && ram> 4 && storage >= 128 && phone_details.chipset.includes("Snapdragon") && phone_details.displayType.includes("AMOLED")){

            setBestPerform("Best Perfomance");
        }
        // else if(phone_details.chipset.includes("Snapdragon")){
        //     console.log("fond");
        // }
       
    },[])
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
        {ram}/{storage}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <button class=" text-[#DD9E10] font-bold bg-[#ffedd5] button_base px-5 py-1">{bestValue || bestCamera || bestPerform}</button>
          {/* <button class=" text-[#DD9E10] font-bold bg-[#ffedd5] button_base px-5 py-1">
          {bestValue}
        </button>{" "}
        ||
        <button class=" text-[#874C72] font-bold bg-[#F1EBF1] button_base px-5 py-1">
          {bestPerform}
        </button>{" "}
        ||
        <button class=" text-[#11A0DB ] font-bold bg-[#E5F4FB] button_base px-5 py-1">
          {bestPerform}
        </button> */}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        TK {phone_price}
      </td>
    </tr>
  );
}

export default TableBody;
