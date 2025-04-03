// @flow strict
import { educations } from "@/utils/data/educations";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { MdSchool } from "react-icons/md";
import { DynamicGlowCard } from "@/app/components/dynamic";

function Education() {
  return (
    <div id="education" className="relative mt-16 mb-32">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="sticky top-12 z-30 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 rounded-md">
              Education
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalData.resume}
              target="_blank"
              className="text-xl text-[#16f2b3] flex items-center gap-2 hover:text-red-400"
            >
              <MdSchool />
              <p>Resume</p>
            </a>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        {
          educations.map((education, index) => (
            <DynamicGlowCard key={education.id} identifier={index}>
              <div className="flex flex-col md:flex-row gap-6 px-6 py-5">
                <div className="flex md:flex-col items-center md:items-start md:justify-between md:py-1 gap-3 md:gap-0 md:w-32">
                  <div className="w-16 h-[2px] md:w-full bg-gradient-to-r md:h-[2px] from-[#06b6d4] to-[#f472b6]"></div>
                  <p className="text-base md:mt-2">{education.duration}</p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl text-white font-medium">{education.title}</h2>
                  <p className="text-sm md:text-base font-normal text-[#16f2b3] mt-2">{education.institution}</p>
                </div>
              </div>
            </DynamicGlowCard>
          ))
        }
      </div>
      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute bottom-0 -z-10"
      />
    </div>
  );
};

export default Education;