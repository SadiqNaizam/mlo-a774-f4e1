import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories: string[] = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
];

const CategoryTags: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Amusement Parks');

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Activities In Chennai</h2>
        <div className="flex items-center gap-3 flex-wrap">
        {categories.map((category) => (
            <Button
            key={category}
            variant="outline"
            onClick={() => setSelectedCategory(category)}
            className={cn(
                'rounded-full border transition-colors duration-200',
                selectedCategory === category
                ? 'bg-secondary text-secondary-foreground border-primary'
                : 'bg-card hover:bg-muted text-foreground'
            )}
            >
            {category}
            </Button>
        ))}
        </div>
    </div>
  );
};

export default CategoryTags;