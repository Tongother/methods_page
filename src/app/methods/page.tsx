import TarjetaTemas from "@/src/components/TarjetaTemas"
import NavBar from "@/src/components/NavBar"
import Link from "next/link"

export default function numerical_methods() {
    return (
      <div className="bg-black h-screen w-screen">
      <div>
        <div className="" id="ComponenteNav">
          <NavBar></NavBar>
        </div>

        <div className="w-[80%] h-[60vh] flex flex-wrap justify-center space-x-4">
            <Link href="/methods/topic-1/error"><TarjetaTemas titulo={"Solución numérica de ecuaciones"} description={"Aplicar la solución de una ecuación con una variable, teniendo en cuenta la disminución del error."}></TarjetaTemas></Link>
            <Link href="/methods/topic-2/gauss-seidel"><TarjetaTemas titulo={"Sistema de ecuaciones: Jacobi, Gauss, Newton"} description={"Aplicar métodos numéricos para encontrar soluciones a un sistema de ecuaciones, teniendo en cuenta la disminución del error."}></TarjetaTemas></Link>
            <Link href="/methods/topic-3/newton-interpolation"><TarjetaTemas titulo={"Interpolación y integración numérica."} description={"Generar una función para la cual se puedan ingresar todos los datos originales y obtener 0 error, ya que la curva se modela punto por punto."}></TarjetaTemas></Link>
            <Link href="/methods/topic-4/trapezium"><TarjetaTemas titulo={"Métodos de instración numérica"} description={"Utilizar métodos de solución numérica de ecuaciones y sistemas de ecuaciones, así como sus aplicaciones."}></TarjetaTemas></Link>
            <Link href="/methods/topic-5/euler"><TarjetaTemas titulo={"Sistema de ecuaciones diferenciales"} description={"Predecir el valor de una función en un punto en términos del valor de la función y sus derivadas en otro punto."}></TarjetaTemas></Link>
        </div>

        <div id="ComponenteFooter">
   
        </div>
      </div>
    </div>
    )
}
