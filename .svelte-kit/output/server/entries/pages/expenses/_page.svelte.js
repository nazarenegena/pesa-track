function ExpensesContent($$renderer) {
  $$renderer.push(`<p>The Expense Content</p>`);
}
function _page($$renderer) {
  ExpensesContent($$renderer);
}
export {
  _page as default
};
