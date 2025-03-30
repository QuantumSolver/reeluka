
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PartnerCardProps {
  name: string;
  description: string;
  logo?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, description, logo }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3 flex flex-col items-center">
        {logo && (
          <div className="mb-4 w-24 h-24 flex items-center justify-center">
            <img src={logo} alt={`${name} logo`} className="partner-logo max-h-full max-w-full" />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
