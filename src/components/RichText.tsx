import React from 'react';

interface RichTextProps {
  text: string;
  className?: string;
  /** Called for internal hrefs so the SPA can navigate without a full reload. */
  onNavigate?: (path: string) => void;
}

const tokenize = (text: string): Array<{ type: 'text' | 'bold' | 'link'; value: string; href?: string }> => {
  const tokens: Array<{ type: 'text' | 'bold' | 'link'; value: string; href?: string }> = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      tokens.push({ type: 'link', value: match[1], href: match[2] });
    } else if (match[3] !== undefined) {
      tokens.push({ type: 'bold', value: match[3] });
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return tokens;
};

/** Renders markdown-lite strings: **bold** spans and [label](/path) links. */
export const RichText: React.FC<RichTextProps> = ({ text, className, onNavigate }) => {
  const tokens = tokenize(text);
  return (
    <span className={className}>
      {tokens.map((token, i) => {
        if (token.type === 'bold') {
          return <strong key={i}>{token.value}</strong>;
        }
        if (token.type === 'link') {
          const href = token.href ?? '';
          const isInternal = href.startsWith('/');
          if (isInternal && onNavigate) {
            return (
              <a
                key={i}
                href={href}
                className="text-[#387A53] font-semibold underline underline-offset-2 hover:text-[#183D32] transition"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(href);
                }}
              >
                {token.value}
              </a>
            );
          }
          return (
            <a
              key={i}
              href={href}
              className="text-[#387A53] font-semibold underline underline-offset-2 hover:text-[#183D32] transition"
              {...(isInternal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {token.value}
            </a>
          );
        }
        return <React.Fragment key={i}>{token.value}</React.Fragment>;
      })}
    </span>
  );
};
