export const imports = {
  'document.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "document" */ 'document.mdx'),
}
