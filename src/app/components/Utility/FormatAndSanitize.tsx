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
    // console.log("sanitized", sanitizedDescription);
    // Split the string into an array of strings and elements
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Function to push a string or a React element to the elements array
    let elIndex = 0;
    const pushElement = (
      text: React.ReactNode,
      isBold = false,
      isItalic = false
    ) => {
      elIndex++;
      if (text) {
        let element = text;

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
            <span key={`bold-${elIndex}`} className="italic">
              {element}
            </span>
          );
        }

        elements.push(element);
      }
    };

    // Regex to match characters
    const boldRegex = /\*\*(.*?)\*\*/g;
    const italicRegex = /\*(.*?)\*/g;
    const newLineRegex = /\n/g;

    // push elements to the elements array with the string surrounded by <span className = "font-bold"> tags
    sanitizedDescription.replace(boldRegex, (match, p1, offset) => {
      // pushElement(sanitizedDescription.slice(lastIndex, offset));
      pushElement(p1, true);
      lastIndex = offset + match.length;
      return match.replace(p1, "");
    });

    // push elements to the elements array with the string surrounded by <span className = "italic"> tags
    sanitizedDescription.replace(italicRegex, (match, p1, offset) => {
      // pushElement(sanitizedDescription.slice(lastIndex, offset));
      pushElement(p1, false, true);
      lastIndex = offset + match.length;
      return match;
    });

    // push elements to the elements array with the string surrounded by <span> tags
    sanitizedDescription.replace(newLineRegex, (match, offset) => {
      pushElement(sanitizedDescription.slice(lastIndex, offset));
      pushElement(<br />);
      lastIndex = offset + match.length;
      return match;
    });

    // push the last element
    pushElement(sanitizedDescription.slice(lastIndex));

    if (layer === 3) {
      setProcessedContent(elements);
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
      if (layer > 0) {
        // console.log("asd", indexes);
      }
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
        const beforeTerm = str.slice(0, termIndex);
        const afterTerm = str.slice(termIndex + term.term.length, str.length);
        // console.log("before", beforeTerm);
        // console.log("after", afterTerm);

        const newElement = (
          <Tooltip
            key={`${term.term}-${termIndex}`}
            element={str.slice(termIndex, termIndex + term.term.length)}
            children={term.definition}
            layer={layer}
          />
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
          // console.log("No term found in string: ", element.toLowerCase());
          newElements.push(element);
        }
      } else {
        newElements.push(element);
      }
    }
    // Replace terms with TermDescription components
    // elements.forEach((element, index) => {
    //   processElement(element, index);
    // });

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
    console.log("processed", newElements);
  }, [children]);

  return loading ? <span>{children}</span> : <>{processedContent}</>;
};

export default P;
