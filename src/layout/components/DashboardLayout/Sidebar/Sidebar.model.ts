import { ReactNode } from "react";

export type Tab = Omit<SidebarTabProps, "children"> & {
  childTabs?: ChildTabProps[];
};

export type SidebarTabProps = {
  name: string;
  icon: any;
  to: string;
  children: ReactNode;
};

export type ChildTabProps = {
  name: string;
  to: string;
};