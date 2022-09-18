import React, { useCallback, useRef } from "react";
import Image from "next/image";

// util
import { combineClassNames, combinePhotoUrl } from "@src/libs";

// type
import type { Provider } from "@prisma/client";

type Props = {
  path?: string | null;
  className?: string;
  alt?: string;
  cover?: boolean;
  contain?: boolean;
  priority?: boolean;
  avatar?: boolean;
  isFocus?: boolean;
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
  isFocus,
  onClick,
}: Props) => {
  const photoRef = useRef<HTMLElement>(null);

  const onClickPhoto = useCallback(() => {
    if (typeof onClick === "function") onClick();
  }, [onClick]);

  return (
    <>
      {path ? (
        <figure
          className={combineClassNames(
            "relative bg-black",
            isFocus
              ? "focus:ring-2 focus:ring-blue-400 focus:ring-offset-4"
              : "",
            avatar ? "rounded-full" : "rounded-md",
            className ? className : ""
          )}
          tabIndex={typeof onClick === "function" ? 0 : -1}
          onClick={onClickPhoto}
          ref={photoRef}
          onKeyDown={(e) =>
            e.key === "Enter" ? photoRef.current?.click() : null
          }
        >
          <Image
            src={path.includes("http") ? path : combinePhotoUrl(path)}
            layout="fill"
            className={combineClassNames(
              avatar ? "rounded-full" : "",
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
            tabIndex={typeof onClick === "function" ? 0 : -1}
            ref={photoRef}
            onKeyDown={(e) =>
              e.key === "Enter" ? photoRef.current?.click() : null
            }
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
