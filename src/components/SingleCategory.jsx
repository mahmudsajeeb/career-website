import React from 'react'
import { IconContext } from "react-icons"; 

import { FaMoneyBill } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';

import { AiFillDollarCircle } from "react-icons/ai"; // import the icon components you need
import { BiBuildingHouse } from "react-icons/bi";
import { IoMdMegaphone } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { GiGears } from "react-icons/gi";
import { BiHealth } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
// import jobCategories from "./jobCategories.json";
function SingleCategory({job}) {
  return (
    <>

    <div className='rounded-md shadow-md p-10 bg-purple-100'>
    <span className='text-gray-400	'>
    <IconContext.Provider value={{ className: "category-icon" }}>
            {/* Render the icon component dynamically based on the icon name */}
            {React.createElement(
              eval(job.icon),
              { size: 30 },
              null
            )}
          </IconContext.Provider>
    </span>
      <h1>{job.category_name}</h1>
      <p className='text-gray-400	'>{job.dec}</p>
    </div>
    </>
  )
}

export default SingleCategory