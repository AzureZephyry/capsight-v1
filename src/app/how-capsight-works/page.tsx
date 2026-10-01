import type { Metadata } from "next";
import { HowCapSightWorks } from "@/presentation/how-capsight-works/HowCapSightWorks";

export const metadata: Metadata = {
  title: "How CapSight Works | CapSight",
  description:
    "The connected capacity-planning experience CapSight is designed to deliver.",
};

export default function HowCapSightWorksPage() {
  return <HowCapSightWorks />;
}
