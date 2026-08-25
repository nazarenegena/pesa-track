function OverviewContent($$renderer) {
  $$renderer.push(`<p>The Over View Content</p>`);
}
function _page($$renderer) {
  $$renderer.push(`<div>`);
  OverviewContent($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
