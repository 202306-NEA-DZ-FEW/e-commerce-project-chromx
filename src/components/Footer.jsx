import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const teamMembers = [
  {
    name: "Zohir Kioukiou",
    linkedin: "https://www.linkedin.com/in/zohir-kioukiou-130741229/",
    github: "https://github.com/Zohir-kk",
  },
  {
    name: "Darine Fatma Tag",
    linkedin: "https://www.linkedin.com/in/darine-tag/",
    github: "https://github.com/darinetag",
  },
  {
    name: "Riadh Mouamnia",
    linkedin: "https://github.com/riadhmouamnia",
    github: "https://github.com/riadhmouamnia",
  },
  {
    name: "Imane Omari",
    linkedin: "https://www.linkedin.com/in/iman-omari/",
    github: "https://github.com/iman-om",
  },
  {
    name: "Bouchra Djalti",
    linkedin: "https://github.com/Bushra369",
    github: "https://github.com/team-member-5",
  },
  {
    name: "Chanel Hamel",
    linkedin: "https://www.linkedin.com/in/chanel-hamel/",
    github: "https://github.com/Chanel50",
  },
]

const teamRepository =
  "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-chromx"

const Footer = () => {
  return (
    <footer className="bg-base-800 text-black py-4">
      <hr className="border-t border-gray-300 my-4 w-3/4 mx-auto" />

      <div className="mx-auto flex justify-around">
        {/* Team Members Section */}
        <div className="w-1/3 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Team Members</h2>
          {teamMembers.map((member, index) => (
            <div key={index} className="mt-1">
              <div className="flex items-center">
                <h3
                  className="text-sm font-semibold ml-2"
                  style={{ minWidth: "120px" }}
                >
                  {member.name}
                </h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-200 ml-2"
                >
                  <FaLinkedin className="w-5 h-5 transition transform hover:scale-110" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-200 ml-2"
                >
                  <FaGithub className="w-5 h-5 transition transform hover:scale-110" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 flex flex-col items-center">
          {/* Repository Link Section */}

          <h2 className="text-xl font-semibold ">Repository Link</h2>
          <a
            href={teamRepository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-200 flex items-center mt-2"
          >
            <FaGithub className="w-5 h-5 ml-2 transition transform hover:scale-110" />
            <h3 className="ml-2 text-sm  ">CHROMX Repo</h3>
          </a>
          {/* End Repository Link Section */}
          {/* Contact Information Section */}

          <div className="opacity-60 text-black text-[10px] font-medium uppercase leading-[13px] tracking-tight mt-3">
            Contact us
          </div>
          <div className="text-black text-l leading-normal">
            +1 999 888-76-54
          </div>
          <div className="flex flex-col items-center mt-3">
            <div className="opacity-60 text-black tracking-tight">Email</div>
            <div className="text-black text-sm font-normal leading-tight">
              hello@CHROMX.com
            </div>
          </div>
          {/* End Contact Information Section */}
        </div>
        <div className="w-1/3 flex flex-col items-center mt-12">
          <div className="opacity-60 text-black text-[12px] font-medium uppercase leading-[13px] tracking-tight">
            Address
          </div>
          <div className="text-black text-sm font-normal leading-tight">
            2118 Thornridge Cir. Syracuse, Connecticut 35624
          </div>
          <div className="opacity-60 text-black text-[10px] font-medium uppercase leading-[13px] tracking-tight mt-4">
            Opening hours
          </div>
          <div className="text-black text-sm font-normal leading-tight">
            9am—6pm
          </div>
        </div>
        {/* End Address and Opening Hours Section */}
      </div>
      <hr className="border-t border-gray-300 my-4 w-3/4 mx-auto" />

      {/* Copyright Section */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CROMX. All Rights Reserved.
        </p>
      </div>
      {/* End Copyright Section */}
    </footer>
  )
}

export default Footer
