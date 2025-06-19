"use client"

import Image from "next/image"

const Perceptions = ({ handleOpenEmailModal }) => {
  
    return (
    <div className="container bg-pink-300 text-black">
        <div className="pt-10 pb-6 px-6">      
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 mt-6 my-6 ml-6 text-5xl font-bold"
                id="Perceptions"
            >
              Perceptions & Misunderstandings                  
            </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-4xl mx-auto p-4 my-4">
            {/* Strengths Card */}
            <div className="w-full sm:w-2/5 p-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
                <h3 className="text-lg font-semibold border-b-2 border-blue-500 mb-2 pb-1">💪 My perceived strengths</h3>
                <ul className="list-disc pl-5 space-y-1">
                <li>Responsible and reliable</li>
                <li>Analytical and composed</li>
                <li>Empathetic and understanding</li>
                <li>Will look for answers extensively before asking for help</li>
                </ul>
            </div>

            {/* Weaknesses Card */}
            <div className="w-full sm:w-2/5 p-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
                <h3 className="text-lg font-semibold border-b-2 border-blue-500 mb-2 pb-1">🧩 My perceived weaknesses</h3>
                <ul className="list-disc pl-5 space-y-1">
                <li>I take a long time to build close, personal relationships with coworkers.</li>
                <li>I Struggle with doing things I think are pointless or are could be automated.</li>
                <li>My facial expressions do not always accurately show my emotions.</li>
                <li>I require many bathroom breaks because I drink coffee all day long to stay mentally locked in.</li>
                </ul>
            </div>
       </div>
        <div className="sm:flex-col flex gap-3 align-middle w-4/5 mx-auto">
            <div className="sm:self-center sm:my-6 w-2/5 min-w-fit p-4 self-start bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
                <h1 className="text-3xl text-black font-light">James Barbour</h1>
                <p>Let&apos;s Connect!</p>
                <p className="">Email: jameskbarbour1@gmail.com</p>
                <button 
                className=" sm:min-w-fit my-6 p-4 text-center font-mono border-2 border-white border-dashed text-white hover:text-black"
                onClick={handleOpenEmailModal}
                >Shoot me a message</button>
            </div>
            <div className="m-3 self-center bg-black text-white font-mono pl-32 pt-12 pr-1 pb-5 skew-y-2 sm:pl-8"> 
                <Image
                src="/maisy.jpg"
                alt="my apricot coloured baby, the GOAT puppy."
                width={100}
                height={100}
                sizes="100vw"
                className="rounded-full hover:animate-bounce">   
                </Image>
                <p className="text-med">My cockapoo, Maisy</p>
                <p className="text-xs skew-y-2">She jumps when petted -- IRL and virtually</p>
            </div>
        </div>
    </div>
    )
}

export default Perceptions