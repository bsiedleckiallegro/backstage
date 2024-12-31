import React from 'react';
import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';
import { Text } from '@backstage/canon';
import styles from './styles.module.css';

interface CodeBlockProps {
  lang?: BundledLanguage;
  title?: string;
  code?: string;
}

export async function CodeBlock({ lang, title, code }: CodeBlockProps) {
  const out = await codeToHtml(code || '', {
    lang: lang || 'tsx',
    themes: {
      light: 'min-light',
      dark: 'min-dark',
    },
  });

  return (
    <div className={styles.codeBlock}>
      {title && (
        <div className={styles.title}>
          <Text variant="body">{title}</Text>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: out }} className={styles.code} />
    </div>
  );
}
