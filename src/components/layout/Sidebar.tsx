import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

type DateFilter = 'Today' | 'Tomorrow' | 'This Weekend';

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState<DateFilter>('Today');
  const [isDateRange, setIsDateRange] = useState(false);

  const handleClear = (filterName: string) => {
    // In a real app, this would dispatch an action to clear filters
    console.log(`Clearing ${filterName}`);
    if (filterName === 'Date') {
      setSelectedDate('Today');
      setIsDateRange(false);
    }
  };

  // A sub-component for the trigger to keep the code clean
  const FilterTrigger: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center justify-between w-full">
      <span className="text-base font-semibold text-foreground">{title}</span>
      <Button
        variant="link"
        className="text-primary p-0 h-auto text-sm hover:no-underline font-normal"
        onClick={(e) => {
          e.stopPropagation(); // Prevent accordion from toggling when clearing
          handleClear(title);
        }}
      >
        Clear
      </Button>
    </div>
  );

  return (
    <aside className={cn("w-64 bg-card flex flex-col h-full border-r", className)}>
      <div className="px-6 pt-6 pb-2">
          <h2 className="text-2xl font-bold text-foreground">Filters</h2>
      </div>
      
      <div className="flex-grow overflow-y-auto px-4 sm:px-6">
        <Accordion type="multiple" defaultValue={['date']} className="w-full">
          <AccordionItem value="date" className="border-b">
            <AccordionTrigger className="hover:no-underline py-4">
              <FilterTrigger title="Date" />
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedDate('Today')}
                    className={cn(
                      'font-normal h-9',
                      selectedDate === 'Today' ? 'border-primary text-primary bg-secondary' : 'bg-card text-foreground'
                    )}
                  >
                    Today
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedDate('Tomorrow')}
                    className={cn(
                      'font-normal h-9',
                      selectedDate === 'Tomorrow' ? 'border-primary text-primary bg-secondary' : 'bg-card text-foreground'
                    )}
                  >
                    Tomorrow
                  </Button>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDate('This Weekend')}
                  className={cn(
                    'font-normal w-full h-9',
                    selectedDate === 'This Weekend' ? 'border-primary text-primary bg-secondary' : 'bg-card text-foreground'
                  )}
                >
                  This Weekend
                </Button>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="date-range" checked={isDateRange} onCheckedChange={(checked) => setIsDateRange(!!checked)} />
                  <Label htmlFor="date-range" className="text-sm font-medium leading-none cursor-pointer">
                    Date Range
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="categories" className="border-b">
            <AccordionTrigger className="hover:no-underline py-4">
              <FilterTrigger title="Categories" />
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-muted-foreground">Category filter options will be listed here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="more-filters" className="border-b">
            <AccordionTrigger className="hover:no-underline py-4">
              <FilterTrigger title="More Filters" />
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-muted-foreground">More filter options will be listed here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-4">
              <FilterTrigger title="Price" />
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-muted-foreground">Price range filter will be here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="px-6 py-4 mt-auto border-t">
        <Button variant="outline" className="w-full text-primary border-primary hover:bg-secondary hover:text-primary">
          Browse by Venues
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
