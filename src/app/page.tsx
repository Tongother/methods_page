import NavBar from "../components/NavBar"

export default function Home() {
    return (
    <div>
          <div className="" id="ComponenteNav">
            <NavBar></NavBar>
          </div>

          <div className="w-[100%] h-[50vh]">
            <div className="h-[60%] flex justify-center items-end">
              <h1 className="text-white font-bold text-5xl">NUMERICAL METHODS</h1>
            </div>
            <div className="w-[100%] text-center">
              <h1 className="text-zinc-400 text-xl mx-20 mt-20">
              Mathematical techniques that are used to solve mathematical 
              problems that cannot be solved, or that are very difficult to solve, 
              by analytical means.
              </h1>
            </div>
            <hr className="mt-20"/>
          </div>

          <div>

          </div>
    </div>
    )
}
