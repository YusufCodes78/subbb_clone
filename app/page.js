"use client";
import React from "react";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
