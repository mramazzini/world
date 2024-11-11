'use client';
import MarkdownIt from 'markdown-it';
import { useMemo } from 'react';
import MarkdownAnchor from 'markdown-it-anchor';

interface Props {
  content: string;
}

const MarkdownContent = ({ content }: Props) => {
  const md = useMemo(() => {
    if (!content) {
      return '';
    }
    return new MarkdownIt().use(MarkdownAnchor).render(content);
  }, [content]);
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{
        __html: md,
      }}
    />
  );
};

export default MarkdownContent;
