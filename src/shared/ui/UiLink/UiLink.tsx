import { FC } from "react";
import styles from "./UiLink.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
  href: string;
}

const UiLink: FC<IProps> = ({ children, href, ...props }) => {
  return (
    <a
      {...props}
      className={clsx(styles["UiLink"], props.className)}
      href={href}
    >
      {children}
    </a>
  );
};

export { UiLink };
