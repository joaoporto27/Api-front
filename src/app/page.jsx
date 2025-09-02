import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-[url('/img/springfield.jpg')] bg-cover bg-center" >
      <div>
    <Image
      src="/svg/titulo.svg"
      alt="Logo"
      width={600}
      height={300}
      className="h-auto -mt-40 mb-8"
      />
      </div>
      <div className="border-2 border-gray-300 rounded-3xl w-full max-w-md lg:max-w-4xl min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center">Api dos Simpsons</h1>
        
        <div className="mb-6 text-center">
          <p>Este projeto utiliza uma API pública dos Simpsons que fornece informações sobre os personagens, episódios e muito mais.</p>
        </div>
       <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 w-full sm:w-auto">
  <Link href="/perfil" className="border-2 border-blue-500 text-blue-500 px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-100 transition-colors w-full sm:w-auto text-center">
    Ver perfil
  </Link>
  <Link href="/personagens" className="border-2 border-blue-500 text-blue-500 px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-100 transition-colors w-full sm:w-auto text-center">
    Ver personagens
  </Link>
</div>
      </div>
      </div>
  )
}