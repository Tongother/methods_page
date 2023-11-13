import { FC } from 'react';

interface TarjetaTemasProps {
  titulo: String,
  description: String,
}

const TarjetaTemas: FC<TarjetaTemasProps> = ({titulo, description}) => (
  <div className="flex flex-wrap items-center w-[18em] h-[14em] 
  bg-white rounded-[24px] shadow-md shadow-white shadow-inner p-4 mt-[2em] 
  cursor-pointer border-4 border-black transition ease-in-out delay-1 hover:bg-gray-50 hover:scale-105">
    <div>
      <h1 className="text-xl font-medium" dangerouslySetInnerHTML={{ __html: titulo }} />
    </div>
    <p dangerouslySetInnerHTML={{ __html: description }} />
    <div>
    </div>
  </div>
);

export default TarjetaTemas;