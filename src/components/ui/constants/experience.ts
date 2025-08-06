interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string | string[];
  skills: string[];
  type: 'work' | 'education' | 'project';
}

export const EXPERIENCE: TimelineItem[] = [
  {
    id: '1',
    title: 'Bachelor of Computer Science - Data Science Major',
    company: 'Swinburne University of Technology',
    period: '2022-2024',
    description: 'Focused on basic programming principles, web development, statistics, data analysis, and machine learning. GPA: 3.7/4.0',
    skills: ['C#', 'Python', 'SQL', 'JavaScript', 'AWS', 'Data Structures and Algorithm', 'Machine Learning',],
    type: 'education'
  },
  {
    id: '2',
    title: 'Software Engineer Intern',
    company: 'Innovation Nexus',
    period: '1/2025-3/2025',
    description: [
        'Modeled and optimized databases using Prisma ORM, improving query performance and enabling scalable API integration.',
        'Supported backend development with FastAPI, enhancing data validation and type safety across endpoints.',
        'Collaborated on schema migrations and performance tuning, contributing to production data reliability and system scalability.',
        'Utilized GitHub, Docker, and Postman for version control, containerization, and API testing.',
        'Wrote and reviewed unit tests to ensure data consistency across endpoints and migrations.'

    ],
    skills: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'Prisma', 'GitHub', 'Docker', 'FastAPI'],
    type: 'work'
  },
];