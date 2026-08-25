import { g as getContext, a as attributes, c as clsx, b as ensure_array_like, d as element, f as derived, h as spread_props, i as attr, j as attr_class, k as stringify, e as escape_html } from "../../chunks/root.js";
import { p as page } from "../../chunks/index.js";
/**
 * @file
 * @license @lucide/svelte v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @file
 * @license @lucide/svelte v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
/**
 * @file
 * @license @lucide/svelte v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LucideContext = Symbol("lucide-context");
const getLucideContext = () => getContext(LucideContext);
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const globalProps = getLucideContext() ?? {};
    const {
      name,
      color = globalProps.color ?? "currentColor",
      size = globalProps.size ?? 24,
      strokeWidth = globalProps.strokeWidth ?? 2,
      absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false,
      iconNode = [],
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    const calculatedStrokeWidth = derived(() => absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth);
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...!children && !hasA11yProp(props) && { "aria-hidden": "true" },
        ...props,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": calculatedStrokeWidth(),
        class: clsx([
          "lucide-icon lucide",
          globalProps.class,
          name && `lucide-${name}`,
          props.class
        ])
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]-->`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></svg>`);
  });
}
function Bell($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }],
    [
      "path",
      {
        "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "bell" }, props, { iconNode }]));
}
function Chart_column($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "M18 17V9" }],
    ["path", { "d": "M13 17V5" }],
    ["path", { "d": "M8 17v-3" }]
  ];
  Icon($$renderer, spread_props([{ name: "chart-column" }, props, { iconNode }]));
}
function Layout_dashboard($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      { "width": "7", "height": "9", "x": "3", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "5", "x": "14", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "9", "x": "14", "y": "12", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "5", "x": "3", "y": "16", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "layout-dashboard" }, props, { iconNode }]));
}
function Piggy_bank($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M2 8v1a2 2 0 0 0 2 2h1" }]
  ];
  Icon($$renderer, spread_props([{ name: "piggy-bank" }, props, { iconNode }]));
}
function Search($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([{ name: "search" }, props, { iconNode }]));
}
function Settings($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([{ name: "settings" }, props, { iconNode }]));
}
function User($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$renderer, spread_props([{ name: "user" }, props, { iconNode }]));
}
function Wallet($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      }
    ],
    ["path", { "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
  ];
  Icon($$renderer, spread_props([{ name: "wallet" }, props, { iconNode }]));
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const links = [
      { href: "/", label: "Overview", icon: Layout_dashboard },
      { href: "/expenses", label: "Expenses", icon: Wallet },
      { href: "/budget", label: "Budget", icon: Piggy_bank },
      { href: "/analytics", label: "Analytics", icon: Chart_column }
    ];
    function isActive(href) {
      return page.url.pathname === href;
    }
    function linkClass(href) {
      return isActive(href) ? "bg-mint-faint text-mint border-l-2" : "text-slate-blue hover:bg-navy-800 hover:text-ice";
    }
    $$renderer2.push(`<aside class="sticky top-0 h-screen w-60 shrink-0 border-r border-mint-faint bg-navy-900 p-4"><div class="mb-16 mt-6 px-2"><span class="text-2xl font-semibold tracking-tight text-ice">Pesa<span class="text-mint">Track</span></span></div> <nav class="flex flex-col gap-8"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      const Icon2 = link.icon;
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${stringify(linkClass(link.href))}`)}>`);
      Icon2($$renderer2, { size: 18 });
      $$renderer2.push(`<!----> ${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--> <div class="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-colors text-slate-blue hover:bg-navy-800 hover:text-ice">`);
    Settings($$renderer2, { size: 18 });
    $$renderer2.push(`<!----> <p>Settings</p></div></nav> <div class="relative border-t border-navy-800 pt-4"><div class="fixed bottom-5 flex items-center gap-3 rounded-lg px-2 py-2"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-faint">`);
    User($$renderer2, { size: 18, class: "text-mint" });
    $$renderer2.push(`<!----></div> <div class="flex flex-col overflow-hidden"><span class="truncate text-sm font-medium text-ice">Your Name</span> <span class="truncate text-xs text-slate-blue">user@email.com</span></div></div></div></aside>`);
  });
}
function Topbar($$renderer) {
  $$renderer.push(`<header class="sticky top-0 z-10 flex items-center justify-between border-b border-navy-800 bg-navy-900 px-8 py-4"><div class="relative flex-1 max-w-md">`);
  Search($$renderer, {
    size: 18,
    class: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-blue"
  });
  $$renderer.push(`<!----> <input type="text" placeholder="Search expenses..." class="w-full rounded-lg border border-navy-800 bg-navy-800 py-2 pl-10 pr-4 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"/></div> <button class="relative rounded-lg p-2 text-slate-blue transition-colors hover:bg-navy-800 hover:text-ice">`);
  Bell($$renderer, { size: 20 });
  $$renderer.push(`<!----> <span class="absolute -top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-ice">3</span></button></header>`);
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div id="app" class="min-h-screen bg-navy-850 text-ice"><div class="flex">`);
  Sidebar($$renderer);
  $$renderer.push(`<!----> <div class="flex flex-1 flex-col">`);
  Topbar($$renderer);
  $$renderer.push(`<!----> <main class="flex-1 p-8">`);
  children($$renderer);
  $$renderer.push(`<!----></main></div></div></div>`);
}
export {
  _layout as default
};
