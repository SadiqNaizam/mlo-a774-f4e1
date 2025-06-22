import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface ActivityCardProps {
  id: string;
  imageUrl: string;
  isPromoted?: boolean;
  date: string;
  title: string;
  location: string;
  category: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  imageUrl,
  isPromoted,
  date,
  title,
  location,
  category,
}) => {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent rounded-lg">
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={2 / 3}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        {isPromoted && (
          <Badge variant="default" className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold">
            PROMOTED
          </Badge>
        )}
        <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">
          {date}
        </div>
      </div>
      <CardContent className="p-0 pt-3">
        <h3 className="font-semibold text-base text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{location}</p>
        <p className="text-sm text-muted-foreground">{category}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
