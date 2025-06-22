import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Menu, Ticket } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <div className="bg-card border-b shadow-sm sticky top-0 z-50">
      <header className="h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2 text-primary font-bold text-2xl shrink-0">
             <Ticket className="w-9 h-9" />
             <span className="hidden md:block">bookmyevent</span>
          </div>

          <div className="relative hidden lg:block w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="pl-11 h-10 rounded-md bg-muted"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden xl:flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <a href="#" className="hover:text-primary">ListYourShow</a>
                <a href="#" className="hover:text-primary">Corporates</a>
                <a href="#" className="hover:text-primary">Offers</a>
                <a href="#" className="hover:text-primary">Gift Cards</a>
            </nav>

            <div className="hidden xl:block h-6 border-l mx-2"></div>
          
            <div className="hidden md:flex items-center gap-4">
                <Select defaultValue="chennai">
                    <SelectTrigger className="border-none shadow-none focus:ring-0 gap-1 font-medium text-sm">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-md">Sign In</Button>
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
        </div>
      </header>

      <nav className="h-10 bg-card flex items-center justify-between px-6 border-t xl:border-none">
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary">Movies</a>
            <a href="#" className="hover:text-primary">Stream</a>
            <a href="#" className="hover:text-primary">Events</a>
            <a href="#" className="hover:text-primary">Plays</a>
            <a href="#" className="hover:text-primary">Sports</a>
            <a href="#" className="hover:text-primary text-primary font-semibold">Activities</a>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground xl:hidden">
            <a href="#" className="hover:text-primary">ListYourShow</a>
            <a href="#" className="hover:text-primary">Offers</a>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;