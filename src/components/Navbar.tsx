"use client"
import React from 'react';
import { RiStockLine } from "react-icons/ri";
import { ModeToggle } from '@/components/DarkMode';
import {
    HoverCard,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <RiStockLine className="h-8 w-8 text-primary" />
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="/">
                  <Button variant='link' className="text-xl font-semibold hover:text-primary-focus transition-colors ml-2">
                    PathVest
                  </Button>
                </Link>
              </HoverCardTrigger>
            </HoverCard>
          </div>
          
          <div className='hidden md:flex space-x-4'>
            {['Services', 'About Us', 'Contact Us'].map((item) => (
              <Link key={item} href="/">
                <Button variant='ghost' className="font-medium hover:text-primary-focus transition-colors">
                  {item}
                </Button>
              </Link>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <Link href="/login">
              <Button variant='outline' className="font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Login
              </Button>
            </Link>
            <Link href="/">
              <Button variant='default' className="font-medium">
                Sign Up
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};