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
  url: "category" | "search" | "" | "information" | "cart";
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
            "py-2 flex flex-col items-center transition-colors hover:text-blue-400 hover:bg-blue-200",
            isMatch ? " text-blue-500" : "text-gray-500"
          )}
        >
          <Icon shape={shape} className="w-6 h-6" fill={isMatch} />
          <span className="text-xs">
            <strong>{name}</strong>
          </span>
        </a>
      </Link>
    </li>
  );
};

export default MenuAnchor;
