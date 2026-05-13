
import Image1 from "../assets/images/illustrations/automation.svg"
import Image2 from "../assets/images/illustrations/digital.svg"
import Image3 from "../assets/images/illustrations/dev.svg"
import Image4 from "../assets/images/illustrations/consultancy.svg"

export const service_home_cards = [
  {
    id: "automation",
    headingLines: "1. Intelligent Automation",
    description:
      "Automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into your existing systems, without  changing what already works.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image1
  },
  {
    id: "digitization",
    headingLines: "2. Digital Transformation",
    description:
      "Replace manual workflows like spreadsheets, paperwork, emails,  and disconnected tools with structured digital systems, designed around  how your business actually operates.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image2
  },
  {
    id: "software",
    headingLines: "3. End-to-End Software Product Development",
    description:
      "Turn your idea into a fully functional software system, from  design to launch, covering web and mobile development, backend,  infrastructures and deployment",
    moreClass: "",
    flexType: "flex-col",
    shape: Image3
  },
  {
    id: "consultancy",
    headingLines: "4. Consultancy",
    description:
      "Uncover the real causes behind operational issues, not just their symptoms. We run a full diagnostic—mapping your processes, identifying bottlenecks and dependencies, and pinpointing root causes—then deliver a clear, prioritised redesign roadmap before any code is written.",
    moreClass: "lg:col-span-1",
    flexType: "flex-col",
    image_class: "",
    shape: Image4
  },
];



export const service_data = [
  {
    id: "automation",
    service_number: 1,
    service_title: "Intelligent Automation",
    what_changes: [
      "Eliminated manual approval and routing logic.",
      "Automated reconciliation and exception handling.",
      "Scheduled reporting without human assembly.",
      "Scales with transaction volume without additional headcount.",
    ],
    intro_statement: "Every manual handoff in your workflow is a latency source and a failure point.",
    service_description: [
      "Automation is the elimination of deterministic, rule-based tasks from human workflows. approval routing that follows defined logic, reconciliation that compares structured data sets, reporting that aggregates from known sources on a schedule. ",
      "We identify the workflow dependencies generating unnecessary latency and human error exposure, redesign the process logic, and implement the automation layer. Not a wrapper on a broken process. The correct process, automated correctly."
    ],
    end_statement: "Deterministic work belongs to the system. Human capacity belongs to the problems that need it.",
    service_project: [
      {
        project_image: "/images/others/placeholder.png",
        project_name: "Kisumu Water and Sanitation Company",
        project_description: "Podii recovered more than KES 10 million in annual billing...",
        project_link: "#",
        project_status: "Coming Soon"
      }
    ]
  },
  {
    id: "digitization",
    service_number: 2,
    service_title: "Digital Transformation",
    what_changes: [
      "Real-time operational visibility.",
      "Eliminated manual reconciliation steps.",
      "Correct data model for current transaction volumes.",
      "System your team owns and extends without external support.",
    ],
    intro_statement: "Your operational architecture has outgrown the processes running on top of it.",
    service_description: [
      "Digitisation is the re-engineering of a workflow for the approval complexity, data volumes, and integration requirements of the business today. We map the current process flows, identify the steps that exist only because the original design was paper-based, and rebuild the underlying logic — with the correct data model, the right system boundaries, and audit trails that actually work.",
    ],
    end_statement: "From fragile process flows to production-grade operational infrastructure.",
    service_project: [
      {
        project_image: "/images/others/placeholder.png",
        project_name: "Vibrant Village Foundation: Platform Integration",
        project_description: "Built three integrated program management systems enabling Vibrant Village...",
        project_link: "#",
        project_status: "Coming Soon"
      },
    ]
  },
  {
    id: "software",
    service_number: 3,
    service_title: "End-to-End Software Product Development",
    what_changes: [
      "Correct data model and schema design.",
      "Integrates your existing systems via API.",
      "Audit trail and reporting built in.",
      "Full technical documentation and handover.",
      "Your team owns the codebase."
    ],
    intro_statement: "Off-the-shelf platforms are built for the median operation. Yours is not median.",
    service_description: [
      "When the data model, workflow logic, or integration requirements of your operation do not fit a standard platform — and the workarounds your team has built to compensate are now generating more friction than the original problem — the answer is a purpose-built system. ",
      "We design and build custom software against your actual operational requirements: the correct schema, the right API surface, the integration architecture that talks to your existing stack, and the documentation that lets your team maintain and extend it.",
    ],
    end_statement: "Purpose-built to your operational specification. Owned entirely by your team.",
    service_project: [
      {
        project_image: "/images/others/placeholder.png",
        project_name: "Vibrant Village Foundation: Platform Integration",
        project_description: "Built three integrated program management systems enabling Vibrant Village...",
        project_link: "#",
        project_status: "Coming Soon"
      },
    ]
  },
  {
    id: "consultancy",
    service_number: 4,
    service_title: "Consultancy",
    what_changes: [
      "Documented process flow mapping and bottleneck analysis.",
      "Root cause identification.",
      "Prioritised redesign roadmap.",
      "Build specification ready for engineering.",
      "Risk surfaced before cost is committed.",
    ],
    intro_statement: "Before you build anything — diagnose correctly.",
    service_description: [
      "Most operational failures are not where the presenting symptom appears. Slow approvals are usually a workflow routing problem upstream. Reconciliation errors are usually a data model fragmentation problem at the source. Manual reporting is usually an integration gap masquerading as a reporting problem. ",
      "We run a full operational diagnostic: process flow mapping, bottleneck analysis, dependency identification, and root cause assessment — then produce a prioritised redesign roadmap before a line of code is written. Most of our clients move from consultancy directly into a build engagement. Some come having already built the wrong thing and need to understand why.",
    ],
    end_statement: "Diagnose the architecture before you build on it.",
    service_project: [
      {
        project_image: "/images/others/placeholder.png",
        project_name: "Kisumu Water and Sanitation Company",
        project_description: "Podii recovered more than KES 10 million in annual billing...",
        project_link: "#",
        project_status: "Coming Soon"
      }
    ]
  },
];