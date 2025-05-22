import { Metadata } from "next";
import Hero from "../components/Hero";

const title = "Jawline Check";
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
