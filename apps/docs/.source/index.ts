import { _runtime } from 'fumadocs-mdx';
import * as docs_0 from '../content/index.mdx?collection=docs&hash=1746482421095';
import * as docs_1 from '../content/test/blabla.mdx?collection=docs&hash=1746482421095';
// @ts-nocheck -- skip type checking
import * as docs_2 from '../content/test/iiiindex.mdx?collection=docs&hash=1746482421095';
import type * as _source from '../source.config';
export const docs = _runtime.docs<typeof _source.docs>(
  [
    {
      info: {
        path: 'index.mdx',
        absolutePath:
          '/Users/jfr/Desktop/code/Donna/apps/docs/content/index.mdx',
      },
      data: docs_0,
    },
    {
      info: {
        path: 'test/blabla.mdx',
        absolutePath:
          '/Users/jfr/Desktop/code/Donna/apps/docs/content/test/blabla.mdx',
      },
      data: docs_1,
    },
    {
      info: {
        path: 'test/iiiindex.mdx',
        absolutePath:
          '/Users/jfr/Desktop/code/Donna/apps/docs/content/test/iiiindex.mdx',
      },
      data: docs_2,
    },
  ],
  []
);
