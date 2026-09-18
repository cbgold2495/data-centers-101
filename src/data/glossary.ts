export interface GlossaryTerm {
  term: string;
  def: string;
}

export interface GlossaryCategory {
  id: string;
  title: string;
  terms: GlossaryTerm[];
}

export const glossaryCategories: GlossaryCategory[] = [
  {
    id: 'physical-infrastructure',
    title: 'Physical infrastructure',
    terms: [
      { term: 'Colocation ("colo")', def: 'A data center owned by a specialist landlord where other companies rent space and bring their own hardware.' },
      { term: 'Data center', def: 'A purpose-built facility providing space, power, cooling, and networking for servers.' },
      { term: 'Edge / micro data center', def: 'A small, distributed facility placed close to end users to reduce latency.' },
      { term: 'Hyperscale data center', def: "A very large facility (often 100+ MW) built to support a single large cloud operator's regional footprint." },
      { term: 'Megawatt (MW)', def: "The standard unit for measuring a data center's power capacity, and shorthand for its scale." },
      { term: 'Powered shell', def: 'Raw data center space with power and cooling already built in, but no servers — the "empty building" a tenant fits out themselves.' },
      { term: 'PUE (Power Usage Effectiveness)', def: "A ratio measuring how much of a data center's total power draw goes to computing vs. overhead like cooling; closer to 1.0 is more efficient." },
      { term: 'Single-tenant vs. multi-tenant', def: "Whether a facility (or cluster) is built for one customer's exclusive use, or shared across many customers." },
      { term: 'Wholesale lease', def: 'A long-term contract for a large, dedicated block of data center capacity (as opposed to renting a few server cabinets).' },
    ],
  },
  {
    id: 'compute-cloud-model',
    title: 'Compute & cloud model',
    terms: [
      { term: 'Aggregator / marketplace', def: 'A platform that resells idle GPU capacity from third parties rather than owning hardware itself.' },
      { term: 'Bare metal', def: 'Direct access to physical hardware, without a virtualization layer in between.' },
      { term: 'GPU-hour', def: 'A billing unit representing one GPU running for one hour; the basic currency of compute pricing.' },
      { term: 'Hyperscaler', def: 'A large, general-purpose cloud provider (AWS, Azure, Google Cloud) offering hundreds of services, of which GPU compute is one.' },
      { term: 'Inference cloud', def: 'A managed layer that sells access to AI models via API (by the token), rather than selling raw compute by the GPU-hour.' },
      { term: 'Neocloud', def: 'An AI-focused cloud provider built specifically to sell GPU compute, without the broad general-purpose service catalog of a hyperscaler.' },
      { term: 'Vertically integrated', def: 'A company that controls multiple layers of its supply chain itself (e.g. energy sourcing, data-center construction, and GPU deployment) rather than relying on outside vendors for each.' },
    ],
  },
  {
    id: 'compute-architecture',
    title: 'Compute architecture',
    terms: [
      { term: 'Cluster', def: 'A group of separate servers ("nodes") networked together to work as one system on a shared task.' },
      { term: 'GPU (Graphics Processing Unit)', def: 'A chip originally built for rendering graphics, now the standard hardware for training and running AI models because of its ability to do many calculations in parallel.' },
      { term: 'HBM (High Bandwidth Memory)', def: "The chip's short-term memory, stacked directly onto the GPU package so data can move in and out extremely fast; a bigger/faster HBM generation (e.g. HBM3 → HBM3e) lets a GPU hold more of a model at once, often mattering as much as raw compute power." },
      { term: 'Interconnect / fabric', def: 'The high-speed networking that connects nodes in a cluster (e.g. InfiniBand); its speed often limits how fast a cluster can train a model.' },
      { term: 'Node', def: 'A single machine within a cluster, typically a server holding multiple GPUs.' },
      { term: 'TPU (Tensor Processing Unit)', def: "Google's custom-built chip designed specifically for AI workloads, as an alternative to GPUs." },
    ],
  },
  {
    id: 'ai-model-terms',
    title: 'AI / model terms',
    terms: [
      { term: 'Inference', def: 'Running an already-trained model to generate an output (e.g. answering a prompt); typically far less compute-intensive per request than training, but done far more often.' },
      { term: 'Quantization', def: 'Running a model at lower numerical precision (e.g. 16-bit down to 4-bit) to cut compute cost and increase speed, at a small accuracy tradeoff.' },
      { term: 'Reasoning / thinking tokens', def: 'Hidden intermediate steps some models generate internally before producing a final answer; typically billed as output tokens even though the user never sees them.' },
      { term: 'Token', def: 'The basic unit of text a language model reads and generates (roughly a word or word-fragment); usage and pricing for inference are typically measured in tokens.' },
      { term: 'Training', def: "The process of teaching a model by having it process massive datasets, adjusting its internal parameters; the most compute-intensive phase." },
    ],
  },
  {
    id: 'supply-chain',
    title: 'Supply chain',
    terms: [
      { term: 'CoWoS (advanced packaging)', def: "TSMC's process for bonding a finished chip together with its HBM memory into one package; a major bottleneck in chip supply alongside the memory itself." },
      { term: 'EUV lithography (Extreme Ultraviolet)', def: 'The manufacturing technique used to etch the finest details onto the most advanced chips; the machines that do this are made by only one company in the world (ASML).' },
      { term: 'Export controls', def: "Government restrictions on selling certain advanced chips (or the equipment to make them) to specific countries, primarily used by the U.S. to limit China's access to frontier AI chips." },
      { term: 'Fab (fabrication plant)', def: "The factory where chip designs are physically manufactured onto silicon wafers." },
      { term: 'Fabless', def: "A chip company (like NVIDIA or AMD) that designs chips but doesn't own the factories that manufacture them." },
    ],
  },
  {
    id: 'financial-terms',
    title: 'Financial terms',
    terms: [
      { term: 'Bankruptcy-remote vehicle', def: "A separate legal entity holding specific assets (like GPUs and contracts) so that, if the parent company goes bankrupt, those assets aren't part of the bankruptcy — makes the debt safer for lenders than lending to the parent company directly." },
      { term: 'Capex (capital expenditure)', def: 'Upfront spending on physical assets like data centers and GPUs.' },
      { term: 'Circular deal', def: "An arrangement where two or more companies invest in, lend to, or buy from each other in a loop, in a way that makes both sides' apparent revenue or demand look larger and more independent than it really is." },
      { term: 'Opex (operating expenditure)', def: 'Ongoing costs of running the business, like power, staff, and leases.' },
      { term: 'Power purchase agreement (PPA)', def: 'A long-term contract (often 10-20+ years) locking in electricity from a specific power plant, bypassing the public grid queue.' },
      { term: 'Project-level debt', def: "A loan borrowed against one specific project's contracted revenue, rather than the whole company's balance sheet — lets a risky borrower still get affordable financing if the project itself has reliable customers locked in." },
      { term: 'Vendor financing', def: 'When a supplier lends money to (or invests in) its own customers so they can afford to buy more from that same supplier.' },
    ],
  },
];
