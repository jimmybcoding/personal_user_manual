"use client";

const workFacts = [
  {
    title: "Work Conditions I Like",
    text: "Quiet environments with my own space. Remote work or flexible in-person hours are preferred. I love to sit with a coffee and AirPods and immerse myself in work, zoning out everything else."
  },
  {
    title: "Work I Dislike",
    text: "Pointless, excessive meetings, any sort of forced team-building activities, not understanding the purpose of a task, and giving presentations."
  },
  {
    title: "Communication Style Preference",
    text: "I am very strongly introverted but also comfortable with it. Please never call me—only text. I am willing to do video meetings, but anything that can be an email should be."
  },
  {
    title: "Work Hours Preference",
    text: "I am most productive and mentally engaged in the mornings between 6 a.m. and noon."
  },
  {
    title: "Giving Me Feedback",
    text: "I prefer bluntness and no sugar-coating, as long as there is still respect. I derive some self-worth from job performance, so I will work hard to respond to negative feedback."
  },
  {
    title: "Approach to Management",
    text: "I would never willingly manage people, but if I had to, I would be hands-off. I prefer to be managed the same way. I enjoy being a productive, independent contributor."
  },
  {
    title: "How to Help Me",
    text: "Please do not try to help me. I will explicitly ask for help if I need it."
  }
];

const Working = () => {
    return (
    <div className="bg-purple-700 min-h-screen flex flex-col">
        <div className="pt-10 pb-6 px-6">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 py-5 text-5xl text-white font-bold" id="Working">
                Working With Me      
            </h1>
        </div>
        <div className="flex-grow flex items-center justify-center">
            <div className="w-3/5 mx-auto text-center">
                <section className="grid grid-cols-2 justify-center gap-4 w-full sm:grid-cols-1">
                    {workFacts.map((skill, index) => (
                        <>    
                            <h2
                                key={index}
                                className="border-b-blue-500 border-b-4 mx-auto my-6">
                                {skill.title} 
                            </h2>
                            <p>{skill.text}</p>
                        </>
                    ))}
                </section>
            </div>
        </div>
    </div>
    );
};

export default Working;