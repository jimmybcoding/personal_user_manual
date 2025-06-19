const Motivators_Deal_Breakers = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-8 items-center text-blue-700">
            <div className="lg:w-1/2 sm:w-full border-2 border-yellow-500 rounded-xl my-6 p-6 bg-yellow-300">
                 <h2 className="font-bold text-xl border-b-yellow-500 border-b-2 mb-4 w-fit">Motivators</h2>
                 <p className="mb-4">Motivators are feeling like I have accomplished something or tasks that give me useful knowledge or experience. </p>
                 <p className="mb-4"> I am also motivated by solving meaningful problems, being trusted to work independently, and getting positive feedback that shows my work made an impact.</p>      
                 <p className="mb-6">I am also driven by seeing progress over time. Even small wins or steady improvement give me energy to keep pushing forward.</p>
            </div>
            <div className="lg:w-1/2 sm:w-full border-2 border-yellow-500 rounded-xl my-6 p-6 bg-yellow-300">
                 <h2 className="font-bold text-xl border-b-yellow-500 border-b-2 mb-4 w-fit">Deal Breakers</h2>
                 <p className="mb-4"> Dealbreakers include people who bad-mouth their partners. It instantly makes me wary of you and feel that we are not like-minded people.</p>
                <p className="mb-4"> I also struggle with co-workers who do not pull their weight but speak as if they do.</p>
                <p className="mb-6"> 🚫 My absolute biggest dealbreaker is mix-and-mingle, social networking-type work functions with people I do not know. I will not attend.</p>
            </div>
        </div> 
    )
}

export default Motivators_Deal_Breakers;


