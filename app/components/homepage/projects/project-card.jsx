// @flow strict

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-10 text-[#16f2b3] text-base lg:text-xl">
          {project.name || 'Project Name'}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name || 'Project image'}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <span>Image placeholder</span>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl text-white font-medium mb-2">{project.name || 'Project Name'}</h3>
              <p className="text-gray-300 mb-4">{project.description || 'Project description will appear here. Add details about your art project, client, goals, and creative process.'}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools && project.tools.length > 0 ? (
                  project.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-[#1a1443] text-[#16f2b3] rounded-full text-xs">
                      {tool}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 bg-[#1a1443] text-[#16f2b3] rounded-full text-xs">Tools used</span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-pink-500 font-medium">
                <span className="text-gray-400">Role: </span>
                {project.role || 'Art Director'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;