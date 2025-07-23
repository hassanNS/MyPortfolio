import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

export function useSectionView(sectionName: SectionName, threshold = 0.75) {
  const {ref, inView} = useInView({
      threshold,
  });
  const {setActiveSection, timeofLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      // setting state during render is not recommended, so we should use an effect
      setActiveSection(sectionName);
    }
  },[inView, setActiveSection, timeofLastClick, sectionName]); // if inview changes, we want to run the effect

  return {
    ref
  };
}