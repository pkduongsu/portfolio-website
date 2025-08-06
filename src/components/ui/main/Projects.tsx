'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Github, Star, Filter, Globe, Smartphone, Server } from 'lucide-react';
import { PROJECTS_LIST } from '@/components/ui/constants/projects-list';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'ai' | 'fullstack';
  featured: boolean;
}

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Globe className="w-4 h-4" />;
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'fullstack': return <Server className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'border-chart-3 text-chart-3 bg-chart-3/10';
      case 'mobile': return 'border-chart-4 text-chart-4 bg-chart-4/10';
      case 'fullstack': return 'border-primary text-primary bg-primary/10';
      default: return 'border-chart-3 text-chart-3 bg-chart-3/10';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group h-full bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30 hover:border-chart-1/50 transition-all duration-300 overflow-hidden">
        {/* Project Image/Visual */}
        <div className="relative h-48 bg-gradient-to-br from-primary to-chart-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-chart-1/80 flex items-center justify-center">
            {(project.image === '') ? 
              (
              <motion.div
                animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-foreground"
              >
               {getCategoryIcon(project.category)}
              </motion.div> ) : (
                <Image
                src={project.image}
                width={500}
                height={300}
                alt="Kode"
                className="w-full h-full object-cover"
              />)}
          </div>
          
          {/* Floating Particles on Hover */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-4 right-4 w-2 h-2 bg-chart-3 rounded-full animate-bounce" />
            <div className="absolute top-8 left-4 w-1 h-1 bg-chart-2 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-4 left-8 w-1 h-1 bg-chart-1 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </motion.div>

          {/* Category & Featured Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={getCategoryColor(project.category)}>
              {getCategoryIcon(project.category)}
              <span className="ml-1">{project.category.toUpperCase()}</span>
            </Badge>
            {project.featured && (
              <Badge className="border-chart-2 text-chart-2 bg-chart-2/10">
                <Star className="w-3 h-3 mr-1 fill-current" />
                FEATURED
              </Badge>
            )}
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-chart-3 transition-colors font-ghibli">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {project.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Technologies Used</h5>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs bg-muted/50 text-muted-foreground border-border"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-muted/50 text-muted-foreground border-border"
                >
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-2 w-full">
            <Button 
              asChild
              size="sm" 
              className="flex-1 bg-gradient-to-r from-primary to-chart-1 hover:from-primary/80 hover:to-chart-1/80 border-0"
            >
              <Link href={project.liveUrl}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button 
              asChild
              size="sm" 
              variant="outline" 
              className="border-border text-muted-foreground hover:bg-muted/10"
            >
              <Link href={project.githubUrl}>
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          </div>
        </CardFooter>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-2xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  // Sample project data - can replace with a separate js file 
  const projects: Project[] = PROJECTS_LIST;

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Filter className="w-4 h-4" />, count: projects.length },
    { id: 'fullstack', label: 'Full Stack', icon: <Server className="w-4 h-4" />, count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'web', label: 'Web Apps', icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', label: 'AI', icon: <Smartphone className="w-4 h-4" />, count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="projects-section" className="min-h-screen bg-gradient-to-b from-muted via-background to-card py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-ghibli">
            <span className="bg-gradient-to-r from-destructive via-primary to-chart-1 bg-clip-text text-transparent">
              Magical Creations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Like the wonders found throughout the spirit world, each project tells a story 
            of creativity, problem-solving, and technical mastery.
          </p>
          <Separator className="w-24 h-1 bg-gradient-to-r from-destructive to-primary mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Card className="bg-card/50 border-primary/30 p-2">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  variant={filter === category.id ? "default" : "ghost"}
                  className={`${
                    filter === category.id
                      ? 'bg-gradient-to-r from-destructive to-chart-1 text-destructive-foreground border-0'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                  } transition-all duration-300`}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                  <Badge variant="secondary" className="ml-2 bg-background/20 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Featured Projects Banner */}
        {filter === 'all' && (
          <motion.div 
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-destructive/10 to-primary/10 border-destructive/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-chart-2 fill-current" />
                  <h3 className="text-2xl font-bold text-foreground font-ghibli">Featured Masterpieces</h3>
                  <Star className="w-6 h-6 text-chart-2 fill-current" />
                </div>
                <p className="text-muted-foreground">
                  These projects represent significant milestones in my development journey and showcase 
                  the depth of my technical expertise and creative vision.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-ghibli">No Projects Found</h3>
            <p className="text-muted-foreground">Try selecting a different category to explore more projects</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-chart-1/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-ghibli">Want to See More?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Check out my GitHub for additional projects, open source contributions, 
                and the latest experiments in the world of code magic.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-chart-1 hover:from-primary/80 hover:to-chart-1/80 text-primary-foreground border-0 px-8"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-10 w-2 h-2 bg-chart-3 rounded-full opacity-30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-3/4 right-20 w-3 h-3 bg-chart-1 rounded-full opacity-30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-chart-2 rounded-full opacity-30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  );
};

export default Projects;