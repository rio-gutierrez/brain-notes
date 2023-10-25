import Image from "next/image";
import { Poppins } from "next/font/google";
import logo from "@/public/logo.png";
import logoDark from "@/public/logo-dark.png";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center ">
      <Image
        src={logo}
        width={100}
        height={100}
        quality={95}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={logoDark}
        width={100}
        height={100}
        quality={95}
        alt="Logo"
        className="hidden dark:block"
      />
      <div className="-ml-5 mt-2">
        <p className={cn("font-semibold", font.className)}>BrainNotes</p>
      </div>
    </div>
  );
};
