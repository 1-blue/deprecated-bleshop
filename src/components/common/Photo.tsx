import Image from "next/image";

// util
import { combineClassNames, combinePhotoUrl } from "@src/libs/utils";

type Props = {
  path?: string | null;
  className?: string;
  alt?: string;
  cover?: boolean;
  contain?: boolean;
  priority?: boolean;
};

const Photo = ({ path, className, alt, cover, contain, priority }: Props) => {
  return (
    <>
      {path && (
        <figure
          className={combineClassNames(
            "relative bg-black rounded-md",
            className ? className : ""
          )}
        >
          <Image
            src={combinePhotoUrl(path)}
            layout="fill"
            className={combineClassNames(
              "rounded-md",
              cover ? "object-cover" : "",
              contain ? "object-contain" : ""
            )}
            alt={alt}
            priority={priority}
          />
        </figure>
      )}
    </>
  );
};

export default Photo;
