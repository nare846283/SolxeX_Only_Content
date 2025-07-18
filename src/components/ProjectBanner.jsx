import React from 'react';

const ProjectBanner = ({ project }) => {
    return (
        <div className="relative w-[78%] h-[60vh] ml-auto mt-16 mb-8 rounded-xl shadow-lg overflow-hidden group">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center w-full h-full pl-[25%]"
                style={{
                    backgroundImage: `url(${project.banner.imageUrl})`,
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-300 ease-in-out group-hover:bg-black/70" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-6 transform transition-all duration-300">
                {/* Title */}
                <div className="text-white w-full h-full bg-black/40 absolute flex flex-col justify-center items-center px-52">
                    <h2 className='text-3xl font-bold mb-6 text-center text-[#77ff00]'>
                        {project.title}
                    </h2>
                    <p className='text-md  font-semibold mb-6 text-center text-lime-300'>
                        {project.description}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                        href={project.banner.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                    </a>
                    <a
                        href={project.banner.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live Demo
                    </a>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.banner.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-purple-600 backdrop-blur-sm text-white text-sm rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectBanner;