import React from "react";
import type { Activity } from "@/data/types";
import TryIt from "./TryIt";
import SortCards from "./SortCards";
import Scenario from "./Scenario";
import SpotTheError from "./SpotTheError";
import BeforeAfter from "./BeforeAfter";
import Flashcards from "./Flashcards";
import DecodeChat from "./DecodeChat";
import CostCalculator from "./CostCalculator";
import Checklist from "./Checklist";
import PulseFeed from "./PulseFeed";

// Picks the right component for each activity format in a lesson.
export default function ActivityBlock({ activity }: { activity: Activity }) {
  switch (activity.type) {
    case "tryIt":
      return <TryIt activity={activity}/>;
    case "sort":
      return <SortCards activity={activity}/>;
    case "scenario":
      return <Scenario activity={activity}/>;
    case "spotTheError":
      return <SpotTheError activity={activity}/>;
    case "beforeAfter":
      return <BeforeAfter activity={activity}/>;
    case "flashcards":
      return <Flashcards activity={activity}/>;
    case "decodeChat":
      return <DecodeChat activity={activity}/>;
    case "costCalculator":
      return <CostCalculator activity={activity}/>;
    case "checklist":
      return <Checklist activity={activity}/>;
    case "pulseFeed":
      return <PulseFeed activity={activity}/>;
  }
}
