'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Sparkles, Lightbulb, User, ExternalLink, PenTool } from 'lucide-react';

const SkillOrb = ({ skill, level, delay = 0 }: { skill: string; level: number; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate progress
      const progressTimer = setTimeout(() => {
        setCurrentLevel(level);
      }, 300);
      return () => clearTimeout(progressTimer);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, level]);

  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30 hover:border-chart-1/50 transition-all duration-300 group-hover:scale-110">
        <CardContent className="p-4">
          <div className="text-center space-y-3">
            {/* Skill Name */}
            <h4 className="font-semibold text-foreground text-sm">{skill}</h4>
            
            {/* Circular Progress */}
            <div className="relative w-16 h-16 mx-auto">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-muted"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-chart-3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: currentLevel / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-chart-3">{level}%</span>
              </div>
            </div>
            
            {/* Skill Level Badge */}
            <Badge 
              variant="outline" 
              className={`${
                level >= 90 ? 'border-chart-2 text-chart-2' :
                level >= 80 ? 'border-chart-3 text-chart-3' :
                level >= 70 ? 'border-primary text-primary' :
                'border-muted-foreground text-muted-foreground'
              }`}
            >
              {level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : level >= 70 ? 'Proficient' : 'Learning'}
            </Badge>
          </div>
        </CardContent>
        
        {/* Hover Effect Particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-2 right-2 w-1 h-1 bg-chart-3 rounded-full animate-ping" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-chart-1 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
      </Card>
    </motion.div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { skill: 'React', level: 95, delay: 200 },
    { skill: 'Node.js', level: 88, delay: 400 },
    { skill: 'TypeScript', level: 92, delay: 600 },
    { skill: 'Python', level: 85, delay: 800 },
    { skill: 'AWS', level: 78, delay: 1000 },
    { skill: 'MongoDB', level: 82, delay: 1200 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about-section" className="min-h-screen bg-gradient-to-b from-background via-card to-muted py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-ghibli">
            <span className="bg-gradient-to-r from-destructive via-chart-1 to-primary bg-clip-text text-transparent">
              About me
            </span>
          </h2>
          <Separator className="w-24 h-1 bg-gradient-to-r from-destructive to-primary mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Avatar & Quick Info */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -20, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Avatar Card */}
            <Card className="bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-32 h-32 mx-auto border-4 border-primary/30">
                    <AvatarImage src="/avatar.png" alt="Kim Pham" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-chart-1 text-primary-foreground text-2xl">
                      <User className="w-16 h-16" />
                    </AvatarFallback>
                  </Avatar>
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-chart-3 rounded-full opacity-60"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-chart-2 rounded-full opacity-60"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 font-ghibli">Kim Pham</h3>
                <p className="text-muted-foreground mb-4">Full Stack Developer</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-destructive/20 text-destructive border-destructive/30">
                    Available for Work
                  </Badge>
                  <Badge variant="secondary" className="bg-chart-3/20 text-chart-3 border-chart-3/30">
                    🌍 Remote Friendly
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-chart-3">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-1">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Passion</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Blog */}
            <Card className="bg-gradient-to-br from-destructive/20 to-chart-2/20 border-destructive/30">
              <CardContent className="p-6 text-center">
                <motion.div
                  className="mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <PenTool className="w-12 h-12 mx-auto text-destructive" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 font-ghibli">Personal Blog</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sharing thoughts, learnings, and stories along my journey 
                </p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-destructive to-chart-2 hover:from-destructive/90 hover:to-chart-2/90 text-white shadow-lg"
                  onClick={() => window.open('https://pkduongsu.github.io/', '_blank')}
                >
                  Visit My Blog
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Tabbed Content */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 20, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/30">
                <TabsTrigger 
                  value="story" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-destructive data-[state=active]:to-chart-1 data-[state=active]:text-destructive-foreground"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  My Journey
                </TabsTrigger>
                <TabsTrigger 
                  value="skills"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-destructive data-[state=active]:to-chart-1 data-[state=active]:text-destructive-foreground"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Tech Stack
                </TabsTrigger>
                <TabsTrigger 
                  value="values"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-destructive data-[state=active]:to-chart-1 data-[state=active]:text-destructive-foreground"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Core Values
                </TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="space-y-6 mt-6">
                <Card className="bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-ghibli">From the Human World to Code</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Like Chihiro entering the spirit world, my journey into development began with wonder and 
                        curiosity. What started as a fascination with creating digital experiences has evolved into 
                        a passionate pursuit of crafting meaningful solutions.
                      </p>
                      <p>
                        Through countless late nights debugging (much like working in Yubaba's bathhouse), I've 
                        learned that every challenge is an opportunity to grow stronger. Each project teaches me 
                        something new about the delicate balance between functionality and user experience.
                      </p>
                      <p>
                        Today, I specialize in full-stack development, bringing ideas to life with modern 
                        technologies while never forgetting the human element that makes great software truly magical.
                      </p>
                    </div>

                    <Separator className="my-6 bg-primary/30" />

                    {/* Timeline */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground mb-4">Key Milestones</h4>
                      <div className="space-y-3">
                        {[
                          { year: '2022', title: 'Started Web Development', desc: 'First line of code written' },
                          { year: '2023', title: 'Full Stack Mastery', desc: 'Built first complete application' },
                          { year: '2024', title: 'Professional Growth', desc: 'Led development team projects' },
                          { year: '2025', title: 'Current Focus', desc: 'Creating magical user experiences' },
                        ].map((milestone, index) => (
                          <motion.div 
                            key={milestone.year}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                          >
                            <Badge variant="outline" className="border-chart-3 text-chart-3 min-w-[60px] text-center">
                              {milestone.year}
                            </Badge>
                            <div>
                              <h5 className="font-semibold text-foreground">{milestone.title}</h5>
                              <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6 mt-6">
                <Card className="bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-ghibli">Collected Powers</h3>
                    <p className="text-muted-foreground mb-8">
                      Like the spirits in the bathhouse, each skill has its own personality and strength. 
                      Here are the magical abilities I've gathered on my journey:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {skills.map((skill, index) => (
                        <SkillOrb key={skill.skill} {...skill} />
                      ))}
                    </div>

                    <Separator className="my-8 bg-primary/30" />

                    {/* Additional Skills */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Other Magical Abilities</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-chart-3 mb-2">Frontend Magic</h5>
                          <div className="flex flex-wrap gap-2">
                            {['HTML5', 'CSS3', 'Tailwind', 'Framer Motion', 'Three.js'].map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-chart-3/20 text-chart-3 border-chart-3/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary mb-2">Backend Sorcery</h5>
                          <div className="flex flex-wrap gap-2">
                            {['Express', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'].map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values" className="space-y-6 mt-6">
                <Card className="bg-gradient-to-br from-primary/20 to-chart-1/20 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-ghibli">Guiding Principles</h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: '🎭',
                          title: 'Authenticity',
                          description: 'Stay true to your name and values, just as Chihiro never forgot who she was.',
                          color: 'destructive'
                        },
                        {
                          icon: '🤝',
                          title: 'Collaboration',
                          description: 'Great software, like great adventures, is built through teamwork and mutual respect.',
                          color: 'primary'
                        },
                        {
                          icon: '🌱',
                          title: 'Growth',
                          description: 'Every challenge is an opportunity to learn and become stronger.',
                          color: 'chart-3'
                        },
                        {
                          icon: '✨',
                          title: 'Excellence',
                          description: 'Attention to detail and craftsmanship in every line of code.',
                          color: 'chart-2'
                        }
                      ].map((value, index) => (
                        <motion.div 
                          key={value.title}
                          className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-transparent to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                        >
                          <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center flex-shrink-0 border border-border">
                            <span className="text-2xl">{value.icon}</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                            <p className="text-muted-foreground">{value.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;