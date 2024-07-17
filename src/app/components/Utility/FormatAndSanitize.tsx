"use client";
import React, { ReactNode, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import termDictionary from "./TermDictionary";
import Tooltip from "./Tooltip";

const P = ({
  children,
  layer = 0,
}: {
  children: string | number | string[];
  layer?: number;
}): ReactNode => {
  const [loading, setLoading] = useState(true);
  const [processedContent, setProcessedContent] = useState<ReactNode>(null);

  useEffect(() => {
    let str: string = "";
    // if the children is a number, return it as is
    if (typeof children === "number") {
      setProcessedContent(children);
    }
    // if arr join
    if (Array.isArray(children)) {
      str = children.join("");
    } else {
      str = children as string;
    }
    if (!str) {
      setProcessedContent("");
    }
    let sanitizedDescription = str as string;

    // Split the string into an array of strings and elements
    const elements: React.ReactNode[] = [];

    // Function to push a string or a React element to the elements array
    let elIndex = 0;
    const pushElement = (
      text: React.ReactNode,
      isBold = false,
      isItalic = false
    ) => {
      if (text) {
        // Split the text by newlines
        const lines = text.toString().split("\n");

        lines.forEach((line, index) => {
          elIndex++;
          let element = line as React.ReactNode;

          // Wrap text with <span> if it's bold or italic
          if (isBold) {
            element = (
              <span key={`bold-${elIndex}`} className="font-bold">
                {element}
              </span>
            );
          }
          if (isItalic) {
            element = (
              <span key={`italic-${elIndex}`} className="italic">
                {element}
              </span>
            );
          }

          // Add a line break after each line except the last one
          elements.push(element);
          if (index < lines.length - 1) {
            elements.push(<br key={`br-${elIndex}`} />);
          }
        });
      }
    };

    // Regex to match characters
    const combinedRegex = /\*\*(.*?)\*\*|\*(.*?)\*/g;

    let lastIndex = 0;

    sanitizedDescription.replace(
      combinedRegex,
      (match, boldText, italicText, offset) => {
        // Push text before the current match
        pushElement(sanitizedDescription.slice(lastIndex, offset));

        if (boldText) {
          // Push bold text
          pushElement(boldText, true);
        } else if (italicText) {
          // Push italic text
          pushElement(italicText, false, true);
        }

        // Update lastIndex to the end of the current match
        lastIndex = offset + match.length;
        return match;
      }
    );

    // Push remaining text after the last match
    pushElement(sanitizedDescription.slice(lastIndex));

    if (layer === 3) {
      setProcessedContent(
        elements.map((el, index) => <span key={index}>{el}</span>)
      );
      setLoading(false);
      return;
    }

    const newElements: React.ReactNode[] = [];

    function findTerms(str: string): number[][] {
      let pattern = termDictionary.map((term) => term.term).join("|");

      let regex = new RegExp(`\\b(${pattern})\\b`, "gi");

      let match;
      let matchIndexes = [];
      // indexes and length of term
      while ((match = regex.exec(str)) !== null) {
        matchIndexes.push([match.index, match[0].length]);
      }

      return matchIndexes;
    }

    //takes an array of indexes of where the term is found in the string and creates a tooltip for each
    function createTooltip(str: string, indexes: number[][]) {
      // add the gap between the start of the string and the first term
      {
        const firstTermIndex = indexes[0][0];
        const firstTermLength = indexes[0][1];
        const gap = str.slice(0, firstTermIndex);
        newElements.push(gap);
      }
      for (let i = 0; i < indexes.length; i++) {
        const termIndex = indexes[i][0];
        const termLength = indexes[i][1];

        // add the gap between the last term and this term
        if (i > 0) {
          const lastTermIndex = indexes[i - 1][0];
          const lastTermLength = indexes[i - 1][1];
          const gap = str.slice(lastTermIndex + lastTermLength, termIndex);

          newElements.push(gap);
        }

        const term = termDictionary.find(
          (term) =>
            term.term.toLowerCase() ===
            str.slice(termIndex, termIndex + termLength).toLowerCase()
        );
        if (!term) {
          console.error(
            "Term not found in dictionary: ",
            str.slice(termIndex, termIndex + termLength)
          );
          return;
        }

        const newElement = (
          <Tooltip
            key={`${term.term}-${termIndex}`}
            element={str.slice(termIndex, termIndex + term.term.length)}
            layer={layer}
          >
            {term.definition}
          </Tooltip>
        );

        newElements.push(newElement);
      }
      // add the gap between the last term and the end of the string
      const lastTermIndex = indexes[indexes.length - 1][0];
      const lastTermLength = indexes[indexes.length - 1][1];
      const gap = str.slice(lastTermIndex + lastTermLength, str.length);
      newElements.push(gap);
    }

    function processElement(element: ReactNode) {
      if (typeof element === "string") {
        const terms = findTerms(element);

        if (terms && terms.length > 0) {
          createTooltip(element, terms);
        } else {
          newElements.push(element);
        }
      } else {
        newElements.push(element);
      }
    }
    // Replace terms with TermDescription components

    while (elements.length > 0) {
      const element = elements.shift();
      if (element) {
        processElement(element);
      }
    }

    //give each element a key
    newElements.map((el, index) => <div key={index}>{el}</div>);

    // Return the elements array
    setProcessedContent(newElements);
    setLoading(false);
  }, [children, layer]);

  return loading ? <>{children}</> : <>{processedContent}</>;
};

export default P;
