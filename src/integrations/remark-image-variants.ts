import { visit } from 'unist-util-visit';

// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
export function remarkImageVariants() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return tree => {
    visit(tree, node => {
      console.log({ node });
      if (node && node.type === 'image') {
        const data = node.data || (node.data = {});
        const tagName = 'figure';

        console.log({ data });

        // data.hName = tagName;
        // data.hProperties = { className: 'image' };
        // node.children = [
        //   {
        //     type: 'html',
        //     value: `<img src="${node.url}" alt="${node.alt}" />`,
        //   },
        //   {
        //     type: 'html',
        //     value: `<figcaption>${node.alt}</figcaption>`,
        //   },
        // ];
      }
      // if (
      //   node.type === 'containerDirective' ||
      //   node.type === 'leafDirective' ||
      //   node.type === 'textDirective'
      // ) {
      //   if (node.name !== 'note') return;

      //   const data = node.data || (node.data = {});
      //   const tagName = node.type === 'textDirective' ? 'span' : 'div';

      //   data.hName = tagName;
      //   data.hProperties = h(tagName, node.attributes || {}).properties;
      // }
    });
  };
}
