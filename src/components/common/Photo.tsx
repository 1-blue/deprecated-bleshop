import { useCallback } from "react";
import Image from "next/image";

// util
import { combineClassNames, combinePhotoUrl } from "@src/libs";

type Props = {
  path?: string | null;
  className?: string;
  alt?: string;
  cover?: boolean;
  contain?: boolean;
  priority?: boolean;
  avatar?: boolean;
  onClick?: () => void;
};

const Photo = ({
  path,
  className,
  alt,
  cover,
  contain,
  priority,
  avatar,
  onClick,
}: Props) => {
  const onClickPhoto = useCallback(() => {
    if (typeof onClick === "function") onClick();
  }, [onClick]);

  return (
    <>
      {path ? (
        <figure
          className={combineClassNames(
            "relative bg-black",
            avatar ? "rounded-full" : "rounded-md",
            className ? className : ""
          )}
          onClick={onClickPhoto}
        >
          <Image
            src={combinePhotoUrl(path)}
            layout="fill"
            className={combineClassNames(
              avatar ? "rounded-full" : "rounded-md",
              cover ? "object-cover" : "",
              contain ? "object-contain" : ""
            )}
            alt={alt}
            priority={priority}
          />
        </figure>
      ) : (
        <>
          <figure
            className={combineClassNames(
              "relative bg-black",
              avatar ? "rounded-full" : "rounded-md",
              className ? className : ""
            )}
            onClick={onClickPhoto}
          >
            <Image
              src="/user.png"
              layout="fill"
              className={combineClassNames(
                avatar ? "rounded-full" : "rounded-md",
                cover ? "object-cover" : "",
                contain ? "object-contain" : ""
              )}
              alt={alt}
              priority={priority}
            />
          </figure>
        </>
      )}
    </>
  );
};

export default Photo;
