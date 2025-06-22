import React from 'react';
import ActivityCard, { ActivityCardProps } from './ActivityCard';

const activityData: ActivityCardProps[] = [
  {
    id: '1',
    imageUrl: 'https://placehold.co/400x600/3498db/ffffff?text=Wonder+World',
    isPromoted: true,
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Wonder World Chennai',
    location: 'VGP Wonder World: Chennai',
    category: 'Amusement Parks',
  },
  {
    id: '2',
    imageUrl: 'https://placehold.co/400x600/e67e22/ffffff?text=Beach+Resort',
    isPromoted: true,
    date: 'Mon, 23 Jun onwards',
    title: 'Ideal Beach Resort Day Outing',
    location: 'Ideal Beach Resort: Chennai',
    category: 'Resorts',
  },
  {
    id: '3',
    imageUrl: 'https://placehold.co/400x600/9b59b6/ffffff?text=Sundance',
    date: 'Sun, 22 Jun onwards',
    title: 'Casagrand Sundance',
    location: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
  },
  {
    id: '4',
    imageUrl: 'https://placehold.co/400x600/1abc9c/ffffff?text=Sea+Magic',
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Marine Kingdom - Chennai',
    location: 'VGP Marine Kingdom: Chennai',
    category: 'Aquarium',
  },
];

const ActivityCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
      {activityData.map((activity) => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </div>
  );
};

export default ActivityCardGrid;
