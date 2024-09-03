"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import termDictionary from "./TermDictionary";
import Tooltip from "./Tooltip";
import { getSpell } from "@/lib/actions/db/spell/read.actions";
import { ItemInfo, SpellInfo } from "@/lib/types";
import { cerr } from "@/lib/utils/chalkLog";
import ModelLink from "./ModelLink";
import { Item, Spell } from "@prisma/client";
import { getItem } from "@/lib/actions/db/item/read.actions";
import { memoize } from "@/lib/utils/memoize";
import { memoizeGetItem, memoizeGetSpell } from "./globalCache";

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
    interface Term {
      matchIndexes: number[];
      isSpell: boolean;
      isItem: boolean;
    }

    async function findItems(str: string): Promise<{
      matchIndexes: Term[];
      items: ItemInfo[];
    } | null> {
      const itemRegex = /\^[0-9]+{[^}]*}\^/g;
      let match: RegExpExecArray | null;
      let matchIndexes: Term[] = [];

      const items: ItemInfo[] = [];
      // indexes and length of term
      while ((match = itemRegex.exec(str)) !== null) {
        matchIndexes.push({
          matchIndexes: [match.index, match[0].length],
          isItem: true,
          isSpell: false,
        });
        const string = match[0].slice(1, match[0].length - 1);
        const idRegex = /[0-9]+/;
        const idMatch = idRegex.exec(string);
        const id = idMatch ? idMatch[0] : null;

        if (!id) {
          console.error("Item id not found in string: ", string);
          return null;
        }
        const item = (await memoizeGetItem(parseInt(id))) as ItemInfo;

        if (match[0].length && item) {
          items.push(item);
        }
      }

      return { matchIndexes, items };
    }

    async function findSpells(str: string): Promise<{
      matchIndexes: Term[];
      spells: SpellInfo[];
    } | null> {
      const spellRegex = /%[0-9]+{[^}]*}%/g;
      let match: RegExpExecArray | null;
      let matchIndexes: Term[] = [];

      const spells: SpellInfo[] = [];
      // indexes and length of term
      while ((match = spellRegex.exec(str)) !== null) {
        matchIndexes.push({
          matchIndexes: [match.index, match[0].length],
          isSpell: true,
          isItem: false,
        });
        const string = match[0].slice(1, match[0].length - 1);
        const idRegex = /[0-9]+/;
        const idMatch = idRegex.exec(string);
        const id = idMatch ? idMatch[0] : null;

        if (!id) {
          console.error("Spell id not found in string: ", string);
          return null;
        }
        const spell = await memoizeGetSpell(parseInt(id));
        if (match[0].length && spell) {
          spells.push(spell);
        }
      }

      return { matchIndexes, spells };
    }

    function findTerms(str: string): Term[] {
      let pattern = termDictionary.map((term) => term.term).join("|");

      let regex = new RegExp(`\\b(${pattern})\\b`, "gi");
      let curlyRegex = /{[^}]+}/g;
      let match;
      let matchIndexes = [];
      // indexes and length of term
      //need to get curlybrace match length so that we can fill it with empty space,
      let curlyMatches = [];
      while ((match = curlyRegex.exec(str)) !== null) {
        curlyMatches.push([match.index, match[0].length]);
      }
      let noCurlyString = str;
      curlyMatches.forEach((match) => {
        let emptyString = " ".repeat(match[1]);
        noCurlyString =
          noCurlyString.slice(0, match[0]) +
          emptyString +
          noCurlyString.slice(match[0] + match[1]);
      });
      while ((match = regex.exec(noCurlyString)) !== null) {
        matchIndexes.push([match.index, match[0].length]);
      }

      if (matchIndexes.length > 0) {
        return matchIndexes.map((match) => {
          return {
            matchIndexes: match,
            isSpell: false,
            isItem: false,
          };
        });
      }
      return [];
    }
    let index = 0;

    let newElements: React.ReactNode[] = [];

    //takes an array of indexes of where the term is found in the string and creates a tooltip for each
    function createTooltips(
      str: string,
      indexes: Term[],
      spells: SpellInfo[],
      items: ItemInfo[]
    ) {
      // add the gap between the start of the string and the first term
      const newArr = [];

      {
        const firstTermIndex = indexes[0].matchIndexes[0];
        const firstTermLength = indexes[0].matchIndexes[1];
        const gap = str.slice(0, firstTermIndex);
        newArr.push(gap);
      }
      for (let i = 0; i < indexes.length; i++) {
        const termIndex = indexes[i].matchIndexes[0];
        const termLength = indexes[i].matchIndexes[1];

        // add the gap between the last term and this term
        if (i > 0) {
          const lastTermIndex = indexes[i - 1].matchIndexes[0];
          const lastTermLength = indexes[i - 1].matchIndexes[1];
          const gap = str.slice(lastTermIndex + lastTermLength, termIndex);

          newArr.push(gap);
        }
        if (indexes[i].isItem) {
          const newElement = (
            <ModelLink
              key={`item-${termIndex}-${index}`}
              potential={items}
              linkBase="item"
            >
              {str.slice(termIndex + 1, termIndex + termLength - 1)}
            </ModelLink>
          );
          index++;
          newArr.push(newElement);
          continue;
        }
        if (indexes[i].isSpell) {
          const newElement = (
            <ModelLink
              key={`spell-${termIndex}-${index}`}
              potential={spells}
              linkBase="spells"
            >
              {str.slice(termIndex + 1, termIndex + termLength - 1)}
            </ModelLink>
          );
          index++;
          newArr.push(newElement);
          continue;
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
          index++;
          continue;
        }

        const newElement = (
          <Tooltip
            key={`${term.term}-${termIndex}-${index}`}
            element={str.slice(termIndex, termIndex + term.term.length)}
            layer={layer}
          >
            {term.definition}
          </Tooltip>
        );
        index++;
        newArr.push(newElement);
      }
      // add the gap between the last term and the end of the string
      const lastTermIndex = indexes[indexes.length - 1].matchIndexes[0];
      const lastTermLength = indexes[indexes.length - 1].matchIndexes[1];
      const gap = str.slice(lastTermIndex + lastTermLength, str.length);
      newArr.push(gap);
      return newArr;
    }

    async function processElement(element: ReactNode) {
      if (typeof element === "string") {
        const terms = findTerms(element);
        const spells = await findSpells(element);
        const items = await findItems(element);
        let combined: Term[] = [
          ...terms,
          ...((spells && spells.matchIndexes && spells.matchIndexes) || []),
          ...((items && items.matchIndexes && items.matchIndexes) || []),
        ];
        const sorted = combined.sort(
          (a, b) => a.matchIndexes[0] - b.matchIndexes[0]
        );
        if (sorted.length > 0) {
          const toolEl = createTooltips(
            element,
            sorted,
            spells?.spells || [],
            items?.items || []
          );
          if (toolEl) {
            newElements.push(...toolEl);
          }
        } else {
          newElements.push(element);
        }
      } else {
        newElements.push(element);
      }
    }
    // Replace terms with TermDescription components

    async function processElements() {
      while (elements.length > 0) {
        const element = elements.shift();
        if (element) {
          await processElement(element);
        }
      }
    }
    processElements().then(() => {
      //give each element a key
      newElements.map((el, index) => (
        <React.Fragment key={index}>{el}</React.Fragment>
      ));

      // Return the elements array
      setProcessedContent(newElements);
      setLoading(false);
    });
  }, [children, layer]);

  const preFilter = (content: string) => {
    const digitRegex = /\d*{/g;
    const caretRegex = /\^/g;
    const bracketRegex = /}/g;
    const percentageRegex = /%/g;

    //remove the digits,brackets and carets, while keeping original text
    const res = content
      .replaceAll(digitRegex, "")
      .replaceAll(caretRegex, "")
      .replaceAll(bracketRegex, "")
      .replaceAll(percentageRegex, "");

    return res;
  };

  return loading ? (
    <>
      {typeof children === "string"
        ? preFilter(children)
        : typeof children === "number"
        ? children
        : preFilter(children.join(""))}
    </>
  ) : (
    <>{processedContent}</>
  );
};

export default P;
