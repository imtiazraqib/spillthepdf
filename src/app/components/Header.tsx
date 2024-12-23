"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  // State to track if the component has mounted
  const [mounted, setMounted] = useState(false);

  // State to track theme preference
  const [isDark, setIsDark] = useState(false);

  // Effect to initialize theme after mounting
  useEffect(() => {
    // Function to initialize theme
    const initializeTheme = () => {
      // Check localStorage for theme preference
      const stored = localStorage.getItem("isDark");
      if (stored !== null) {
        setIsDark(JSON.parse(stored));
      } else {
        // If not in localStorage, check the current theme
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setIsDark(currentTheme === "synthwave");
      }
      // Mark as mounted to render the component
      setMounted(true);
    };

    initializeTheme();
  }, []);

  // Effect to update theme and localStorage whenever isDark changes
  useEffect(() => {
    if (mounted) {
      // Update localStorage
      localStorage.setItem("isDark", JSON.stringify(isDark));
      // Update the data-theme attribute
      document.documentElement.setAttribute("data-theme", isDark ? "synthwave" : "bumblebee");
    }
  }, [isDark, mounted]);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <header className="w-full">
      <div className="flex items-center justify-between p-10 animate-pulse">
        {/* Logo Placeholder */}
        <div className="w-32 h-8 bg-gray-300 rounded"></div>
        {/* Controls Placeholder */}
        <div className="flex space-x-4">
          {/* Toggle Placeholder */}
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          {/* User Button Placeholder */}
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          {/* Sign-In Button Placeholder */}
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  );

  // Prevent rendering the actual header until mounted
  if (!mounted) {
    return <SkeletonLoader />;
  }

  return (
    <header className="w-full">
      <div className="flex items-center justify-between p-10">
        <Link href="/" className="text-2xl font-bold">
          Spill The PDF
        </Link>
        <div className="flex space-x-4">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            {/* Sun Icon */}
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            {/* Moon Icon */}
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
