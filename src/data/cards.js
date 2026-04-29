
import Image1 from "../assets/images/illustrations/automation.svg"
import Image2 from "../assets/images/illustrations/digital.svg"
import Image3 from "../assets/images/illustrations/dev.svg"
import Image4 from "../assets/images/illustrations/consultancy.svg"

export const cards = [
  {
    id: "automation",
    headingLines: "1] Intelligent Automation",
    description:
      "Automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into your existing systems, without  changing what already works.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image1
  },
  {
    id: "digitization",
    headingLines: "2] Digital Transformation",
    description:
      "Replace manual workflows like spreadsheets, paperwork, emails,  and disconnected tools with structured digital systems, designed around  how your business actually operates.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image2
  },
  {
    id: "software",
    headingLines: "3] End-to-End Software Product Development",
    description:
      "Turn your idea into a fully functional software system, from  design to launch, covering web and mobile development, backend,  infrastructures and deployment",
    moreClass: "",
    flexType: "flex-col",
    shape: Image3
  },
  {
    id: "consultancy",
    headingLines: "4] Consultancy",
    description:
      "Uncover the real causes behind operational issues, not just their symptoms. We run a full diagnostic—mapping your processes, identifying bottlenecks and dependencies, and pinpointing root causes—then deliver a clear, prioritised redesign roadmap before any code is written.",
    moreClass: "col-span-2",
    flexType: "flex-row gap-10 items-start",
    image_class: "lg:w-250",
    shape: Image4
  },
];
