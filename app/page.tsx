import { SignedIn } from "@clerk/nextjs";
import Tasks from "./Components/Tasks/Tasks";

export default function Home() {
  return (
    <SignedIn>
      <Tasks />
    </SignedIn>
  );
}
