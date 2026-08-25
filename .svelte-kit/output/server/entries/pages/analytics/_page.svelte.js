function AnalyticsContent($$renderer) {
  $$renderer.push(`<p>Analytics Content</p>`);
}
function _page($$renderer) {
  AnalyticsContent($$renderer);
}
export {
  _page as default
};
