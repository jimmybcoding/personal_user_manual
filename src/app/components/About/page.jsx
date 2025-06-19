import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
      <div className="pt-10 pb-6 px-6">
        <h1 className="ml-6 py-5 pr-5 text-5xl font-bold border-r-4 border-r-purple-500 animate-typing overflow-hidden whitespace-nowrap">
          About Me
        </h1>
      </div>
      <div className="w-4/5 mx-auto py-5 grid gap-6 grid-cols-2 sm:grid-cols-1">
        <div>
          <p className="py-10">
            Hi, I&apos;m James, a University of Guelph graduate with a passion for coding. I absolutely love the intersection of design, creativity, and analytics. My interests lie in exploring new technologies, mastering UI/UX design, and solving complex problems. I love tackling challenges head-on, whether it&apos;s coding, debugging, or diving into the latest tech trends. My goal is to create efficient and beautiful solutions that make a difference.
          </p>
          <p>
            On a more personal note, I enjoy spending my free time with my family, swimming, and playing basketball. With 7 years of experience in the healthcare industry, I have the background and desire to make meaningful contributions to healthcare tech. If you&apos;re looking to add a dedicated and highly motivated member to your team, feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src='/jimmy.jpg'
            alt="Pic of James in Churchill, Manitoba at the museum"
            height={100}
            width={100}
            sizes="100vw"
            className="w-3/5 mb-6 sm:w-2/5 shadow-multiple rounded-md"
          />
          <p className="text-xs text-center">Churchill Manitoba 2023 (I saw polar bears!)</p>
        </div>
      </div>
    </section>
  );
};

export default About;