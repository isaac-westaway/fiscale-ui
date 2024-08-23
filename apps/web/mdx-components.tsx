import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import { components } from "@/components/MDXComponents"

export function useMDXComponents(_components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ..._components,
  };
}