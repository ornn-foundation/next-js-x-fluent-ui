import { ActivityItem } from "@fluentui/react";
import React, { ReactElement } from "react";

interface Props {
  key?: string | number;
  className?: string;
  activityDescription?: string | JSX.Element | (string | JSX.Element)[];
  activityIcon?: JSX.Element;
  timeStamp?: string;
}

export default function ActivityItemUI({
  key,
  className,
  ...result
}: Props): ReactElement {
  return <ActivityItem {...result} key={key} className={className} />;
}
