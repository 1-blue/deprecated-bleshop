import Link from "next/link";
import { useRouter } from "next/router";

// util
import { combineClassNames } from "@src/libs";

// components
import Icon from "@src/components/common/Icon";

// type
import type { ICON } from "@src/types";

type Props = {
  shape: ICON;
  name: string;
  url: "category" | "search" | "" | "information" | "basket";
};

const MenuAnchor = ({ shape, name, url }: Props) => {
  const { asPath } = useRouter();
  const isMatch =
    (url.length > 0 && asPath.includes(url)) || (url === "" && asPath === "/");

  return (
    <li className="flex-1">
      <Link href={`/${url}`}>
        <a
          className={combineClassNames(
            "py-2 flex flex-col items-center transition-colors hover:text-white hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:text-white",
            isMatch ? " text-blue-500" : "text-gray-500"
          )}
        >
          <Icon
            shape={shape}
            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
            fill={isMatch}
          />
          <span className="text-[8px] xs:text-xs">
            <strong>{name}</strong>
          </span>
        </a>
      </Link>
    </li>
  );
};

export default MenuAnchor;
