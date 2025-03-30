import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ title, client, description, technologies, value, year, featured }) => {
  return (
    <Card className={`group relative h-full overflow-hidden transition-all duration-300 hover:shadow-md ${featured ? 'border-2 border-brand-blue' : ''}`}>
      <div className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="flex justify-between items-center">
            <span>{client}</span>
            <span className="text-sm text-gray-500">{year}</span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="line-clamp-3 group-hover:line-clamp-none transition-[line-clamp] duration-500 ease-in-out text-gray-700">
            {description}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:bg-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="border-t pt-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">Project Value:</span>
            <span className="text-sm font-semibold text-brand-blue">{value}</span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const allProjects = [
    {
      title: "HPE SimpliVity Hyperconverged Solutions Implementation",
      client: "ABC Banking Corporation",
      description: "Successfully implemented HPE SimpliVity Hyperconverged solutions, upgraded the VMware platform, and configured a comprehensive disaster recovery solution. This integration enhances efficiency, scalability, and simplifies IT operations for the bank.",
      technologies: ["HPE SimpliVity", "VMware", "Disaster Recovery"],
      value: "US$ 180,000.00",
      year: "2020",
      category: "infrastructure",
      featured: true
    },
    {
      title: "HPE SimpliVity and Veeam Backup & Replication Implementation",
      client: "Warwyck Private Bank",
      description: "Implemented HPE SimpliVity, a leading hyperconverged solution that streamlines IT operations, and Veeam Backup & Replication for robust data protection and recovery capabilities.",
      technologies: ["HPE SimpliVity", "Veeam Backup", "Data Protection"],
      value: "US$ 100,000.00",
      year: "2019",
      category: "infrastructure"
    },
    {
      title: "Linux OS, Server Virtualization, and Oracle Implementation",
      client: "National Savings Credit Bank Zambia",
      description: "Implemented Linux Operating System, Server Virtualisation software, and Oracle Middleware and Database. The project included Red Hat EE Operating System, Oracle VM Virtualisation software, Oracle WebLogic, Oracle Database, and post-implementation support.",
      technologies: ["Red Hat Linux", "Oracle VM", "Oracle WebLogic", "Oracle Database"],
      value: "US$ 269,801.90",
      year: "2020",
      category: "database"
    },
    {
      title: "Core Banking Infrastructure Implementation and Support",
      client: "Atlas Mara (now Access Bank) Zambia",
      description: "Ongoing delivery, implementation, and support for core banking infrastructure since 2019, including Oracle Sparc and Intel servers, Oracle ZFS Storage Appliance, IBM Storwize Storage, Veritas Netbackup Appliance, Kemp Load Balancers, Redhat OS, and Oracle database services.",
      technologies: ["Oracle Sparc", "IBM Storage", "Veritas Netbackup", "Oracle Database"],
      value: "US$ 136,326.42 (April 2021 deliverable)",
      year: "2019-Present",
      category: "infrastructure"
    },
    {
      title: "IBM Power Servers and Oracle Database Support",
      client: "Indo Zambia Bank (IZB)",
      description: "Providing crucial support and implementation services for IBM Power Servers, IBM Storage, Oracle database, and WebLogic to ensure optimal performance of core banking systems.",
      technologies: ["IBM Power Servers", "IBM Storage", "Oracle Database", "WebLogic"],
      value: "US$ 1,300,000.00",
      year: "2024",
      category: "database"
    },
    {
      title: "Oracle ERP Upgrade Project",
      client: "Zambia Telecommunications Company Limited (ZAMTEL)",
      description: "Comprehensive upgrade of ZAMTEL's Oracle ERP system, including both the application and database components. This upgrade provided ZAMTEL with a more modern, efficient, and integrated ERP platform.",
      technologies: ["Oracle ERP", "Database Migration", "System Integration"],
      value: "US$ 93,600.00",
      year: "2022-2023",
      category: "erp"
    },
    {
      title: "ERPNext and Paperless-ngx Implementation",
      client: "Workers Compensation Fund",
      description: "Deployed ERPNext to streamline financial and operational workflows, alongside Paperless-ngx to digitize document management, eliminating manual processes. The project included seamless system integration with existing platforms and database migration to ensure data consistency and accessibility.",
      technologies: ["ERPNext", "Paperless-ngx", "System Integration", "Database Migration"],
      value: "US$ 1,000,000.00",
      year: "2024-2025",
      category: "erp"
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful IT implementations across various industries and technologies.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Identity Solutions</h2>
          <p className="text-gray-700 mb-4">
            Through our partnership with GET International, we have been involved in numerous passport and ID 
            projects across various countries, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Passport Projects</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>United States of America</li>
                <li>Canada</li>
                <li>Malawi</li>
                <li>South Korea</li>
                <li>Mauritius</li>
                <li>Lesotho (Border ID)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">ID Projects</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>China (Border ID)</li>
                <li>Belarus (Driving License)</li>
                <li>Dominican Republic (Voter's ID)</li>
                <li>Mexico (Driving License)</li>
                <li>Tanzania (Social Security)</li>
                <li>United Arab Emirates (Labor Card)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">More ID Projects</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Liberia (National ID)</li>
                <li>Niger (National ID)</li>
                <li>Sudan (Driving License)</li>
                <li>Sudan (Vehicle Registration)</li>
                <li>Oman (Labor Cards)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-12">
          <Button 
            variant={activeCategory === 'all' ? 'default' : 'outline'} 
            onClick={() => setActiveCategory('all')}
            className={activeCategory === 'all' ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}
          >
            All Projects
          </Button>
          <Button 
            variant={activeCategory === 'infrastructure' ? 'default' : 'outline'} 
            onClick={() => setActiveCategory('infrastructure')}
            className={activeCategory === 'infrastructure' ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}
          >
            Infrastructure
          </Button>
          <Button 
            variant={activeCategory === 'database' ? 'default' : 'outline'} 
            onClick={() => setActiveCategory('database')}
            className={activeCategory === 'database' ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}
          >
            Database
          </Button>
          <Button 
            variant={activeCategory === 'erp' ? 'default' : 'outline'} 
            onClick={() => setActiveCategory('erp')}
            className={activeCategory === 'erp' ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}
          >
            ERP Systems
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              client={project.client}
              description={project.description}
              technologies={project.technologies}
              value={project.value}
              year={project.year}
              featured={project.featured}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;