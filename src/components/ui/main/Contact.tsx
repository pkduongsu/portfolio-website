'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative">
      {isSubmitted ? (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4 animate-bounce">🎌</div>
          <h3 className="text-2xl font-bold text-foreground mb-2 font-ghibli">Message Sent Successfully!</h3>
          <p className="text-muted-foreground">Your message has been delivered to the spirit world. I will respond very soon!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Your Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name..."
              className="bg-card/50 border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email Address</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="bg-card/50 border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Subject</label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="bg-card/50 border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder=""
              className="bg-card/50 border-border focus:border-primary focus:ring-primary/20 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-destructive to-chart-1 hover:from-destructive/80 hover:to-chart-1/80 text-destructive-foreground font-bold"
            size="lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-destructive-foreground/30 border-t-destructive-foreground rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact-section" className="min-h-screen bg-gradient-to-b from-card via-background to-muted py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-destructive rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-chart-1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-ghibli">
            <span className="bg-gradient-to-r from-destructive via-primary to-chart-1 bg-clip-text text-transparent">
              Let&apos;s Create Magic Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you&apos;re looking to build something amazing together, or just want to chat about tech, 
            I&apos;m always excited to connect with fellow creators and learners.
          </p>
          <Separator className="w-24 h-1 bg-gradient-to-r from-destructive to-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            className=""
            initial={{ x: -20, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2 font-ghibli">
                  <span className="text-destructive">📮</span>
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Drop me a line and I will get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 20, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            
            {/* Contact Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-2xl mt-25">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2 font-ghibli">
                  <span className="text-chart-3">🌟</span>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span className="hover:font-bold"><a href="mailto:kimduong.pham03@gmail.com">kimduong.pham03@gmail.com</a></span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 bg-chart-4/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-chart-4" />
                    </div>
                    <span>Melbourne, VIC, Australia</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 bg-chart-3/20 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-chart-3" />
                    </div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I&apos;m always open to discussing new opportunities, interesting projects, 
                    or just simply having a chat about the latest updates and breakthrough in AI. 
                    Don&apos;t hesitate to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating Spirit Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-10 left-20 w-3 h-3 bg-chart-3 rounded-full opacity-40"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-10 w-2 h-2 bg-chart-1 rounded-full opacity-40"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-4 h-4 bg-chart-2 rounded-full opacity-40"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        />
      </div>
    </section>
  );
};

export default Contact;