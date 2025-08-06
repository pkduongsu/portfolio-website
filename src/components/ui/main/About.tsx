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

const SkillHighlight = ({ skill }: { skill: string }) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge 
        variant="secondary" 
        className="bg-gradient-to-r from-primary/20 to-chart-1/20 text-foreground border-primary/30 hover:border-chart-1/50 transition-all duration-300 px-4 py-2 text-sm font-medium cursor-default"
      >
        {skill}
      </Badge>
    </motion.div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    'React',
    'Next.js', 
    'TypeScript',
    'Python',
    'AWS',
    'SQL',
    'Docker',
    'Azure',
    'Prisma',
    'tRPC'
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
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-ghibli">From Curiosity to Code</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        My journey into development began with wonder and 
                        curiosity. What started as a fascination with building and exploring, from taking legos pieces apart trying to build my own spacecrafts and figures, messing around with my first computer to become the technical helper around the house for my parents, manifested into
                        a passionate pursuit of crafting meaningful and technologically efficient solutions.
                      </p>
                      <p>
                        Through countless late nights debugging, I have 
                        learned that every challenge is an opportunity to grow stronger. Each project teaches me 
                        something new about the delicate balance between functionality and user experience.
                      </p>
                      <p>
                        Today, I specialize in full-stack development, along with Agentic AI implementation, bringing fascinating ideas to life with modern 
                        technologies while never forgetting the human element that makes great software truly magical.
                      </p>
                    </div>

                    <Separator className="my-6 bg-primary/30" />

                    {/* Timeline */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground mb-4">Key Milestones</h4>
                      <div className="space-y-3">
                        {[
                          { year: '2019', title: 'Started Coding', desc: 'First line of "Hello World" written in Python' },
                          { year: '2022', title: 'Started Studying in Australia', desc: 'Moved to Australia to pursue my Bachelor of Computer Science at Swinburne University' },
                          { year: '2024', title: 'Graduation', desc: 'Graduated at December 2024, majored in Data Science' },
                          { year: 'Present', title: 'Current Focus', desc: 'Constantly learning about major tech breakthroughs, with a focus in building full stack AI applications.' },
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
                      Here are the magical abilities I have gathered on my journey:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {skills.map((skill) => (
                        <SkillHighlight key={skill} skill={skill} />
                      ))}
                    </div>

                    <Separator className="my-8 bg-primary/30" />

                    {/* Additional Skills */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Other Magical Abilities</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-chart-3 mb-2">Data / ML</h5>
                          <div className="flex flex-wrap gap-2">
                            {['R','Pytorch', 'Tensorflow', 'scikit-learn', 'PowerBI', 'Databricks'].map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-chart-3/20 text-chart-3 border-chart-3/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary mb-2">AI/LLMs</h5>
                          <div className="flex flex-wrap gap-2">
                            {['Huggingface', 'transformers', 'Inngest', 'APIs (OpenAI, Gemini)', 'LlamaIndex', 'LangChain', 'LangGraph'].map((tech) => (
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
                          description: 'Stay true to my values and beliefs.',
                          color: 'destructive'
                        },
                        {
                          icon: '🤝',
                          title: 'Collaboration',
                          description: 'Great products are built through teamwork and mutual respect.',
                          color: 'primary'
                        },
                        {
                          icon: '🌱',
                          title: 'Growth',
                          description: 'Every challenge is an opportunity to learn and become better.',
                          color: 'chart-3'
                        },
                        {
                          icon: '✨',
                          title: 'Excellence',
                          description: 'Attention to detail and craftsmanship in every line of code.',
                          color: 'chart-2'
                        },
                        {
                          icon: '📖',
                          title: 'Lifelong learning',
                          description: 'The world is constantly changing at such a pace that never existed before, so learning is not simply just to adapt and survive, but also to stay ahead of the curve and come out on top despite any upcoming challenges. ',
                          color: 'chart-1'
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