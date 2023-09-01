import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IMarkdownProps {
  markdown: string;
}

export default function MarkdownRenderer({ markdown }: IMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            // 강조 (``)
            <code
              style={{
                background: '#f7ff9b',
                fontWeight: 'bold',
                padding: '2px',
                borderRadius: '5px',
              }}
              {...props}
            >
              {children}
            </code>
          ) : match ? (
            // 코드 (```)
            <SyntaxHighlighter language={match[1]} PreTag='div' {...props} style={nord}>
              {String(children)
                .replace(/\n$/, '')
                .replace(/\n&nbsp;\n/g, '')
                .replace(/\n&nbsp\n/g, '')}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter language='textile' PreTag='div' {...props} style={nord}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        // 인용문 (>)
        blockquote({ children }) {
          return (
            <div
              style={{
                background: '#f0f0f0',
                padding: '1px 15px',
                borderRadius: '10px',
              }}
            >
              {children}
            </div>
          );
        },
        img: ({ ...props }) => (
          <img style={{ maxWidth: '100%' }} alt='MarkdownRenderer__Image' {...props} />
        ),
        em({ children, ...props }) {
          return (
            <span style={{ fontStyle: 'italic' }} {...props}>
              {children}
            </span>
          );
        },
      }}
    >
      {markdown
        .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
        .replace(/\*\*/gi, '@$_%!^')
        .replace(/@\$_%!\^/gi, '**')
        .replace(/<\/?u>/gi, '*')}
    </ReactMarkdown>
  );
}
