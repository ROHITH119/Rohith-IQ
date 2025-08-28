import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import ReactMarkdown from "react-markdown";

const Answers = (props) => {
  const { answers, index, length, type } = props;
  const [heading, setHeading] = React.useState(false);

  React.useEffect(() => {
    if (checkHeading(answers)) {
      setHeading(true);
    }
  }, []);

  const checkHeading = (str) => {
    return /^\*\*(.*)\*$/.test(str);
  };

  const cleanAnswer = (str) => {
    return str.replace(/^\*\*(.*)\*$/, "$1");
  };

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={dark}
          PreTag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <div>
      {type === "q" ? (
        <div className="text-lg font-normal dark:text-zinc-300 text-zinc-700">
          {answers}
        </div>
      ) : (
        <div>
          {index === 0 ? (
            <div>
              <span
                className=" dark:text-zinc-100 font-semibold text-zinc-700 outline-none text-2xl my-3
             block"
              >
                {cleanAnswer(answers)}
              </span>
            </div>
          ) : (
            <div>
              {heading ? (
                <span
                  className=" dark:text-zinc-100 font-medium text-zinc-700 outline-none text-xl my-2
             block"
                >
                  {cleanAnswer(answers)}
                </span>
              ) : (
                <span
                  className={
                    type === "a"
                      ? "pl-5 dark:text-zinc-300 font-normal text-zinc-700 decoration-none text-lg my-1"
                      : " dark:text-zinc-300 font-normal text-zinc-700 decoration-none text-lg my-1"
                  }
                  // className={"pl-5 text-zinc-100 decoration-none"}
                >
                  <ReactMarkdown components={renderer}>{answers}</ReactMarkdown>
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// const Answers = ({ answers }) => {
//   return <div>{answers}</div>;
// };

export default Answers;
