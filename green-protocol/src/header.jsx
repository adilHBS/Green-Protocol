
const header = () =>{
    return (
       <div>
      <header className="fixed top-0 w-full z-10 bg-[#008d38]">
        <div className="flex justify-between items-center w-[90%] lg:w-[80%] m-auto text-white h-[64px] ">
          <h1 className="text-2xl font-bold">Green Protocol</h1>
          <ul className="flex gap-4 lg:gap-4 nav-list text-white">
              <li><a href="#problem">Problem</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#businessModel">Business Model</a></li>
              <li><a href="#profit">Profit Distribution</a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}
    
export default header;