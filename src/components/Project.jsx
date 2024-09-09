import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from 'react-icons/go';
const ProjectData = [
    {
        "Title": "Wedding Photography site",
        "Github": "https://github.com/hariFED/anodeweddings",
        "Live": "https://anodewedding.netlify.app/",
        "Type": "Open Repo"
    },
    {
        "Title": "Simple Job Listing page",
        "Github": "https://github.com/hariFED/static-job-listing-master-frontend-mentor",
        "Live": "https://job-listing-site-frontend-mentor.netlify.app",
        "Type": "Open Repo"
    },
    {
        "Title": "API project Advice Generator",
        "Github": "https://github.com/hariFED/ADVICE-GENERATOR-APP-MAIN",
        "Live": "https://advice-generator-project-frontend.netlify.app",
        "Type": "Open Repo"
    }

]


const Project = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl'>Projects</h1>
                <div className='grid grid-cols-2 mt-10 gap-10'>
                    {ProjectData.map((data, index) => (
                        <div key={index} className=' cursor-pointer border-2 border-slate-600 p-4 rounded-3xl text-base flex gap-5 items-center'>
                            <a href={data.Github} target='_blank'>    <FaGithub className='opacity-50 text-5xl hover:opacity-100 hover:scale-110 duration-300' /></a>
                            <a href={data.Live} target='_blank'>  <h1 className='flex items-center gap-6'>{data.Title} <span> <GoLinkExternal className=' animate-pulse text-xl' /></span></h1></a>
                        </div>
                    ))}
                    <div className=' cursor-pointer border-2 border-slate-600 p-4 rounded-3xl text-base flex gap-5 items-center'>
                        <a href='https://github.com/hariFED/' target='_blank'>    <FaGithub className='opacity-50 text-5xl hover:opacity-100 hover:scale-110 duration-300' /></a>
                        <h1 className='flex items-center gap-6'> For more projects get into my github<span> <GoLinkExternal className=' animate-pulse text-xl' /></span></h1>
                    </div>




                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-3xl'>Open Source Contribution</h1>
                <div>
                    <p className=''>
                        <a href="https://github.com/activist-org" className='flex gap-4 items-center my-6 '>
                            <img src="https://avatars.githubusercontent.com/u/79784013?s=200&v=4" alt="activist_Logo" width={50} />
                            <span> Activist Organisation
                            </span>
                        </a>
                    </p>
                    <p className=' text-purple-300'><a href='https://github.com/activist-org/activist/pull/410'> Issue Resolved : Add missing image alt texts for localization (#405)</a> </p>
                    <p className='my-5'>Description:</p>
                    <p className='text-base font-normal'>This is my first open source contribution project that got accepted and merged by the respected company.I have just added the missing image alt texts for each images fo the puropse of localization. It also got merged with zero invalidation. Its not a big contribution but small steps help me to get into the world of Open Source.</p>
                </div>
            </div>
        </div>
    )
}

export default Project