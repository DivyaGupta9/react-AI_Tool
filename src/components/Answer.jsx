import React, { useEffect, useState } from "react";
import { checkHeanding, replaceHeandingStarts } from "../Helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
// import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";

const Answer = ({ ans, totalResult, index, type }) => {
  console.log(ans, index);
  const [heding, setHeding] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    // console.log(ans);
    // checkHeanding(ans);
    if (checkHeanding(ans)) {
      setHeding(true);
      setAnswer(replaceHeandingStarts(ans));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, childern, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      console.log(className);

      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          childern={String(childern).replace(/\n$/, "")}
          language={match[1]}
          style={dark}
          PreTag="div"
        />
      ) : (
        <code {...props} className={className}>
          {childern}
        </code>
      );
    },
  };
  //   console.log(ans, key);
  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : heding ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : (
        <span className={type == "question" ? "pl-1" : "pl-5"}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
