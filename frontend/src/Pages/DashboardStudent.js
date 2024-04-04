import React from 'react'

export const DashboardStudent = () => {
  return (


   <body class="bg-cover bg-no-repeat bg-fixed" style="background-image: url('./dist/img/BGROUND.jpg');">
  <div class="dashboard-container mt-20 border border-gray-400 rounded-lg">
  <div class="bg-gray-100 relative">
        <div class="bg-white py-10 text-black text-center absolute top-0 left-0 w-full h-35 "></div>
   <div class="relative z-10 flex justify-center items-center h-screen">
       <div class="relative w-1444 h-1024 bg-white shadow-lg p-8 mr-56 mt-10 dashboard-container">
           <img src="./dist/img/Checkattendance icon.jpg" alt="Setting" class="absolute top-8 left-24 w-32 h-32"/>
           <h1 class="text-2xl font-semibold  mt-32 ml-10 mr-10 text-gray-700 "> Check attendance</h1>
          
       </div>
       <div class="relative w-1440 h-1024 bg-white shadow-lg p-8 mt-10 dashboard-container">
         <img src="./dist/img/Setting icon.jpg" alt="Setting" class="absolute top-12 left-28 w-24 h-24"/>
         <h1 class="text-2xl font-semibold  mt-32 ml-24 mr-24 text-gray-700"> Setting</h1>

     </div>
   </div>
   <div class="absolute top-24 left-5 text-5xl font-bold">Dashboard</div>
   </div>
    </div>
</body>
  )
}
