export const caseStudies = [
  {
    id: "finance-reconciliation",
    sector: "Finance Operations",
    before:
      "A finance team ran manual reconciliation every Monday. Four people spent three to four hours each cycle across ERP, payments, and bank feeds.",
    rootCause:
      "No integration layer between source systems. Reconciliation logic lived in human memory, not in structured system rules.",
    built:
      "An integration layer connecting all three data sources, automated reconciliation rules, and exception routing for ambiguous records only.",
    after: "7 minutes per cycle, zero routine human effort, and 100% scheduled execution since go-live.",
    metric: "7 min",
    metricLabel: "Reconciliation runtime"
  },
  {
    id: "approval-routing",
    sector: "Multi-Branch Operations",
    before:
      "Approval requests were routed through one shared inbox. SLA breaches increased as volume grew, and escalation depended on who was online.",
    rootCause:
      "Workflow dependencies were implicit and person-dependent, with no deterministic routing model or ownership boundaries.",
    built:
      "Rule-based routing by request type, threshold, and department with timed escalations and a full audit trail.",
    after: "Approval cycle time dropped by 81% while maintaining policy compliance and reducing manual follow-up.",
    metric: "81%",
    metricLabel: "Faster approval cycle"
  },
  {
    id: "reporting-assembly",
    sector: "Executive Reporting",
    before:
      "Operations reporting was assembled manually from five disconnected tools, consuming two analysts every week and producing inconsistent snapshots.",
    rootCause:
      "Fragmented data model and no reporting integration architecture between transactional and analytics systems.",
    built:
      "Unified reporting pipeline with scheduled aggregation, validation checks, and role-specific dashboard outputs.",
    after: "Weekly reporting moved from half a day of manual assembly to fully automated delivery before business hours.",
    metric: "0.5 day → 0",
    metricLabel: "Manual reporting work"
  }
];
