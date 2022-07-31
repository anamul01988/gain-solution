import React, { useEffect, useState } from "react";

function TableBodyPractice({ product , badges, setBadges ,value}) {
  // console.log(product);
  const [bestValue, setBestValue] = useState("");
  const [bestCamera, setBestCamera] = useState("");
  const [bestPerform, setBestPerform] = useState("");

  const {
    phone_images,
    brand,
    phone_details,
    ram,
    storage,
    phone_price,
    speciality,
  } = product;
 
  useEffect(() => {
    // console.log(brand);
    if (
    //   parseInt(phone_price) <= 20000 &&
    //   parseInt(ram) >= 4 &&
    //   parseInt(storage) >= 64 &&
      phone_price <= 20000 &&
      ram >= 4 &&
      storage >= 64 &&
      brand === "Xiaomi"
    ) {
      //   setBestValue("Best Value");
      setBestValue("best-value");
    } else if (
      parseInt(phone_details.selfieCamera.split(",")[0].split(" ")[0]) >= 13 &&
      storage >= 64 &&
      phone_details.external.includes("microSD")
    ) {
      setBestValue("camera");
    } else if (
      parseInt(phone_price) > 20000 &&
      parseInt(ram) > 4 &&
      parseInt(storage) >= 128 &&
      phone_details.chipset.includes("Snapdragon") &&
      phone_details.displayType.includes("AMOLED") &&
      speciality.map((x) => x.includes("1080p"))
    ) {
      setBestValue("perfomance");
    }
    else{
        setBestValue("No Badges")
    }
  }, [phone_images, brand,phone_details,ram,storage, phone_price, speciality ]);

  console.log("=====",value)
  return (
    <tr>
      <td class="text-sm text-gray-900 font-light  md:px-3  py-4 whitespace-nowrap">
        <div class=" flex align-items-center justify-center ">
          <img
            class="w-[90px] h-[100px] object-center"
            src={phone_images[0]}
            alt="img"
          />

          <div class="px-6 py-4 items-center">
            <div class="z text-sm font-bold mb-2 w-20 h-4 ">
              {phone_details.model}
            </div>

            <div class="font-regular text-sm mb-2 w-20 h-4  ">{brand}</div>
          </div>
        </div>
      </td>
      <td class="text-sm text-gray-900 font-light  md:px-3  py-4 whitespace-nowrap">
        {ram}/{storage}
      </td>
      <td class="text-sm text-gray-900 font-light  md:px-3  py-4 whitespace-nowrap">
        <button
          class={` font-bold button_base px-5 py-1 ${
            (value || bestValue) == "best-value" && " text-[#DD9E10]  bg-[#ffedd5] "
          } || ${
            (value || bestValue) == "camera" && " text-[#874C72]  bg-[#F1EBF1] "
          } || ${
            (value || bestValue) == "perfomance" && " text-[#11A0DB]  bg-[#E5F4FB]"
          }   `}
        >
          {value ? value : bestValue}
        </button>
      </td>
      <td class="text-sm text-gray-900 font-light md:px-3  py-4 whitespace-nowrap">
        TK {phone_price}
      </td>
    </tr>
  );
}

export default TableBodyPractice;