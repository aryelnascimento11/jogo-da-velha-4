"use client"

import { table } from 'console'
import { Euphoria_Script } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  let tabela = ["", "", "", "", "", "", "", "", ""]
  let lilian = "X"



  function marca(id: number) {


    if (tabela[id] === "") {
      tabela[id] = lilian
    } else {
      return
    }

    if (lilian == "X") {
      lilian = "O"
    } else {
      lilian = "X"
    }
    render()
  }

  function render() {
    let tds = document.querySelectorAll("td")
    for (let lops = 0; lops < 9; lops++) {
      tds[lops].innerHTML = tabela[lops]
    }
  }
  return (
    <table className="flex justify-center">
      <tbody className="flex flex-col  ">
        <tr className="justify-center">
          <td onClick={(e) => marca(0)} className="bg-black border text-white border-white hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition">{tabela[0]}</td>
          <td onClick={(e) => marca(1)} className="bg-black border text-white border-white hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition">{tabela[2]}</td>
          <td onClick={(e) => marca(2)} className="bg-black border text-white border-white hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
        </tr>
        <tr>
          <td onClick={(e) => marca(3)} className="bg-black border text-white border-white   hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
          <td onClick={(e) => marca(4)} className="bg-black border text-white border-white   hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
          <td onClick={(e) => marca(5)} className="bg-black border text-white border-white   hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
        </tr>
        <tr>
          <td onClick={(e) => marca(6)} className="bg-black border text-white border-white  hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
          <td onClick={(e) => marca(7)} className="bg-black border text-white border-white  hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
          <td onClick={(e) => marca(8)} className="bg-black border text-white border-white  hover:scale-110  h-20 text-3xl text-center w-20 cursor-pointer transition"></td>
        </tr>
      </tbody>
    </table>
  )
}
