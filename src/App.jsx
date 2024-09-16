import "./App.css"

function App() {
  return (
    

    // WHEN DOING GRID always divide grid with 12

    <div>
        <h1 className="mt-7 text-center font-black">TWO DIVISION</h1>
        <div className="grid-col-2 m-4 grid gap-4 sm:grid-cols-2">
           <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
           <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
        </div>
{/* ---------------------------------------------------------------------------- */}

    <h1 className="mt-7 text-center font-black">THREE DIVISION</h1>                                        {/* 👇🏼3 grid  */}
    <div className="grid-col-2 m-4 grid gap-4 sm:grid-cols-3">
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-red-500 shadow"></div>
    </div>

{/* ---------------------------------------------------------------------------- */}

    <h2 className="text-center font-black">FOUR DIVISION</h2>
                {/* grid-cols-3 by removing this     */}
    <div className="m-4 grid gap-4 sm:grid-cols-4">
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-red-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-purple-500 shadow"></div>
    </div>

{/* ---------------------------------------------------------------------------- */}

    <h1 className="mt-7 text-center font-black">NON EQUAL SECTION</h1>
    <p className="text-center font-thin">2:10 ratio</p>

     {/* IN the DESIGN WORLD THEY USUSALLY have grid colum 12 
     And the inner child to occupy as many column needed 
     sm: == BIgger screen  */}
    <div className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-12">
               {/* 👇🏼take two column  */}
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow sm:col-span-10"></div>
    </div>


{/* ---------------------------------------------------------------------------- */}

    <h1 className="mt-7 text-center font-black">NON EQUAL SECTION</h1>
    <p className="text-center font-thin">Tailwind Like</p>
    <p className="text-center font-thin">3:6:3 ratio</p>

    <div className="m-4 grid gap-4 sm:grid-cols-12">
      {/* "hidden hides the element in smaller screen"  */}
      <div className="hidden min-h-[100px] rounded-lg bg-orange-500 shadow sm:col-span-3 sm:block"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow sm:col-span-6"></div>
       {/* Hidden on smaller screen  */}
      <div className="hidden min-h-[100px] rounded-lg bg-purple-500 shadow sm:col-span-3 sm:block"></div>
    </div>

    </div>
  );
}

export default App