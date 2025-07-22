
export function Card(){
    return(
        <div className="flex flex-col">
        <div className="w-[300px] bg-white h-[250px] flex flex-col mt-10 ml-12 pt-5 rounded-lg shadow-[0_2px_4px_#0000001a,_0_8px_16px_#0000001a] justify-center items-center ">
            <div className="flex flex-col justify-center items-center pb-8">
              <input type="text" placeholder="Enter address or phone number" className="border h-9 border-gray-200 w-[275px] text-sm pl-2 rounded" />
            <input type="text" placeholder="Password" className="border h-9 border-gray-200 w-[275px] text-sm pl-2 rounded mt-2"/>
            <button className="h-8 bg-[#0866ff] w-[275px] text-sm pl-2 rounded mt-3 font-bold font-[20px] text-white">Login</button>
            <p className="text-[12px] text-[#0866ff] font-normal font-sans mt-3 leading-snug" >Forgotten password?</p>
            <hr class="border-t border-gray-300 my-4 w-[275px] " />
            <button className="h-8 bg-[#42b72a] w-[160px] text-sm rounded mt-2 font-bold font-[20px] text-white" >Create new account</button> 
            </div>
        </div >
          <p className="font-sans text-[11px] pl-[82px] pt-5">
          <span className="font-medium">Create a Page</span>
          <span className="font-normal"> for a celebrity, brand or business</span>
          </p>
        </div>    
    )
}