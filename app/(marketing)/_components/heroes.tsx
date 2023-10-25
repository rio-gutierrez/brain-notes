import Image from "next/image";
import documentsImage from "@/public/documents.png";
import documentsDarkImage from "@/public/documents-dark.png";
import readingImage from "@/public/reading.png";
import readingDarkImage from "@/public/reading-dark.png";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={documentsImage}
            fill
            className="object-contain dark:hidden"
            priority
            alt="Documents"
          />
          <Image
            src={documentsDarkImage}
            fill
            className="object-contain hidden dark:block"
            priority
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={readingImage}
            fill
            className="object-contain dark:hidden"
            priority
            alt="Reading"
          />
          <Image
            src={readingDarkImage}
            fill
            className="object-contain hidden dark:block"
            priority
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};
