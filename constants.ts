import { Difficulty, Section } from './types';

// Helper for deep-dive study content - Optimized for Hindi/Indian Context
const getYoutubeLink = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " in hindi gate smashers jenny's lectures 5 minutes engineering code with harry")}`;

export const TOPICS = [
  // --- SECTION B (Computer Science) ---
  {
    id: "b-cprog",
    name: "C Programming",
    subtopics: "Pointers, Arrays, Strings, Structure padding, Unions, File Handling, Bitwise Operators, Command Line Arguments, Storage Classes.",
    section: Section.B,
    difficulty: Difficulty.Medium,
    videoLink: "",
    isCompleted: true, 
    notes: "Already completed."
  },
  {
    id: "b-ds-1",
    name: "DS: Linked Lists & Arrays",
    subtopics: "Row/Col Major mapping, Singly LL, Doubly LL, Circular LL, Polynomial addition using LL, Sparse Matrices.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("linked list array representation data structures"),
    isCompleted: false
  },
  {
    id: "b-ds-2",
    name: "DS: Stacks & Queues",
    subtopics: "Infix to Postfix/Prefix conversion, Evaluation of Postfix, Recursion (Tower of Hanoi), Circular Queue, Priority Queue, Deque.",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 200,
    videoLink: getYoutubeLink("stack queue data structures applications"),
    isCompleted: false
  },
  {
    id: "b-ds-3",
    name: "DS: Trees (Binary & BST)",
    subtopics: "Binary Tree Properties, Full/Complete BT, Traversals (Inorder, Preorder, Postorder - Recursive & Iterative), BST Insertion/Deletion/Search.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 300,
    videoLink: getYoutubeLink("binary tree binary search tree traversals"),
    isCompleted: false
  },
  {
    id: "b-ds-4",
    name: "DS: Advanced Trees & Heaps",
    subtopics: "AVL Trees (LL, RR, LR, RL Rotations), B-Trees (Insertion/Deletion basics), Max Heap, Min Heap, Heap Sort, Priority Queue impl.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 300,
    videoLink: getYoutubeLink("avl tree heap sort data structures"),
    isCompleted: false
  },
  {
    id: "b-ds-5",
    name: "DS: Graphs & Hashing",
    subtopics: "Adjacency Matrix vs List, BFS, DFS, Topological Sort, Spanning Trees (Prim's, Kruskal's), Dijkstra's, Hashing (Chaining, Open Addressing).",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 300,
    videoLink: getYoutubeLink("graph algorithms bfs dfs dijkstra prim kruskal"),
    isCompleted: false
  },
  {
    id: "b-algo-1",
    name: "Algorithms: Sorting & Searching",
    subtopics: "Bubble, Selection, Insertion, Quick Sort (Partitioning), Merge Sort, Linear vs Binary Search, Time Complexity Analysis (Master Theorem).",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("sorting algorithms time complexity analysis"),
    isCompleted: false
  },
  {
    id: "b-os-1",
    name: "OS: Process Management",
    subtopics: "OS Types, System Calls, Process States Diagram, PCB, Context Switching, Fork() system call, Threads (User vs Kernel).",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 200,
    videoLink: getYoutubeLink("operating system process management system calls"),
    isCompleted: false
  },
  {
    id: "b-os-2",
    name: "OS: CPU Scheduling",
    subtopics: "Preemptive vs Non-Preemptive, FCFS, SJF (Preemptive/Non), Round Robin (Time Quantum), Priority Scheduling, Multilevel Queue.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("cpu scheduling algorithms operating system"),
    isCompleted: false
  },
  {
    id: "b-os-3",
    name: "OS: Synchronization",
    subtopics: "Critical Section Problem, Race Condition, Peterson's Solution, Semaphores (Binary/Counting), Mutex, Producer-Consumer Problem, Dining Philosophers.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 260,
    videoLink: getYoutubeLink("process synchronization semaphores operating system"),
    isCompleted: false
  },
  {
    id: "b-os-4",
    name: "OS: Deadlocks",
    subtopics: "Necessary Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait), Prevention, Avoidance (Banker's Algo), Detection, Recovery.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 200,
    videoLink: getYoutubeLink("deadlock operating system banker algorithm"),
    isCompleted: false
  },
  {
    id: "b-os-5",
    name: "OS: Memory Management",
    subtopics: "Logical vs Physical Address, Swapping, Contiguous Allocation, Fragmentation, Paging (Page Table, TLB), Segmentation.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 260,
    videoLink: getYoutubeLink("memory management paging segmentation operating system"),
    isCompleted: false
  },
  {
    id: "b-os-6",
    name: "OS: Virtual Memory & Disk",
    subtopics: "Demand Paging, Page Faults, Page Replacement Algos (FIFO, Optimal, LRU), Thrashing, Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN).",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 220,
    videoLink: getYoutubeLink("virtual memory page replacement algorithms disk scheduling"),
    isCompleted: false
  },
  {
    id: "b-cpp-1",
    name: "C++: OOP Fundamentals",
    subtopics: "Class & Objects, Access Specifiers, Static Data Members/Functions, Constructors (Default, Param, Copy), Destructors, Array of Objects.",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("c++ oops concepts constructors destructors"),
    isCompleted: false
  },
  {
    id: "b-cpp-2",
    name: "C++: Advanced Features",
    subtopics: "Friend Functions, 'this' Pointer, Operator Overloading (Unary/Binary), Function Overloading, Inline Functions, References.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 220,
    videoLink: getYoutubeLink("operator overloading friend function c++"),
    isCompleted: false
  },
  {
    id: "b-cpp-3",
    name: "C++: Inheritance & Poly",
    subtopics: "Types of Inheritance, Ambiguity Resolution, Virtual Base Class, Run-time Polymorphism, Virtual Functions, Pure Virtual Functions, Abstract Class.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("inheritance polymorphism virtual functions c++"),
    isCompleted: false
  },
  {
    id: "b-cpp-4",
    name: "C++: Templates & Exception",
    subtopics: "Function Templates, Class Templates, Exception Handling (try, catch, throw), File I/O basic classes, Namespaces.",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("templates exception handling c++"),
    isCompleted: false
  },
  {
    id: "b-net-1",
    name: "Net: Physical & Models",
    subtopics: "OSI Model (7 Layers detailed functions), TCP/IP Model, Topologies (Mesh, Star, Bus, Ring), Transmission Modes, Guided Media (Twisted pair, Coax, Fiber).",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("osi model tcp ip model computer networks"),
    isCompleted: false
  },
  {
    id: "b-net-2",
    name: "Net: Data Link Layer",
    subtopics: "Framing, Error Detection (Parity, CRC, Checksum), Flow Control (Stop & Wait, Sliding Window - GoBackN, Selective Repeat), Switching (Circuit, Packet).",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("data link layer flow control error control"),
    isCompleted: false
  },
  {
    id: "b-net-3",
    name: "Net: IP Addressing",
    subtopics: "IPv4 Header format, Classful Addressing (A,B,C,D,E), Subnetting, Subnet Mask, Default Gateway, CIDR (Classless Inter-Domain Routing).",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 300,
    videoLink: getYoutubeLink("ip addressing subnetting computer networks"),
    isCompleted: false
  },
  {
    id: "b-net-4",
    name: "Net: Network Layer Routing",
    subtopics: "Routing Protocols (Static vs Dynamic), Distance Vector (RIP), Link State (OSPF), Dijkstra's Algorithm, ARP, RARP, ICMP, NAT.",
    section: Section.B,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 240,
    videoLink: getYoutubeLink("routing algorithms ospf rip computer networks"),
    isCompleted: false
  },
  {
    id: "b-net-5",
    name: "Net: Transport & App Layer",
    subtopics: "TCP Header, UDP Header, Three-way Handshake, Flow Control, Congestion Control, HTTP, FTP, SMTP, DNS, DHCP.",
    section: Section.B,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 220,
    videoLink: getYoutubeLink("transport layer tcp udp protocols"),
    isCompleted: false
  },

  // --- SECTION A (Aptitude/English) ---
  {
    id: "a-quant-1",
    name: "Quant: Number System",
    subtopics: "Divisibility Rules, Unit Digit, Remainder Theorem, HCF & LCM, Surds & Indices, Simplification.",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 150,
    videoLink: getYoutubeLink("number system aptitude"),
    isCompleted: false
  },
  {
    id: "a-quant-2",
    name: "Quant: Arithmetic Core I",
    subtopics: "Percentage, Profit & Loss, Discount, Simple Interest, Compound Interest (Difference formulas).",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 150,
    videoLink: getYoutubeLink("profit loss simple compound interest aptitude"),
    isCompleted: false
  },
  {
    id: "a-quant-3",
    name: "Quant: Arithmetic Core II",
    subtopics: "Ratio & Proportion, Mixtures & Alligations, Averages, Ages, Partnerships.",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 120,
    videoLink: getYoutubeLink("ratio proportion mixtures alligation aptitude"),
    isCompleted: false
  },
  {
    id: "a-quant-4",
    name: "Quant: Speed & Time",
    subtopics: "Time & Work, Chain Rule, Pipes & Cisterns, Time Speed Distance, Problems on Trains, Boats & Streams.",
    section: Section.A,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("time speed distance time work aptitude"),
    isCompleted: false
  },
  {
    id: "a-quant-5",
    name: "Quant: Modern Math",
    subtopics: "Permutations & Combinations, Probability (Coins, Dice, Cards, Balls), Mensuration 2D (Area/Perimeter) & 3D (Volume/SA).",
    section: Section.A,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("probability permutation combination mensuration aptitude"),
    isCompleted: false
  },
  {
    id: "a-log-1",
    name: "Reasoning: Logic Basics",
    subtopics: "Number Series, Letter Series, Coding-Decoding, Odd Man Out, Analogies.",
    section: Section.A,
    difficulty: Difficulty.Easy,
    estimatedMinutes: 120,
    videoLink: getYoutubeLink("reasoning series coding decoding"),
    isCompleted: false
  },
  {
    id: "a-log-2",
    name: "Reasoning: Spatial & Relations",
    subtopics: "Blood Relations, Direction Sense Test, Seating Arrangement (Linear/Circular), Ordering & Ranking.",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 150,
    videoLink: getYoutubeLink("blood relation direction sense seating arrangement"),
    isCompleted: false
  },
  {
    id: "a-log-3",
    name: "Reasoning: Analytics",
    subtopics: "Syllogisms (Venn Diagrams), Puzzles, Data Sufficiency, Clocks & Calendars.",
    section: Section.A,
    difficulty: Difficulty.Hard,
    estimatedMinutes: 180,
    videoLink: getYoutubeLink("syllogism clocks calendars reasoning"),
    isCompleted: false
  },
  {
    id: "a-eng-1",
    name: "English: Grammar Basics",
    subtopics: "Tenses, Articles, Prepositions, Subject-Verb Agreement, Active & Passive Voice.",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 90,
    videoLink: getYoutubeLink("english grammar for competitive exams"),
    isCompleted: false
  },
  {
    id: "a-eng-2",
    name: "English: Vocabulary",
    subtopics: "Synonyms, Antonyms, One Word Substitution, Idioms & Phrases, Spelling Correction.",
    section: Section.A,
    difficulty: Difficulty.Easy,
    estimatedMinutes: 90,
    videoLink: getYoutubeLink("english vocabulary idioms phrases"),
    isCompleted: false
  },
  {
    id: "a-eng-3",
    name: "English: Comprehension",
    subtopics: "Reading Comprehension, Para Jumbles (Sentence Rearrangement), Spotting Errors, Cloze Test.",
    section: Section.A,
    difficulty: Difficulty.Medium,
    estimatedMinutes: 120,
    videoLink: getYoutubeLink("reading comprehension para jumbles"),
    isCompleted: false
  }
];

// Schedule: 3 Dec to 31 Dec
// Break: 13-17 Dec
export const SCHEDULE = [
  // --- WEEK 1: DS & QUANT BASICS ---
  { date: "03 Dec", dayOfWeek: "Tue", isBreak: false, topicBId: "b-ds-1", topicAId: "a-quant-1", priorityNote: "Master Pointers in C & Number Systems" },
  { date: "04 Dec", dayOfWeek: "Wed", isBreak: false, topicBId: "b-ds-2", topicAId: "a-quant-2", priorityNote: "Stack/Queue Visualization & Profit/Loss" },
  { date: "05 Dec", dayOfWeek: "Thu", isBreak: false, topicBId: "b-ds-3", topicAId: "a-quant-3", priorityNote: "Recursion in Trees & Ratios" },
  { date: "06 Dec", dayOfWeek: "Fri", isBreak: false, topicBId: "b-ds-4", topicAId: "a-log-1", priorityNote: "Heap Properties & Series Logic" },
  { date: "07 Dec", dayOfWeek: "Sat", isBreak: false, topicBId: "b-ds-5", topicAId: "a-log-2", priorityNote: "Graph Traversals & Blood Relations" },
  { date: "08 Dec", dayOfWeek: "Sun", isBreak: false, topicBId: "b-algo-1", topicAId: "a-eng-1", priorityNote: "Sorting Complexities & Grammar" },
  
  // --- WEEK 2: OS CORE ---
  { date: "09 Dec", dayOfWeek: "Mon", isBreak: false, topicBId: "b-os-1", topicAId: "a-quant-4", priorityNote: "System Calls & Time/Work" },
  { date: "10 Dec", dayOfWeek: "Tue", isBreak: false, topicBId: "b-os-2", topicAId: "a-quant-4", priorityNote: "Scheduling Algorithms & TSD" },
  { date: "11 Dec", dayOfWeek: "Wed", isBreak: false, topicBId: "b-os-3", topicAId: "a-log-3", priorityNote: "Semaphores/Mutex & Syllogisms" },
  { date: "12 Dec", dayOfWeek: "Thu", isBreak: false, topicBId: "b-os-4", topicAId: "a-eng-2", priorityNote: "Deadlock Prevention & Vocab" },

  // --- BREAK (13-17 DEC) ---
  { date: "13 Dec", dayOfWeek: "Fri", isBreak: true, priorityNote: "Break: Rest & Recover" },
  { date: "14 Dec", dayOfWeek: "Sat", isBreak: true, priorityNote: "Break: Rest & Recover" },
  { date: "15 Dec", dayOfWeek: "Sun", isBreak: true, priorityNote: "Break: Rest & Recover" },
  { date: "16 Dec", dayOfWeek: "Mon", isBreak: true, priorityNote: "Break: Rest & Recover" },
  { date: "17 Dec", dayOfWeek: "Tue", isBreak: true, priorityNote: "Break: Rest & Recover" },

  // --- WEEK 3: OS ADVANCED & C++ ---
  { date: "18 Dec", dayOfWeek: "Wed", isBreak: false, topicBId: "b-os-5", topicAId: "a-eng-3", priorityNote: "Paging/Segmentation & RC" },
  { date: "19 Dec", dayOfWeek: "Thu", isBreak: false, topicBId: "b-os-6", topicAId: "a-quant-5", priorityNote: "Page Replacement & Probability" },
  { date: "20 Dec", dayOfWeek: "Fri", isBreak: false, topicBId: "b-cpp-1", topicAId: "a-quant-5", priorityNote: "Constructors & Mensuration" },
  { date: "21 Dec", dayOfWeek: "Sat", isBreak: false, topicBId: "b-cpp-2", topicAId: "a-log-1", priorityNote: "Operator Overloading & Coding" },
  { date: "22 Dec", dayOfWeek: "Sun", isBreak: false, topicBId: "b-cpp-3", topicAId: "a-log-2", priorityNote: "Polymorphism & Puzzles" },
  
  // --- WEEK 4: NETWORKING & REVIEW ---
  { date: "23 Dec", dayOfWeek: "Mon", isBreak: false, topicBId: "b-cpp-4", topicAId: "a-quant-1", priorityNote: "Templates & Number System Review" },
  { date: "24 Dec", dayOfWeek: "Tue", isBreak: false, topicBId: "b-net-1", topicAId: "a-quant-2", priorityNote: "OSI Layers & Profit/Loss Review" },
  { date: "25 Dec", dayOfWeek: "Wed", isBreak: false, topicBId: "b-net-2", topicAId: "a-quant-3", priorityNote: "Error Control & Averages Review" },
  { date: "26 Dec", dayOfWeek: "Thu", isBreak: false, topicBId: "b-net-3", topicAId: "a-quant-4", priorityNote: "Subnetting & Time/Work Review" },
  { date: "27 Dec", dayOfWeek: "Fri", isBreak: false, topicBId: "b-net-4", topicAId: "a-log-3", priorityNote: "Routing Algos & Logic Review" },
  { date: "28 Dec", dayOfWeek: "Sat", isBreak: false, topicBId: "b-net-5", topicAId: "a-eng-1", priorityNote: "TCP/UDP & Grammar Review" },
  
  // --- FINAL PUSH ---
  { date: "29 Dec", dayOfWeek: "Sun", isBreak: false, topicBId: "b-ds-5", topicAId: "a-eng-2", priorityNote: "Graph Algos Revisit & Vocab" },
  { date: "30 Dec", dayOfWeek: "Mon", isBreak: false, topicBId: "b-os-3", topicAId: "a-eng-3", priorityNote: "Synchronization Revisit & RC" },
  { date: "31 Dec", dayOfWeek: "Tue", isBreak: false, topicBId: "b-net-3", topicAId: "a-quant-5", priorityNote: "IP Addressing Revisit & Formulas" },
];