import TarjetaTemas from "@/src/components/TarjetaTemas"
import NavBar from "@/src/components/NavBar"

export default function numerical_methods() {
    return (
      <div className="bg-black h-screen w-screen">
      <div>
        <div className="" id="ComponenteNav">
          <NavBar></NavBar>
        </div>

        <div className="w-full h-[60vh] flex flex-wrap justify-center space-x-4">
            <TarjetaTemas titulo={"Numerical solution of equations"} description={"Apply the solution of an equation with one variable, taking into account the decrease in error."}></TarjetaTemas>
            <TarjetaTemas titulo={"System of equations: Jacobi, Gauss, Newton"} description={"Apply numerical methods to find solutions to a system of equations, taking into account the decrease in error."}></TarjetaTemas>
            <TarjetaTemas titulo={"Interpolation and numerical integration."} description={"Generate a function for which all the original data can be entered and obtain 0 error, since the curve is modeled point by point."}></TarjetaTemas>
            <TarjetaTemas titulo={"Perform numerical integration"} description={"Use numerical solution methods for equations and systems of equations, as well as their applications."}></TarjetaTemas>
            <TarjetaTemas titulo={"Systems of Differential Equations"} description={"Predict the value of a function at one point in terms of the value of the function and its derivatives at another point."}></TarjetaTemas>
        </div>

        <div id="ComponenteFooter">
   
        </div>
      </div>
    </div>
    )
}
