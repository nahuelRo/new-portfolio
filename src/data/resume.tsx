import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nahuel Rodriguez",
  initials: "NR",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full stack developer passionate about both front-end and back-end. Always looking for solutions and staying active in the software development community.",
  summary:
    "Focused on creating efficient, scalable solutions that drive business impact. With a strong problem-solving mindset, I optimize user experience and system performance while adapting to new technologies and agile methodologies. My value to companies lies in my ability to turn ideas into functional applications, working with initiative, responsibility, and a commitment to continuous learning and improvement.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/C4D03AQF0Edcofj1vOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656456027727?e=1746662400&v=beta&t=Gl775G7u27JATiyzUxcindrf_FNiA8WIH1agvYLnPJ0",
  skills: [
    "React",
    "Next.js",
    "Vue",
    "jQuery",
    "Typescript",
    "Node.js",
    "PHP",
    "NestJS",
    "Laravel",
    "MongoDB",
    "Postgres",
    "Docker",
    "AWS",
    "AWS Amplify",
    "AWS S3",
    "AWS Lambda",
    "AWS EventBridge",
    "AWS DynamoDB",
    "AWS API Gateway",
    "AWS CloudFront",
    "AWS Cognito",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "nahuelr.developer@gmail.com",
    tel: "+543329508094",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nahuelRo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nahuelro/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:nahuelr.developer@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hotelinking",
      href: "https://www.hotelinking.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/hotelinking.jpg",
      start: "June. 2024",
      end: "Present",
      description:
        "Implemented advanced technological solutions as part of a highly dynamic and innovation-driven team, optimizing customer management and experience in the hospitality industry. I work with AWS, Amplify, TypeScript, and Vue to build scalable, efficient, and high-performance applications.",
    },
    {
      company: "First Plug",
      badges: [],
      href: "https://firstplug.co/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/firstplug.jpg",
      start: "Sep 2023",
      end: "Present",
      description:
        "Building a web platform focused on inventory management., acquisition, and control, simplifying the onboarding and equipment process for remote workers. I work with Next.js, NestJS, MongoDB, and implement a multi-tenant SaaS architecture to ensure scalability and efficiency for multiple clients on the same platform.",
    },
    {
      company: "Sadiv",
      href: "https://www.hpsadiv.com/",
      badges: [],
      location: "San Pedro, Buenos Aires",
      title: "Full Stack Developer",
      logoUrl: "/hpsadiv.jpg",
      start: "Oct 2023",
      end: "June 2024",
      description:
        "As a Frontend Web Developer, I handle the implementation and improvement of user interfaces for web applications. My focus is on optimizing the user experience, making high-quality medical services more accessible. I have worked with technologies like Laravel, Next.js, and jQuery to develop efficient and modern solutions, enhancing the usability and performance of the applications.",
    },
  ],
  education: [
    {
      school: "Plataforma 5",
      href: "https://www.plataforma5.la/",
      degree: "Bootcamp",
      logoUrl: "/plataforma5.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Transporte Rosario Perez",
      href: "https://transporte-rosario-perez.vercel.app/",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
        "Developed an administrative dashboard for a trucking logistics company with the primary goal of involving all parts of the company in trip management and control. This dashboard centralizes key information, allowing users to monitor trip status in real-time, truck assignments, route tracking, and driver management. Additionally, it facilitates decision-making through detailed reports and visualizations that show performance, costs, and operational efficiency, improving coordination across departments and optimizing the overall truck logistics workflow.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Neon Postgres",
        "Digital Ocean Spaces",
      ],
      links: [
        {
          type: "Website",
          href: "https://transporte-rosario-perez.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/transporte.png",
    },
    {
      title: "Hotelinking",
      href: "https://www.hotelinking.com/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Implemented advanced technological solutions as part of a highly dynamic and innovation-driven team, optimizing customer management and experience in the hospitality industry.",
      technologies: [
        "Vue",
        "TailwindCSS",
        "Typescript",
        "DynamoDB",
        "AWS Amplify",
        "AWS S3",
        "AWS Lambda",
        "AWS EventBridge",
        "AWS DynamoDB",
        "AWS API Gateway",
        "AWS CloudFront",
        "AWS Cognito",
      ],
      links: [
        {
          type: "Website",
          href: "https://hotelinking.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hotelinking.png",
    },
    {
      title: "First Plug",
      href: "https://firstplug.co/",
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "Building a web platform focused on inventory management, acquisition, and control, simplifying the onboarding and equipment process for remote workers. I work with Next.js, NestJS, MongoDB, and implement a multi-tenant SaaS architecture to ensure scalability and efficiency for multiple clients on the same platform.",
      technologies: [
        "Next.js",
        "Nest.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Multitenant Strategy",
        "SaaS Architecture",
      ],
      links: [
        {
          type: "Website",
          href: "https://firstplug.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/first.webp",
    },
    {
      title: "Sadiv",
      href: "https://sadiv.com",
      dates: "Oct 2023 - June 2024",
      active: true,
      description:
        "A private hospital where I created specialized software solutions for both the internal intranet and the public-facing website. My role involved enhancing the user experience by designing and implementing efficient interfaces for both patients and medical staff, ensuring seamless integration between internal systems and the publicly accessible platform. Additionally, I optimized the performance of the public website, making medical services more accessible and improving the hospital's online visibility.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "JQuery",
        "Laravel",
        "PHP",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://sadiv.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sadiv.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
