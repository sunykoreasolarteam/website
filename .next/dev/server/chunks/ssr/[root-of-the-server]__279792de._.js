module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/teamData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMembersBySection",
    ()=>getMembersBySection
]);
/**
 * Team Data
 * ─────────
 * To add, remove, or edit a team member, simply update this array.
 * The team page will render automatically from this data.
 *
 * Fields:
 *   id         – unique identifier (used as React key and HTML id)
 *   name       – display name
 *   role       – position title
 *   department – academic department or description
 *   imageMain  – path to the primary photo (shown by default)
 *   imageAlt   – path to the alternate photo (shown on hover, optional)
 *   section    – "executive" | "subteam" (determines which grid the card appears in)
 *   order      – display order within its section (lower = first)
 */ const teamData = [
    // ── Executive Team ──────────────────────────────────────────────
    {
        id: 'team-manager',
        name: 'Elias (Jinkyu) Hyun',
        role: 'Team Manager',
        department: 'Mechanical Engineering',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'executive',
        order: 1
    },
    {
        id: 'team-vice-manager',
        name: 'Sadhak Pathak',
        role: 'Team Vice Manager',
        department: 'Electrical and Computer Engineering',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'executive',
        order: 2
    },
    {
        id: 'team-treasurer',
        name: 'Deokwoong Han',
        role: 'Team Treasurer',
        department: 'Mechanical Engineering',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'executive',
        order: 3
    },
    // ── Sub-Team Leads ──────────────────────────────────────────────
    {
        id: 'mechanical-lead',
        name: 'Deokwoong Han',
        role: 'Mechanical Team Lead',
        department: 'Mechanical Engineering',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 1
    },
    {
        id: 'aerodynamics-lead',
        name: 'Vacant',
        role: 'Aerodynamics Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 2
    },
    {
        id: 'electrical-lead',
        name: 'Yedil Kuanyshbekov',
        role: 'Electrical Team Lead',
        department: 'Electrical and Computer Engineering',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 3
    },
    {
        id: 'software-lead',
        name: 'Vacant',
        role: 'Software Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 4
    },
    {
        id: 'integrations-lead',
        name: 'Vacant',
        role: 'Integrations Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 5
    },
    {
        id: 'operations-lead',
        name: 'Vacant',
        role: 'Operations Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 6
    },
    {
        id: 'education-lead',
        name: 'Vacant',
        role: 'Education Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 7
    },
    {
        id: 'media-lead',
        name: 'Vacant',
        role: 'Media Team Lead',
        department: '',
        imageMain: '/assets/team/placeholder-main.svg',
        imageAlt: '/assets/team/placeholder-alt.svg',
        section: 'subteam',
        order: 8
    }
];
function getMembersBySection(section) {
    return teamData.filter((m)=>m.section === section).sort((a, b)=>(a.order ?? 999) - (b.order ?? 999));
}
const __TURBOPACK__default__export__ = teamData;
}),
"[project]/src/components/TeamCard.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TeamCard — Reusable team member card component.
 *
 * Uses the existing CSS class names (leader-card, leader-photo-wrapper, etc.)
 * so the current design and hover crossfade effect are preserved.
 *
 * If `imageAlt` is not provided, only the main image is shown
 * with no broken hover behavior.
 */ __turbopack_context__.s([
    "default",
    ()=>TeamCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function TeamCard({ member }) {
    const { id, name, role, department, imageMain, imageAlt } = member;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "leader-card",
        id: id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "leader-photo-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageMain,
                        alt: `${name} — ${role}`,
                        className: "leader-photo leader-photo--main",
                        loading: "lazy",
                        width: 320,
                        height: 400
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    imageAlt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageAlt,
                        alt: `${name} — alternate photo`,
                        className: "leader-photo leader-photo--alt",
                        loading: "lazy",
                        width: 320,
                        height: 400,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeamCard.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "leader-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "leader-role",
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "leader-name",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "leader-department",
                        children: department
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamCard.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeamCard.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeamCard.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/team/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$teamData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/teamData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TeamCard.jsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: 'Our Team | SUNY Korea Solar Team',
    description: 'Meet the multidisciplinary student engineers designing and building our solar racing vehicle.'
};
function Team() {
    const executive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$teamData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMembersBySection"])('executive');
    const subteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$teamData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMembersBySection"])('subteam');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "team-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "team-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "team-page-title",
                            children: "The Team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "team-page-subtitle",
                            children: "The people behind the mission."
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/team/page.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "team-section",
                    "aria-label": "Executive Team",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "team-section-label",
                            children: "Executive Team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leadership-grid",
                            children: executive.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    member: member
                                }, member.id, false, {
                                    fileName: "[project]/src/app/team/page.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/team/page.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "team-divider"
                }, void 0, false, {
                    fileName: "[project]/src/app/team/page.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "team-section",
                    "aria-label": "Sub-Team Leads",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "team-section-label",
                            children: "Sub-Team Leads"
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "subteam-grid",
                            children: subteam.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    member: member
                                }, member.id, false, {
                                    fileName: "[project]/src/app/team/page.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/team/page.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/team/page.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/team/page.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/team/page.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/team/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/team/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__279792de._.js.map