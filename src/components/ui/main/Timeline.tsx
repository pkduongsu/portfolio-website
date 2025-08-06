'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "../constants/experience";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string | string[];
  skills: string[];
  type: 'work' | 'education' | 'project';
}

const timelineData: TimelineItem[] = EXPERIENCE.reverse()
;

const Timeline = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'project':
        return '🚀';
      default:
        return '📌';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-destructive to-chart-1';
      case 'education':
        return 'from-chart-3 to-chart-4';
      case 'project':
        return 'from-chart-2 to-chart-5';
      default:
        return 'from-muted to-muted-foreground';
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/KimPham_SWE_Resume_2025.pdf';
    link.download = 'KimPham_SWE_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-ghibli">
            Career Journey 🌟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My professional path and educational milestones that shaped my development career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-destructive via-chart-1 to-chart-3 rounded-full opacity-20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end' // changes side of experience
                } relative`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-lg">{getTypeIcon(item.type)}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full max-w-md lg:max-w-lg ${
                  index % 2 === 0 ? 'mr-auto pr-8 lg:pr-16' : 'ml-auto pl-8 lg:pl-16'
                }`}>
                  <Card className={`transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${
                    index % 2 === 0 ? 'hover:border-destructive/30' : 'hover:border-chart-1/30'
                  }`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-chart-1 font-medium mt-1">
                            {item.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm font-medium">
                          {item.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {Array.isArray(item.description) ? (
                        <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                          {item.description.map((bullet_point, index) => (
                            <li key={index} className="flex items-start">
                               <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                              <span>{bullet_point}</span>
                            </li>
                          ))}
                        </ul>
                      ): (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                      </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to learn more about my experience?
          </p>
          <button 
            className="bg-gradient-to-r from-destructive to-chart-1 text-destructive-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={handleDownload}
            >
            Download Resume 📄
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;