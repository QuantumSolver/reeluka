
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  technologies: string[];
  value: string;
  year: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  description,
  technologies,
  value,
  year,
  featured = false,
}) => {
  return (
    <Card className={`project-card overflow-hidden h-full ${featured ? 'border-brand-blue border-2' : ''}`}>
      <CardHeader className="pb-3">
        {featured && (
          <Badge className="mb-2 bg-brand-blue text-white hover:bg-brand-blue">Featured Project</Badge>
        )}
        <CardTitle className="text-xl font-semibold line-clamp-2">{title}</CardTitle>
        <CardDescription className="font-medium text-gray-600">
          {client} • {year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4 line-clamp-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-sm font-medium text-brand-blue">
          Project Value: {value}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
