// Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 py-6 mt-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-700 dark:text-gray-300">
                <p className="mb-1">
                    🌎 Countries Dashboard &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <p className="text-sm mb-2">
                    Created by <span className="font-medium">Ben Attali</span>
                </p>
                <p className="text-sm mb-2">
                    Data provided by{" "}
                    <a
                        href="https://restcountries.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brandBlue"
                    >
                        REST Countries API
                    </a>
                </p>

                {/* Social links */}
                <div className="flex justify-center space-x-4 mt-2">
                    {/* GitHub */}
                    <a
                        href="https://github.com/benattali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.84 10.91.57.11.78-.25.78-.56 0-.28-.01-1.02-.01-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.14 1.18a10.8 10.8 0 012.86-.38c.97.01 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.56.23 2.71.11 3 .73.82 1.18 1.86 1.18 3.12 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.03.78 2.07 0 1.5-.01 2.7-.01 3.07 0 .31.21.68.79.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/ben-attali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5s1.34 3 2.98 3c1.64 0 2.98-1.34 2.98-3S6.62 3.5 4.98 3.5zM2.5 21.5h5V9h-5v12.5zM9.5 9h4.8v1.7h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.02 3.36 6.02 7.72V21.5h-5v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42V21.5h-5v-12.5z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:ben.attali8@gmail.com"
                        className="hover:text-red-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 13.065L0 5.25V18c0 1.1.9 2 2 2h20a2 2 0 002-2V5.25l-12 7.815zm0-2.13L22.92 4H1.08L12 10.935z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};
