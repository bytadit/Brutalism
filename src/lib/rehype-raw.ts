import { visit } from 'unist-util-visit';

export const preProcess = () => (tree: any) => {
  visit(tree, (node: any) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const codeText = getCodeText(node);
      node.raw = codeText;
    }
  });
};

function getCodeText(node: any): string {
  let codeText = '';

  function traverse(node: any) {
    if (node.type === 'text') {
      codeText += node.value;
    } else if (node.children) {
      for (const childNode of node.children) {
        traverse(childNode);
      }
    }
  }

  traverse(node);

  return codeText;
}

export const postProcess = () => (tree: any) => {
  visit(tree, 'element', (node: any) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw;
    }
  });
};
