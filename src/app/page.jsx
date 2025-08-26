import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-center p-8 bg-[url('/img/springfield.jpg')] bg-cover bg-center" >
      <div className="absolute top-8 ">
        <img src="/svg/titulo.svg" alt="" className="max-h-100 max-w-100"/>
      </div>
   
      <div className="border-2 border-gray-300 rounded-3xl min-w-200 max-w-250 h-[350px] flex flex-col items-center justify-center align-center mt-30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h1 className="text-5xl font-bold text-black mb-8">Api dos Simpsons </h1>
        
        <div className="mb-12 text-center">
          <div className="text-black text-lg mb-2"></div>
        </div>
          <div className="flex space-x-16">
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 text-xl font-semibold rounded-lg hover:bg-blue-100 transition-colors">
            Ver perfil
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 text-xl font-semibold rounded-lg hover:bg-blue-100 transition-colors min-w-40 max-w-100">
            Ver personagens
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-8">
      <img src="/img/Marge.png" alt="" className="max-h-30 "/>
      <img src="/img/Homer.png" alt="" className="max-h-30 "/>
      <img src="/img/Bart.png" alt="Bart" className="max-h-30 "/>
      <img src="/img/Lisa.png" alt="" className="max-h-30 "/>
      <img src="/img/Maggie.png" alt="" className="max-h-30 "/>
      <img src="/img/SantasLittleHelper.png" alt="" className="max-h-30" />
      </div>
    </div>
  )
}