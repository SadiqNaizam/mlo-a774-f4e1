import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background text-foreground">
      <Header className="col-span-2" />
      <Sidebar className="row-start-2" />
      <main className="row-start-2 col-start-2 overflow-y-auto">
        <div className="px-6 py-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
