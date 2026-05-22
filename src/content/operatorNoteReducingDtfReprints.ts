/**
 * Operator Note #1 — Gate 1 Final Calibrated Version.
 * Route: /learn/reducing-dtf-reprints-workflow-layout-case
 */

export const operatorNote1 = {
  eyebrow:
    "Learn / Operator Notes / Reducing DTF Reprints: A Workflow-Layout Case",
  title: "Reducing DTF Reprints: A Workflow-Layout Case",
  deck:
    "A documented case from a small DTF shop where the reported reprint rate fell after workflow layout, zone structure, and QC discipline changed — without replacing the printer. Operator Notes are first-person observations from real production work. They document what was done, what worked, what did not, and what we would repeat. They are not consulting case studies.",
  heroImage: {
    filename: "operator-note-1-hero.jpg",
    description:
      "a wide-angle shot of a DTF shop after layout changes. Visible zones marked with floor tape, a fixed press station, a defined QC station, an order tray system in use. The shot should communicate “organized small-shop production,” not “demonstration shop.” If possible, use a real shop. If the shop is anonymized, visible identifiers (signage, branding on equipment, operator features) should be removed in post.",
  },
  problem: {
    title: "The problem we were looking at",
    paragraphs: [
      "A two-person DTF shop running roughly 30 to 50 shirts a day was producing reprints at a rate the owner had come to treat as normal. The reprints weren’t catastrophic. They weren’t traceable to a single equipment fault. They showed up across the week, across operators, across substrates, and the shop had absorbed them as a cost of running.",
      "The owner’s first hypothesis was that the printer was aging and might need replacement. The second hypothesis was that the film wasn’t holding up. The third was that the heat press was drifting on temperature. All three were reasonable, and all three had partial truth in them. None of them explained the full pattern.",
      "We were asked to look at the shop before the printer purchase decision was made. What follows is what we found, what changed, and what the reprint rate did over the following weeks.",
    ],
  },
  baseline: {
    title: "Baseline condition",
    paragraphs: [
      "Before any changes, we documented the shop’s operating state across two production weeks.",
      "Reprint rate, as the shop counted it internally, was running at roughly 8% of finished shirts. This included shirts pulled at QC, shirts returned by customers within thirty days, and shirts the operators themselves rejected during pressing or packing. The shop wasn’t tracking reprint reasons in a structured way. The 8% was an aggregate number — the owner counted reprints at the end of each day from a notebook the operators kept near the press.",
      "The shop’s physical layout was typical for a two-person DTF operation that had grown organically. The printer sat against one wall. The cure oven sat against an adjacent wall. The heat press sat in the middle of the room on a folding table. Finished transfers were stacked on a metal shelf near the press. Blank shirts came in from a storage area at the back of the shop. The packing station was a separate table near the front door, where shipping supplies were kept in a rolling cart that moved depending on the day.",
      "Film, powder, and accessories were stored on three open shelves above the printer. The shelves were labeled with handwritten notes that had faded over the previous year. Replacement squeegees, alignment rulers, and Teflon sheets were kept in a drawer under the heat press table.",
      "The shop ran without printed SOPs. The owner had trained the second operator informally over the course of about six weeks. Both operators understood the process. Neither could have written it down without consulting the other.",
    ],
    layoutDiagram: {
      filename: "operator-note-1-baseline-layout.svg",
      description:
        "a simple top-down floor plan showing the shop’s pre-change layout. Printer, cure oven, mobile press table, scattered packing area, supply shelves. Annotated to show the path a single order took through the shop, with arrows indicating cross-traffic and surface ambiguity.",
    },
  },
  observed: {
    title: "What we observed",
    paragraphs: [
      "We watched the shop run for two full production days before suggesting any changes. A few patterns surfaced.",
      "The path a single order took through the shop was longer than it needed to be, and it crossed itself. A shirt arriving at the heat press might be pressed before the matching transfer was ready, or a transfer might be cured before the matching shirt was retrieved from the back. The two operators moved past each other frequently. When the shop got busy, orders sat on whatever flat surface was closest — the press table, the packing table, the top of the cure oven.",
      "Transfers and shirts were identified by paper tags clipped to each order, but the tags didn’t always stay attached. When an order’s tag came loose, the operators reconstructed which transfer belonged to which shirt by visual matching. This worked when the orders looked different and failed when several orders had similar designs.",
      "The QC step was informal. The operator pressing the shirt was also the operator inspecting it. Defects were caught when they were obvious. Subtler problems — slight misalignment, edge lift on a transfer, color drift between a finished shirt and the customer’s approved sample — were caught inconsistently.",
      "The packing station, being mobile, sometimes held finished orders that had passed QC and sometimes held orders that hadn’t been QC’d yet. There was no visible boundary between the two states.",
      "None of this was unusual. Many small DTF shops at this volume show some version of the same pattern. What was specific to this shop was that the owner had begun to attribute the resulting reprints to equipment rather than to the conditions under which the equipment was being used.",
    ],
  },
  rootCauses: {
    title: "Root causes",
    intro:
      "We identified three patterns that appeared to drive a meaningful portion of the reprints.",
    causes: [
      {
        lead: "Order identity loss.",
        body: "When an order’s paper tag came loose, or when a transfer and a shirt got separated between stations, the operators rebuilt the pairing by inspection. This produced occasional mismatches — a transfer pressed onto the wrong shirt, or a transfer pressed onto a correct shirt in the wrong size. These showed up in the reprint count as customer returns rather than as production errors, which is why the owner hadn’t immediately connected them to layout.",
      },
      {
        lead: "Cross-traffic and surface ambiguity.",
        body: "The two operators worked in overlapping space. Orders moved across the same surfaces in different states — pre-QC, post-QC, ready-to-ship, awaiting-press. When an operator put a shirt on the press table, the other operator couldn’t always tell which state it was in. This caused a small number of mispresses (a shirt pressed twice, or a shirt pressed when the transfer was still curing) and a larger number of slowdowns that increased the chance of other errors.",
      },
      {
        lead: "Inconsistent QC discipline.",
        body: "Because QC happened at the press, by the operator who had just pressed the shirt, it was reactive rather than structured. The same operator inspecting their own work, at the moment of completion, under time pressure, missed the kind of subtle defects that would have been caught by a fresh look at a defined station.",
      },
    ],
    closing:
      "The printer was producing usable output. The film was performing within its documented operating range. The heat press temperature, when checked, was holding within tolerance. The reprints we could trace were tracing to layout and station discipline, not to equipment.",
  },
  layoutChanges: {
    title: "Layout changes",
    paragraphs: [
      "We worked with the shop owner to make a series of layout changes over the following two weeks. The shop continued to run production during the changes. We did not shut anything down.",
      "The first change was to define a one-way flow through the shop. Shirts entered at the back, moved to the printer side for transfer pickup, moved to the press, moved to QC, and moved to packing at the front. This required moving the heat press from the middle of the room to a wall position, and converting the folding table into a fixed press station. The packing station was given a permanent location at the front, with shipping supplies anchored to that station rather than rolling between stations.",
      "The second change was to introduce visible boundaries between stations. We used floor marking tape to define the print zone, the cure zone, the press zone, the QC zone, and the pack zone. Each zone got a wall-mounted zone label visible from anywhere in the shop. The boundaries weren’t enforcement zones — operators crossed them as needed. They were identity zones. A shirt sitting in the QC zone was in QC. A shirt sitting in the pack zone had passed QC.",
      "The third change was to introduce a dedicated QC station as a separate step, with its own surface, its own lighting, and its own checklist board. The same operator could still perform QC, but it happened at a defined station after the press, not at the press itself.",
      "In Lloyd & Vale category terms, the changes drew from the same operating logic behind the DTF Shop Setup Kit and the QC Station Setup Kit. The shop sourced floor marking, zone labels, an SOP board, a QC checklist board, finished-transfer location labels, and a few alignment and storage items. The setup spend was a small fraction of what a printer replacement would have required.",
    ],
    postChangeDiagram: {
      filename: "operator-note-1-post-change-layout.svg",
      description:
        "the same top-down floor plan after changes. One-way flow, fixed press station, dedicated QC station, anchored packing station, defined zones.",
    },
    floorMarkingImage: {
      filename: "operator-note-1-floor-marking.jpg",
      description:
        "a ground-level photograph showing a zone boundary in floor marking tape and a zone label on a wall in working context. The image’s argument is that visible structure is what the operators see, not what the photography emphasizes.",
    },
  },
  labelingDiscipline: {
    title: "Labeling and station discipline changes",
    intro:
      "Layout changes don’t reduce reprints by themselves. They reduce reprints when paired with station discipline changes that depend on the visible structure.",
    introSecondary:
      "Three visible-control changes appeared to do most of the work.",
    changes: [
      {
        lead: "Order trays at each station.",
        body: "Every order moved through the shop in a single tray, color-coded by stage. The blank shirt, the cured transfer, the printed packing slip, and any accessories traveled together. When the tray was at the print station, the order was waiting for transfer pickup. When the tray was at the press, the order was being pressed. When the tray was at QC, the order was being inspected. Order identity stayed with the tray. The paper tags that used to come loose became redundant.",
        image: {
          filename: "operator-note-1-order-tray.jpg",
          description:
            "a photograph of one order tray containing a blank shirt, a cured transfer, a packing slip, and any accessories, sitting at the press station. The image’s argument is that order identity travels physically.",
        },
      },
      {
        lead: "Finished-transfer location labels.",
        body: "Transfers coming off the cure oven were placed in labeled bins matched to the order tray system, not stacked loose on a shelf. When an operator needed a specific transfer, the location was findable rather than searchable.",
      },
      {
        lead: "QC station checklist board.",
        body: "The QC station got a checklist board listing the items being inspected on every shirt: placement, edge integrity, color match to sample, no contamination, no double-press. The checklist wasn’t long. It was visible. The operator at the QC station read it on every shirt.",
        image: {
          filename: "operator-note-1-qc-station.jpg",
          description:
            "a photograph of the QC station with checklist board visible, inspection lighting, and a shirt mid-inspection. Hands visible, operator anonymized.",
        },
      },
    ],
    closing:
      "We also introduced an SOP board at the press station covering daily start-up, color reference, and cleaning. The board didn’t change daily operations dramatically. What it changed was the second operator’s ability to start a shift without consulting the owner. That mattered for training, not for reprint rate directly.",
  },
  measurement: {
    title: "Measurement method",
    paragraphs: [
      "We needed to know whether the changes were working, and the previous measurement method — the owner counting reprints from a notebook at the end of each day — wasn’t reliable enough to tell.",
      "We introduced a simple reprint log at the QC station. Every reprint was recorded with a date, an order number, a reason category (placement, color, mismatch, double-press, equipment, other), and an open notes field. The categories were intentionally limited — five named categories plus other — to make the log usable in real time without slowing down QC.",
      "The log was reviewed weekly. The owner spent about fifteen minutes each Friday going through the previous week’s entries. The categories made patterns visible that the previous notebook didn’t surface.",
      "For the analysis below, the baseline was the two-week period before changes started. The post-change measurement covered the eight weeks following the completion of layout and labeling changes. Production volume was roughly stable across the comparison period.",
    ],
    reprintLogImage: {
      filename: "operator-note-1-reprint-log.jpg",
      description:
        "a photograph or clean digital mock-up of the five-category reprint log showing several weeks of entries. Not the actual data from the case shop — a representative example that makes the format visible.",
    },
  },
  results: {
    title: "Results",
    paragraphs: [
      "Over the eight weeks following the changes, the shop’s internally measured reprint rate fell to roughly 2% of finished shirts, using the same aggregate method used at baseline. We’re presenting that number as a documented case scenario, not as a universal claim. A different shop at a different volume with different equipment and different operators would not necessarily see the same result.",
      "The categories of reprints that fell the most were mismatch reprints and double-press reprints. Both had traced to order identity loss and station ambiguity, and both were structurally addressed by the order tray system and the visible zones. Placement reprints fell as well, which we attributed to the dedicated QC station catching alignment issues before shipping rather than after customer return.",
      "Color reprints did not fall meaningfully. They weren’t traceable to layout, and the shop addressed them separately over the following months through color management changes that are outside the scope of this note.",
      "Equipment reprints — the category the owner had originally believed was driving the problem — turned out to be a small portion of the total at baseline and remained a small portion after the changes. The printer was not the issue. The shop did not replace the printer.",
    ],
    resultsChart: {
      filename: "operator-note-1-results-chart.svg",
      description:
        "a simple line chart showing reprint rate over the twelve-week measurement window. Baseline two weeks, change period two weeks, post-change eight weeks.",
      caption:
        "Reprint rate over the measurement window — documented case scenario for one shop; not presented as a universal claim.",
    },
  },
  whatDidNotWork: {
    title: "What did not work",
    paragraphs: [
      "Several things we tried in parallel with the layout changes did not produce meaningful improvement.",
      "We initially over-labeled the shop. We added zone labels, station labels, sub-station labels, supply labels, and process-stage labels in a first pass that overwhelmed the operators rather than helping them. We removed roughly a third of the labels after the second week and the shop ran better. Visible structure works when the labels operators see are the labels operators need. Too many labels become background noise the same way no labels do.",
      "We tried introducing a daily start-up checklist that ran to about twenty items. The operators ignored it within three days. We replaced it with a six-item start-up checklist that covered the items that actually affected output (head check, temperature verification, film stock check, powder stock check, color reference at hand, station clean). The shorter checklist was used. The longer one had been treated as a compliance burden rather than as an operating tool.",
      "We considered introducing a barcode scanning system for order tracking. The shop’s volume didn’t justify the system cost, and the order tray system addressed the underlying identity problem at a fraction of the implementation effort. We documented this as a possible future change for higher-volume shops.",
    ],
  },
  whatWeWouldRepeat: {
    title: "What we would repeat",
    paragraphs: [
      "If we were working with another DTF shop of similar size and similar reprint patterns, the elements we would repeat are these.",
      "Define a one-way flow through the shop, with stations anchored to walls and the press at a fixed location rather than a mobile table. Introduce visible zones with floor marking and zone labels. Establish a dedicated QC station separated from the press station. Implement an order tray system that keeps order identity with the physical materials at every stage. Introduce a short, station-specific SOP at each major station. Track reprints with a five-category log reviewed weekly.",
      "What we would not assume is that every DTF reprint is layout-related. Equipment issues, consumable inconsistency, color management problems, and operator training gaps all produce reprints, and they require their own diagnostic and resolution paths. Layout changes the conditions under which the equipment and operators work. It does not eliminate the underlying problems they have.",
      "In this case, layout was the dominant variable. In another shop, it might be one of several variables and not the most important one. The point of a reprint log is to make that determination on evidence rather than on hypothesis.",
    ],
  },
  caseNote: {
    title: "Case note",
    body: "This note describes one documented shop case. The numbers reflect that shop’s internal measurement method and production conditions. Reprint causes vary by equipment, consumables, operator training, and workflow. The point is not that layout solves every DTF problem; the point is that layout is a production variable worth measuring.",
  },
  relatedCategories: {
    title: "Related Lloyd & Vale categories",
    intro:
      "The items used in this case are sourced through several Lloyd & Vale categories:",
    items: [
      {
        name: "Shop Setup Essentials",
        href: "/shop/shop-setup-essentials",
        description:
          "Floor marking, zone labels, SOP boards, and the visual-management items that defined the shop’s zone structure.",
      },
      {
        name: "DTF Shop Setup Kit",
        href: "/shop/starter-kits/dtf-shop-setup-kit",
        description:
          "The configured set of items most DTF shops at this size end up assembling independently. For shops with similar requirements, the kit provides a more consistent starting point than assembling the items individually.",
      },
      {
        name: "QC Station Setup Kit",
        href: "/shop/starter-kits/qc-station-setup-kit",
        description:
          "The QC station signage, checklist board, and inspection tools used to establish the dedicated QC step.",
      },
      {
        name: "Shop Control Tools",
        href: "/shop/shop-control-tools",
        description:
          "The order trays, finished-transfer location bins, alignment rulers, and storage components that supported the order identity system.",
      },
      {
        name: "Technical Support",
        href: "/support",
        description:
          "Setup guidance and structured workflow review are available as Service Options for shops working through similar changes.",
      },
    ],
  },
  similarPattern: {
    title: "If you’re looking at a similar pattern in your own shop",
    paragraphs: [
      {
        parts: [
          {
            type: "text",
            value:
              "If reprints are running higher than you’d like and you’re not sure whether the cause is equipment, consumables, or layout, the practical starting point is a reprint log. A five-category log run for two weeks will tell you more about your shop than a printer replacement decision based on a hypothesis.",
          },
        ],
      },
      {
        parts: [
          {
            type: "text",
            value: "If the log shows layout and station discipline accounting for a meaningful share of the reprints, the ",
          },
          {
            type: "link",
            label: "DTF Shop Setup Kit",
            href: "/shop/starter-kits/dtf-shop-setup-kit",
          },
          {
            type: "text",
            value: " is a practical starting point for addressing that pattern.",
          },
        ],
      },
      {
        parts: [
          {
            type: "text",
            value: "If you’d like to work through the diagnosis with us, ",
          },
          {
            type: "link",
            label: "Get a Quote",
            href: "/get-a-quote",
          },
          {
            type: "text",
            value:
              " and describe the pattern you’re seeing. We respond within one business day.",
          },
        ],
      },
    ],
  },
  signature: "— Michael, Lloyd & Vale",
} as const;
