interface BulletPoint {
  text: string;
}

interface About {
  name: string;
  title: string;
  skills: string[];
}

interface Contact {
  email: string;
  github: string;
  linkedIn: string;
  phone: string;
}

interface Education {
  institution: string;
  qualification: string;
  startYear: Date;
  endYear: Date;
}

interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  description: string[];
}

interface Project {
  title: string;
  link?: string;
  startDate?: Date;
  endDate?: Date;
  description: string[];
}

export const about: About = {
  name: "Alex Hope",
  title: "Software Engineering Graduate",
  skills: [
    "C#",
    "Java",
    "TypeScript",
    "Next.js",
    "React",
    "HTML/CSS",
    "Git",
    "Python",
    "SQL",
    "Docker",
  ],
};

export const contact: Contact = {
  email: "alexhope256@gmail.com",
  github: "https://github.com/MRlolface249",
  linkedIn: "https://www.linkedin.com/in/alexhope02/",
  phone: "027 290 9551",
};

export const education: Education[] = [
  {
    institution: "University of Auckland",
    qualification: "Bachelor of Engineering (Honours) in Software Engineering",
    startYear: new Date(2021),
    endYear: new Date(2024),
  },
  {
    institution: "Avondale College",
    qualification: "Year 13 Cambridge A Levels",
    startYear: new Date(2016),
    endYear: new Date(2020),
  },
];

export const work: Experience[] = [
  {
    title: "Research Assistant",
    company: "University of Auckland",
    location: "Auckland, CBD",
    startDate: new Date(2024, 3),
    endDate: new Date(2024, 5),
    description: [
      "Collaborated on the ENGclusion longitudinal study, following 200 engineering graduates into their careers to increase inclusive outcomes for students.",
      "Streamlined survey forms using JavaScript to help self-populate over 30 data entries for participants.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Alstef Group",
    location: "Auckland, Rosebank",
    startDate: new Date(2023,10),
    endDate: new Date(2024,1),
    description: [
      "Contributed to the maintenance system for the Swiftdrop self-service bag drop, which processes 100s of millions of international passengers annually.",
      "Restructured the maintenance page by developing a 3D diagnostic page to provide intuitive information to staff.",
      "Applied technologies such as Unity and Docker to reduce deployment and development time.",
      "Developed the back-end in C#, driving animations through over 40 API calls.",
    ],
  },
  {
    title: "Retail Assistant, Home Department",
    company: "Smith and Caughey's",
    location: "Auckland, Newmarket",
    startDate: new Date(2023,3),
    endDate: new Date(2023,10),
    description: [
      "Oversaw the home department and all sales in the department.",
      "Assisted customers with any questions about products in the home department.",
      "Conducted sales in the menswear department.",
    ],
  },
  {
    title: "Bartender and Waiter",
    company: "Monsoon Poon",
    location: "Auckland, Viaduct",
    startDate: new Date(2022,0),
    endDate: new Date(2022,11),
    description: [
      "Coordinated communication between floor and kitchen staff to ensure smooth operations.",
      "Worked closely with a team of 3 bartenders to prepare over 100 drinks per night.",
      "Managed 6 tables of 4-8 people at a time.",
      "Trained 6 people in both bar and waiting positions.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Superfluous",
    link: "https://github.com/SuperfluousNZ",
    startDate: new Date(2024,10),
    endDate: new Date(),
    description: [
      "Designed a web application using React and TypeScript to help users identify prerequisite media for movies, TV shows, and books/comics.",
      "Engineered a scalable and secure back-end REST API using ASP.NET and Entity Framework to manage media data and relationships.",
    ],
  },
  {
    title: "WIE Scholarship Finder",
    link: "https://wie-scholarship-search.vercel.app/",
    startDate: new Date(2024,1),
    endDate: new Date(2024,4),
    description: [
      "Partnered with Women in Engineering to develop a scholarship finder application for their official website.",
      "Constructed the back-end using a Next.js API, connected to Neon Serverless PostgreSQL for data management.",
      "Established an API framework to enable advanced search and filtering functionality.",
    ],
  },
  {
    title: "Plunket Smart-Scale Server",
    link: "https://github.com/MRlolface249/Capstone",
    startDate: new Date(2024,1),
    endDate: new Date(2024,4),
    description: [
      "Created a C# REST API to support a website for tracking baby health data.",
      "Designed an SQLite database using a code-first approach with .NET Entity Framework.",
      "Integrated WebSockets for real-time scale readings and live chat functionality.",
    ],
  },
  {
    title: "Club Membership Manager",
    link: "https://github.com/UOA-CS732-SE750-Students-2024/project-group-blue-cows",
    startDate: new Date(2024,1),
    endDate: new Date(2024,4),
    description: [
      "Developed a streamlined membership application platform for university clubs using React and TypeScript.",
      "Built the back-end with Next.js using server actions, integrated with a Neon database using Drizzle ORM for efficient data storage and management.",
      "Programmed editable sign-up forms with auto-populating fields for improved usability.",
    ],
  },
  {
    title: "Younite Website",
    link: "https://github.com/UoaWDCC/younite-web",
    startDate: new Date(2023,2),
    endDate: new Date(2023,9),
    description: [
      "Implemented a display and landing website in 2-week sprints in a group of 8.",
      "Built a dynamic website with customizable project pages using React components.",
      "Defined Younite's acceptance criteria and user stories with the project manager to guide website development.",
    ],
  },
];

export const volunteering: Experience[] = [
  {
    title: "Social Events Director",
    company: "Software Engineering Student Society (SESA)",
    startDate: new Date(2023,9),
    endDate: new Date(2024,9),
    description: [
      "Supervised a team to plan, execute, and oversee over 10 social activities for SESA.",
      "Organized all social activities for the 48-hour hackathon attended by 90 participants in collaboration with the Web Development and Consulting Club social lead.",
      "Planned and hosted the end-of-year dinner with over 100 attendees and a budget of $12,000.",
    ],
  },
];
