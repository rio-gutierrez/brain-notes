"use client";

import Image from "next/image";
import Link from "next/link";
import errorImage from "@/public/error.png";
import errorDarkImage from "@/public/error-dark.png";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={errorImage}
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src={errorDarkImage}
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
