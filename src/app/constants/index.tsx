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
  linkedin: string;
  phone: string;
}

interface Education {
  institution: string;
  qualification: string;
  startYear: string;
  endYear: string;
}

interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description: BulletPoint[];
}

interface Project {
  title: string;
  link?: string;
  startDate?: string;
  endDate?: string;
  description: BulletPoint[];
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
  linkedin: "https://www.linkedin.com/in/alexhope02/",
  phone: "027 290 9551",
};

export const education: Education[] = [
  {
    institution: "University of Auckland",
    qualification: "Bachelor of Engineering (Honours) in Software Engineering",
    startYear: "2021",
    endYear: "2024",
  },
  {
    institution: "Avondale College",
    qualification: "Year 13 Cambridge A Levels",
    startYear: "2016",
    endYear: "2020",
  },
];

export const work: Experience[] = [
  {
    title: "Research Assistant",
    company: "University of Auckland",
    location: "Auckland, CBD",
    startDate: "04/2024",
    endDate: "06/2024",
    description: [
      {
        text: "Collaborated on the ENGclusion longitudinal study, following 200 engineering graduates into their careers to increase inclusive outcomes for students.",
      },
      {
        text: "Streamlined survey forms using JavaScript to help self-populate over 30 data entries for participants.",
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Alstef Group",
    location: "Auckland, Rosebank",
    startDate: "11/2023",
    endDate: "02/2024",
    description: [
      {
        text: "Contributed to the maintenance system for the Swiftdrop self-service bag drop, which processes 100s of millions of international passengers annually.",
      },
      {
        text: "Restructured the maintenance page by developing a 3D diagnostic page to provide intuitive information to staff.",
      },
      {
        text: "Applied technologies such as Unity and Docker to reduce deployment and development time.",
      },
      {
        text: "Developed the back-end in C#, driving animations through over 40 API calls.",
      },
    ],
  },
  {
    title: "Retail Assistant, Home Department",
    company: "Smith and Caughey's",
    location: "Auckland, Newmarket",
    startDate: "04/2023",
    endDate: "11/2023",
    description: [
      { text: "Oversaw the home department and all sales in the department." },
      {
        text: "Assisted customers with any questions about products in the home department.",
      },
      { text: "Conducted sales in the menswear department." },
    ],
  },
  {
    title: "Bartender and Waiter",
    company: "Monsoon Poon",
    location: "Auckland, Viaduct",
    startDate: "01/2022",
    endDate: "12/2022",
    description: [
      {
        text: "Coordinated communication between floor and kitchen staff to ensure smooth operations.",
      },
      {
        text: "Worked closely with a team of 3 bartenders to prepare over 100 drinks per night.",
      },
      { text: "Managed 6 tables of 4-8 people at a time." },
      { text: "Trained 6 people in both bar and waiting positions." },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Superfluous",
    link: "https://github.com/SuperfluousNZ",
    startDate: "11/2024",
    endDate: "Present",
    description: [
      {
        text: "Designed a web application using React and TypeScript to help users identify prerequisite media for movies, TV shows, and books/comics.",
      },
      {
        text: "Engineered a scalable and secure back-end REST API using ASP.NET and Entity Framework to manage media data and relationships.",
      },
    ],
  },
  {
    title: "WIE Scholarship Finder",
    link: "https://wie-scholarship-search.vercel.app/",
    startDate: "02/2024",
    endDate: "05/2024",
    description: [
      {
        text: "Partnered with Women in Engineering to develop a scholarship finder application for their official website.",
      },
      {
        text: "Constructed the back-end using a Next.js API, connected to Neon Serverless PostgreSQL for data management.",
      },
      {
        text: "Established an API framework to enable advanced search and filtering functionality.",
      },
    ],
  },
  {
    title: "Plunket Smart-Scale Server",
    link: "https://github.com/MRlolface249/Capstone",
    startDate: "02/2024",
    endDate: "05/2024",
    description: [
      {
        text: "Created a C# REST API to support a website for tracking baby health data.",
      },
      {
        text: "Designed an SQLite database using a code-first approach with .NET Entity Framework.",
      },
      {
        text: "Integrated WebSockets for real-time scale readings and live chat functionality.",
      },
    ],
  },
  {
    title: "Club Membership Manager",
    link: "https://github.com/UOA-CS732-SE750-Students-2024/project-group-blue-cows",
    startDate: "02/2024",
    endDate: "05/2024",
    description: [
      {
        text: "Developed a streamlined membership application platform for university clubs using React and TypeScript.",
      },
      {
        text: "Built the back-end with Next.js using server actions, integrated with a Neon database using Drizzle ORM for efficient data storage and management.",
      },
      {
        text: "Programmed editable sign-up forms with auto-populating fields for improved usability.",
      },
    ],
  },
  {
    title: "Younite Website",
    link: "https://github.com/UoaWDCC/younite-web",
    startDate: "03/2023",
    endDate: "10/2023",
    description: [
      {
        text: "Implemented a display and landing website in 2-week sprints in a group of 8.",
      },
      {
        text: "Built a dynamic website with customizable project pages using React components.",
      },
      {
        text: "Defined Younite's acceptance criteria and user stories with the project manager to guide website development.",
      },
    ],
  },
];

export const volunteering: Experience[] = [
  {
    title: "Social Events Director",
    company: "Software Engineering Student Society (SESA)",
    startDate: "10/2023",
    endDate: "10/2024",
    description: [
      {
        text: "Supervised a team to plan, execute, and oversee over 10 social activities for SESA.",
      },
      {
        text: "Organized all social activities for the 48-hour hackathon attended by 90 participants in collaboration with the Web Development and Consulting Club social lead.",
      },
      {
        text: "Planned and hosted the end-of-year dinner with over 100 attendees and a budget of $12,000.",
      },
    ],
  },
];
