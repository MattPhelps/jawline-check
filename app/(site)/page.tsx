import { Metadata } from "next";
import Hero from "../components/Hero";
import Examples from "../components/Examples";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import SingleReview from "../components/SingleReview";

const title = "Nerdneck Check – Are Your a Nerd?";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Hero />
       {/* <Examples />  */}
   </>
  );
  
}
