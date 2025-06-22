import React from 'react';

// Import organism components from their specific EventListings directory
import TopHeader from '../components/EventListings/TopHeader';
import SidebarFilters from '../components/EventListings/SidebarFilters';
import CategoryTags from '../components/EventListings/CategoryTags';
import ActivityCardGrid from '../components/EventListings/ActivityCardGrid';

/**
 * Index page for the Event Ticketing platform.
 * This page assembles the main layout and content for the event listings view.
 * It follows a grid-based layout with a fixed sidebar and a main content area, 
 * consistent with the application's design system.
 */
const IndexPage: React.FC = () => {
  return (
    // The overall layout is a CSS grid, defining a header row and a main content row.
    // grid-cols-[auto_1fr] lets the sidebar take its natural width (w-64 from the component)
    // and the main content takes the rest of the available space.
    // grid-rows-[auto_1fr] lets the header take its natural height and the content area fills the rest.
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      
      {/* TopHeader component, spanning both columns of the grid's first row. */}
      {/* The header component itself contains sticky positioning. */}
      <div className="col-span-2 z-10">
        <TopHeader />
      </div>

      {/* SidebarFilters component, placed in the first column of the second row. */}
      {/* The <aside> tag is used for semantic HTML. */}
      {/* The SidebarFilters component itself handles its width and internal scrolling. */}
      <aside className="row-start-2 h-full">
         <SidebarFilters />
      </aside>

      {/* Main content area that will scroll independently of the sidebar. */}
      <main className="row-start-2 col-start-2 overflow-y-auto bg-background">
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <CategoryTags />
            <ActivityCardGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
