import { s as spread_props, e as escape_html, a9 as attr_style, a8 as derived, d as stringify, a as ensure_array_like, c as attr_class, b as attr, aa as bind_props } from "../../chunks/index.js";
import { I as Icon, W as Wallet } from "../../chunks/wallet.js";
import { fail } from "@sveltejs/kit";
function Bookmark($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "bookmark" }, props, { iconNode }]));
}
function Bus($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M8 6v6" }],
    ["path", { "d": "M15 6v6" }],
    ["path", { "d": "M2 12h19.6" }],
    [
      "path",
      {
        "d": "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
      }
    ],
    ["circle", { "cx": "7", "cy": "18", "r": "2" }],
    ["path", { "d": "M9 18h5" }],
    ["circle", { "cx": "16", "cy": "18", "r": "2" }]
  ];
  Icon($$renderer, spread_props([{ name: "bus" }, props, { iconNode }]));
}
function Chart_line($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "m19 9-5 5-4-4-3 3" }]
  ];
  Icon($$renderer, spread_props([{ name: "chart-line" }, props, { iconNode }]));
}
function Gamepad_2($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["line", { "x1": "6", "x2": "10", "y1": "11", "y2": "11" }],
    ["line", { "x1": "8", "x2": "8", "y1": "9", "y2": "13" }],
    [
      "line",
      { "x1": "15", "x2": "15.01", "y1": "12", "y2": "12" }
    ],
    [
      "line",
      { "x1": "18", "x2": "18.01", "y1": "10", "y2": "10" }
    ],
    [
      "path",
      {
        "d": "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "gamepad-2" }, props, { iconNode }]));
}
function Heart($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "heart" }, props, { iconNode }]));
}
function House($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "house" }, props, { iconNode }]));
}
function Move_down($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M8 18L12 22L16 18" }],
    ["path", { "d": "M12 2V22" }]
  ];
  Icon($$renderer, spread_props([{ name: "move-down" }, props, { iconNode }]));
}
function Move_up_right($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M13 5H19V11" }],
    ["path", { "d": "M19 5L5 19" }]
  ];
  Icon($$renderer, spread_props([{ name: "move-up-right" }, props, { iconNode }]));
}
function Plus($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$renderer, spread_props([{ name: "plus" }, props, { iconNode }]));
}
function Receipt_text($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M13 16H8" }],
    ["path", { "d": "M14 8H8" }],
    ["path", { "d": "M16 12H8" }],
    [
      "path",
      {
        "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "receipt-text" }, props, { iconNode }]));
}
function Save_check($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"
      }
    ],
    ["path", { "d": "m16 19 2 2 4-4" }],
    [
      "path",
      { "d": "M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }
    ],
    ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]
  ];
  Icon($$renderer, spread_props([{ name: "save-check" }, props, { iconNode }]));
}
function Shopping_cart($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "8", "cy": "21", "r": "1" }],
    ["circle", { "cx": "19", "cy": "21", "r": "1" }],
    [
      "path",
      {
        "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "shopping-cart" }, props, { iconNode }]));
}
function Tag($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
      }
    ],
    [
      "circle",
      { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "tag" }, props, { iconNode }]));
}
function X($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([{ name: "x" }, props, { iconNode }]));
}
function StatsCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      title,
      amount,
      percentage,
      description,
      TitleIcon,
      TextIcon,
      showProgress = false,
      progress = 0
    } = $$props;
    let formattedAmount = derived(() => amount.toLocaleString("en-US"));
    $$renderer2.push(`<div class="bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl space-y-4 w-68"><div class="flex justify-between"><p class="text-slate-blue text-sm">${escape_html(title)}</p> <div class="bg-mint/25 p-2 text-mint font-bold rounded-md">`);
    if (TitleIcon) {
      $$renderer2.push("<!--[-->");
      TitleIcon($$renderer2, { size: 18 });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</div></div> <div><p class="text-2xl font-bold inline-flex items-baseline gap-1.5"><span class="text-xl">KSh</span> <span class="font-mono">${escape_html(formattedAmount())}</span></p></div> `);
    if (showProgress) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex h-1 w-full overflow-hidden rounded-full"><div class="h-20 bg-mint transition-all"${attr_style(`width: ${stringify(progress)}%`)}></div> <div class="h-20 bg-mint-faint transition-all"${attr_style(`width: ${stringify(100 - progress)}%`)}></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex text-sm items-center gap-1">`);
    if (title == "Monthly Budget" || title == "Balance") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="text-slate-blue">${escape_html(percentage)} ${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex text-mint gap-x-2">`);
      if (TextIcon) {
        $$renderer2.push("<!--[-->");
        TextIcon($$renderer2, { size: 18 });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(` <p class="text-sm">${escape_html(percentage)} ${escape_html(description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function SpendingCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { amount, TextIcon, description } = $$props;
    let formattedAmount = derived(() => amount.toLocaleString("en-US"));
    $$renderer2.push(`<div class="flex gap-4"><p class="text-2xl font-semibold inline-flex items-baseline gap-1.5"><span class="text-xl">KSh</span> <span class="font-mono">${escape_html(formattedAmount())}</span></p> <div class="flex justify-baseline text-mint items-center text-sm">`);
    if (TextIcon) {
      $$renderer2.push("<!--[-->");
      TextIcon($$renderer2, { size: 16 });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(` <p>${escape_html(description)}</p></div></div>`);
  });
}
function WeeklyData($$renderer) {
  $$renderer.push(`<div>`);
  SpendingCard($$renderer, {
    amount: 9840,
    TextIcon: Move_down,
    description: "8% lower than last week"
  });
  $$renderer.push(`<!----></div>`);
}
function SpendingOverview($$renderer) {
  let currentView = "week";
  const viewItems = ["week", "month", "year"];
  const activeBtnStyle = "bg-mint/15 text-mint px-3 py-0 rounded-lg";
  $$renderer.push(`<div class="space-y-10 bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl"><div class="flex justify-between"><div class="space-y-2"><p class="font-semibold">Spending Overview</p> <p class="text-slate-blue">`);
  {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`Your spending activity across this week`);
  }
  $$renderer.push(`<!--]--></p></div> <div class="flex gap-x-6 bg-navy-850 px-3 text-sm rounded-xl h-10 py-1.5"><!--[-->`);
  const each_array = ensure_array_like(viewItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let view = each_array[$$index];
    $$renderer.push(`<button${attr_class(`cursor-pointer text-slate-blue transition-colors ${currentView === view ? activeBtnStyle : "hover:text-ice"}`)}>${escape_html(view)}</button>`);
  }
  $$renderer.push(`<!--]--></div></div> `);
  {
    $$renderer.push("<!--[-1-->");
    WeeklyData($$renderer);
  }
  $$renderer.push(`<!--]--></div>`);
}
function SpendingCategory($$renderer) {
  $$renderer.push(`<div class="space-y-10 bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl w-full"><div><p>Spending by Category</p> <p>Where your money goes</p></div> <div><p>Money Allocation</p></div></div>`);
}
function ExpenseModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { isOpen = false, onAddExpense } = $$props;
    let title = "";
    let category = "";
    let paymentMethod = "";
    let description = "";
    let amount = "";
    let date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (isOpen) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 flex items-center justify-center"><button type="button" class="absolute inset-0 bg-navy-950/70 cursor-default border-none p-0" aria-label="Close modal"></button> <div class="relative bg-navy-800 border border-navy-700 p-6 rounded-2xl shadow-xl z-10 max-w-lg w-full m-4"><button type="button" class="absolute top-4 right-4 text-slate-blue hover:text-ice transition-colors cursor-pointer">`);
      X($$renderer2, { size: 20 });
      $$renderer2.push(`<!----></button> <div class="flex items-center gap-3 mb-6"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-mint-faint">`);
      Wallet($$renderer2, { size: 20, class: "text-mint" });
      $$renderer2.push(`<!----></div> <div><h2 class="text-lg font-bold text-ice">Add Expense</h2> <p class="text-sm text-slate-blue">Track where your money went</p></div></div> <form class="space-y-4"><div><label for="title" class="block text-sm font-medium text-slate-blue mb-1">Expense Name</label> <input required="" type="text" id="title"${attr("value", title)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint" placeholder="e.g., Grocery Shopping"/></div> <div class="grid grid-cols-2 gap-4"><div><label for="amount" class="block text-sm font-medium text-slate-blue mb-1">Amount</label> <input required="" type="number" id="amount"${attr("value", amount)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint" placeholder="KSh 0.00"/></div> <div><label for="category" class="block text-sm font-medium text-slate-blue mb-1">Category</label> <input required="" type="text" id="category"${attr("value", category)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint" placeholder="e.g., Food"/></div></div> <div class="grid grid-cols-2 gap-4"><div><label for="paymentMethod" class="block text-sm font-medium text-slate-blue mb-1">Payment Method</label> <input required="" type="text" id="paymentMethod"${attr("value", paymentMethod)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint" placeholder="e.g., M-Pesa"/></div> <div><label for="date" class="block text-sm font-medium text-slate-blue mb-1">Date</label> <input required="" type="date" id="date"${attr("value", date)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint"/></div></div> <div><label for="description" class="block text-sm font-medium text-slate-blue mb-1">Description</label> <input required="" type="text" id="description"${attr("value", description)} class="w-full rounded-lg border border-navy-700 bg-navy-900 px-3 py-2.5 text-sm text-ice placeholder-slate-blue outline-none transition-colors focus:border-mint" placeholder="What was this expense for?"/></div> <div class="flex gap-3 pt-2"><button type="button" class="flex-1 rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm font-medium text-slate-blue transition-colors hover:text-ice hover:border-navy-600 cursor-pointer">Cancel</button> <button type="submit" class="flex-1 flex items-center justify-center gap-2 rounded-lg bg-mint px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-mint-soft cursor-pointer">`);
      Plus($$renderer2, { size: 18 });
      $$renderer2.push(`<!----> Add Expense</button></div></form></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { isOpen });
  });
}
function RecentExpenses($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { expenses } = $$props;
    function formatAmount(amount) {
      return amount.toLocaleString();
    }
    function formatDate(iso) {
      return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
    const categoryStyles = {
      food: { icon: Shopping_cart, bg: "bg-green/15", text: "text-green" },
      drinks: { icon: Shopping_cart, bg: "bg-green/15", text: "text-green" },
      groceries: { icon: Shopping_cart, bg: "bg-green/15", text: "text-green" },
      transport: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
      travel: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
      housing: { icon: House, bg: "bg-violet/15", text: "text-violet" },
      rent: { icon: House, bg: "bg-violet/15", text: "text-violet" },
      entertainment: { icon: Gamepad_2, bg: "bg-coral/15", text: "text-coral" },
      health: { icon: Heart, bg: "bg-amber/15", text: "text-amber" }
    };
    const defaultStyle = { icon: Tag, bg: "bg-mint/15", text: "text-mint" };
    function getCategoryStyle(category) {
      return categoryStyles[category?.toLowerCase() ?? ""] ?? defaultStyle;
    }
    $$renderer2.push(`<div class="bg-navy-700/40 border border-mint-faint px-5 py-7 rounded-2xl space-y-4"><div class="flex items-center justify-between"><p class="font-semibold">Recent Expenses</p> <a href="/expenses" class="text-sm text-mint hover:text-mint-soft transition-colors">View All</a></div> `);
    if (expenses.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-col items-center justify-center py-12 gap-3">`);
      Receipt_text($$renderer2, { size: 48, class: "text-slate-blue" });
      $$renderer2.push(`<!----> <p class="text-slate-blue font-medium">No expenses yet</p> <p class="text-slate-blue text-sm">Add your first expense to see it here</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(expenses);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let expense = each_array[i];
        const style = getCategoryStyle(expense.category);
        $$renderer2.push(`<div${attr_class(`flex items-center justify-between py-3 ${i < expenses.length - 1 ? "border-b border-navy-800" : ""}`)}><div class="flex items-center gap-3"><div${attr_class(`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${stringify(style.bg)}`)}>`);
        if (style.icon) {
          $$renderer2.push("<!--[-->");
          style.icon($$renderer2, { size: 16, class: style.text });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(`</div> <div class="flex flex-col"><span class="text-sm font-medium text-ice">${escape_html(expense.title)}</span> <span class="text-xs text-slate-blue">${escape_html(expense.category)} · ${escape_html(expense.paymentMethod)}</span></div></div> <div class="flex flex-col items-end"><span class="text-sm font-bold font-mono text-ice">KSh ${escape_html(formatAmount(expense.amount))}</span> <span class="text-xs text-slate-blue">${escape_html(formatDate(expense.date))}</span></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function OverviewContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let today = /* @__PURE__ */ new Date();
    let isOpen = false;
    let expenses = [];
    function addExpenseToState(title, category, paymentMethod, description, amount, date) {
      const newExpense = {
        id: crypto.randomUUID(),
        title,
        category,
        paymentMethod,
        amount,
        description,
        date
      };
      expenses.push(newExpense);
    }
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let formattedDate = today.toLocaleDateString("en-US", dateOptions).toUpperCase();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="space-y-6"><div><p class="text-md text-slate-blue font-bold">${escape_html(formattedDate)}</p></div> <div class="flex justify-between"><div class="space-y-2"><p class="text-3xl">Good morning</p> <p class="text-md text-slate-blue font-bold">Here's how your money is looking this month.</p></div> <div class="flex bg-mint text-navy-900 items-center px-4 rounded-md gap-1 h-12">`);
      Plus($$renderer3, { size: 18 });
      $$renderer3.push(`<!----> <button class="font-semibold text-sm cursor-pointer">Add Expense</button></div></div> <div>`);
      ExpenseModal($$renderer3, {
        onAddExpense: addExpenseToState,
        get isOpen() {
          return isOpen;
        },
        set isOpen($$value) {
          isOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="flex justify-evenly w-full gap-x-6">`);
      StatsCard($$renderer3, {
        title: "Total Spent",
        TitleIcon: Bookmark,
        amount: 42850,
        TextIcon: Move_up_right,
        percentage: 12,
        description: "% less than last month"
      });
      $$renderer3.push(`<!----> `);
      StatsCard($$renderer3, {
        title: "Monthly Budget",
        TitleIcon: Wallet,
        amount: 6e4,
        description: " 71% of your budget used",
        showProgress: true,
        progress: 60
      });
      $$renderer3.push(`<!----> `);
      StatsCard($$renderer3, {
        title: "Balance",
        TitleIcon: Chart_line,
        amount: 17150,
        description: "28 days remaining"
      });
      $$renderer3.push(`<!----> `);
      StatsCard($$renderer3, {
        title: "Savings",
        TitleIcon: Save_check,
        amount: 18450,
        TextIcon: Move_up_right,
        percentage: 8.4,
        description: "% this month"
      });
      $$renderer3.push(`<!----></div> <div class="grid grid-cols-2 gap-x-8">`);
      SpendingOverview($$renderer3);
      $$renderer3.push(`<!----> `);
      SpendingCategory($$renderer3);
      $$renderer3.push(`<!----></div> `);
      RecentExpenses($$renderer3, { expenses });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const actions = {
      addExpense: async ({ request }) => {
        const data = await request.formData();
        const title = data.get("title");
        const category = data.get("category");
        const paymentMethod = data.get("paymentMethod");
        const amount = data.get("amount");
        const description = data.get("description");
        data.get("date");
        if (!description || !amount) {
          return fail(400, { error: "All fields are required", description });
        }
        console.log("Saving expense:", {
          title,
          category,
          paymentMethod,
          amount: Number(amount),
          date: (/* @__PURE__ */ new Date()).toISOString()
        });
        return { success: true };
      }
    };
    $$renderer2.push(`<div>`);
    OverviewContent($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { actions });
  });
}
export {
  _page as default
};
