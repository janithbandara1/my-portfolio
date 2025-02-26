import myPortfolioLandingPage from "@/assets/images/my-portfolio.png";
import coursePlatformLandingPage from "@/assets/images/course-platform-lms.png";
import ecommerceStoreLandingPage from "@/assets/images/nextjs-ecommerce-mvp.png";
import carTradingManagementSystemLandingPage from "@/assets/images/car-trading-management-system.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  
  {
    company: "Course platform LMS",
    year: "2025",
    title: "Course platform LMS",
    description: [
      {
        bullet:
          "Built with Next.js, React, Stripe, Drizzle, Shadcn, and Postgres.",
      },
      {
        bullet:
          "It includes features for course creation, product purchases, and user lesson tracking, with server actions, database interactions, and caching mechanisms.",
      },
      {
        bullet:
          "Utilizes Shadcn components for tables, forms, and notifications.",
      },
    ],
    link: "https://github.com/janithbandara1/course-platform-lms",
    image: coursePlatformLandingPage,
  },
  {
    company: "Full-stack e-commerce store MVP",
    year: "2025",
    title: "Full-stack e-commerce store MVP",
    description: [
      { bullet: "Developed using Next.js, Prisma, Stripe, and Tailwind CSS." },
      {
        bullet:
          "It features product management, order processing, and user authentication, while caching optimizes performance.",
      },
      {
        bullet:
          "Payments are handled via Stripe, with webhooks for order creation and Resend for sending purchase receipts with download links. Users can access order history and downloads via email.",
      },
    ],
    link: "https://github.com/janithbandara1/nextjs-ecommerce-mvp",
    image: ecommerceStoreLandingPage,
  },
  {
    company: "ABC Car Traders",
    year: "2024",
    title: "Car Trading Management System",
    description: [
      {
        bullet:
          "Car Trading Management System built with C# and .NET for ABC Car Traders, developed in Visual Studio using object-oriented principles.",
      },
      {
        bullet:
          "It provides functionalities for administrators and customers, including car and part management, order processing, and report generation.",
      },
    ],
    link: "https://github.com/janithbandara1/car-trading-management-system",
    image: carTradingManagementSystemLandingPage,
  },
  {
    company: "Janith Bandara",
    year: "2025",
    title: "My Portfolio",
    description: [
      { bullet: "Built with Next.js, Tailwind CSS, and Framer Motion." },
      {
        bullet:
          "It includes key sections like the header, hero, featured projects, and about me, designed for a responsive user experience across mobile, tablet, and desktop devices.",
      },
      {
        bullet:
          "The site incorporates interactive animations and effects, such as scrolling text, rotating stars, and dynamic layouts, using Framer Motion for smooth transitions.",
      },
    ],
    link: "https://github.com/janithbandara1/my-portfolio",
    image: myPortfolioLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.description.map((description, index) => (
                      <li
                        key={`${project.title}-desc-${index}`}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span>&bull;</span>
                        <span>{description.bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit GitHub Repository</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-t-2 border-l-2 border-r-2 border-white/10 rounded-t-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
