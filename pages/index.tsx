import React, { ReactElement } from "react";
import { I18n } from "../src/interface/i18n";
import { useRouter } from "next/router";
import {
  ActivityItem,
  DefaultButton,
  PrimaryButton,
  Stack,
} from "../src/widget";
import { Icon, Link, mergeStyleSets } from "@fluentui/react";

interface Props extends I18n {}

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: "20px",
  },
  nameText: {
    fontWeight: "bold",
  },
});

const activityItemExamples = [
  {
    key: 1,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Philippe Lampros
      </Link>,
      <span key={2}> commented</span>,
    ],
    activityIcon: <Icon iconName={"Message"} />,
    comments: [
      <span key={1}>Hello! I am making a comment and mentioning </span>,
      <Link
        key={2}
        className={classNames.nameText}
        onClick={() => {
          alert("An @mentioned name was clicked.");
        }}
      >
        @Anđela Debeljak
      </Link>,
      <span key={3}> in the text of the comment.</span>,
    ],
    timeStamp: "Just now",
  },
  {
    key: 2,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Lisha Refai
      </Link>,
      <span key={2}> deleted </span>,
      <span key={3} className={classNames.nameText}>
        DocumentTitle.docx
      </span>,
    ],
    activityIcon: <Icon iconName={"Trash"} />,
    timeStamp: "2 hours ago",
  },
  {
    key: 3,
    activityDescription: [
      <Link
        key={1}
        className={classNames.nameText}
        onClick={() => {
          alert("A name was clicked.");
        }}
      >
        Julian Arvidsson
      </Link>,
      <span key={2}> moved </span>,
      <Link
        key={3}
        className={classNames.nameText}
        onClick={() => {
          alert("A document was clicked.");
        }}
      >
        PresentationTitle.pptx
      </Link>,
      <span key={4}> to </span>,
      <Link
        key={5}
        className={classNames.nameText}
        onClick={() => {
          alert("A folder was clicked.");
        }}
      >
        Destination Folder
      </Link>,
    ],
    activityIcon: <Icon iconName={"FabricMovetoFolder"} />,
    timeStamp: "Yesterday",
  },
];

export default function Home({ locale }: Props): ReactElement {
  const router = useRouter();
  function _alertClicked(): void {
    router.push("/home");
  }
  React.useEffect(() => {
    return () => {};
  }, []);
  return (
    <div style={{ padding: 16 }}>
      <br />
      <Stack horizontal childrenGap={40}>
        <DefaultButton text="Standard" onClick={_alertClicked} />
        <PrimaryButton text="Home" onClick={_alertClicked} allowDisabledFocus />
      </Stack>
      <div>
        {activityItemExamples.map((item: { key: string | number }) => (
          <ActivityItem
            {...item}
            key={item.key}
            className={classNames.exampleRoot}
          />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { locale, query },
  };
};
