import techNews from "../assets/portfolio/techNews.jpg";
import animalFarm from "../assets/portfolio/animalFarm.jpg";
import medicareBot from "../assets/portfolio/medicareBot.jpg";
import mutualFund from "../assets/portfolio/mutualFund.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      projectName : "TechNews",
      src: techNews,
      demo : "https://technewsapi.netlify.app/",
      code : "https://github.com/sayyedfaixal/technewsAPI"
    },
    {
      id: 2,
      projectName : "Animal Farm",
      src: animalFarm,
      demo : "https://technewsapi.netlify.app/",
      code : "https://github.com/sayyedfaixal/animalfarm"
    },
    {
      id: 3,
      projectName : "Medicare Bot",
      src: medicareBot,
      demo : "https://bot.dialogflow.com/ee8686ac-01e2-4f1b-a108-942044cdc0ee",
      code : "https://github.com/sayyedfaixal/animalfarm"
    },
    {
      id: 4,
      projectName : "Mutual Fund Bot",
      src: mutualFund,
      demo : "https://bot.dialogflow.com/19719ab7-c51b-4cfd-a171-b05810891d3e",
      code : "https://github.com/sayyedfaixal/animalfarm"
    },
  ];

  function handleClick(link){
      window.open(link, '_blank')
  }
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 sm:px-0 mb-10">
          {portfolios.map(({ id, src, demo, code, projectName }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 w-96 h-56 hover:scale-105"
              />
              <h1 className="flex items-center justify-center text-xl font-bold bg-purple-300 text-pink-500">{projectName}</h1>
              <div className="flex items-center justify-center">
                <button onClick={() => handleClick(demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => handleClick(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;