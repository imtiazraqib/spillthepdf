import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div className="w-screen h-100">
        <div className="flex justify-between p-10">
          <h1 className="text-2xl font-bold">Spill The PDF</h1>
          <div className="flex space-x-4">
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
            <SignedOut>
              {/* Signed out users get sign in button */}
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
      <div className="flex flex-col align-center justify-center">
        <h1 className="text-5xl font-bold text-center">Spill The PDF</h1>
        <div className="flex flex-col items-center mt-2">
          <div className="flex mt-2">
            <SignedIn>
              <button className="btn btn-primary">Go to your chats!</button>
            </SignedIn>
          </div>
          <p className="max-w-xl mt-2 text-center">
            Upload any PDF to our AI and chat with to answer questions, create summaries and much more.
          </p>
        </div>
        <div className="flex align-center justify-center mt-4">
          <SignedIn>
            <h1>File Upload</h1>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <button className="btn btn-secondary"> Sign Up To Get Started! </button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
