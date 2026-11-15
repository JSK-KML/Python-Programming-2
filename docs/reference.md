---
outline: deep
title: Components & Formatting Reference
---

# Components & Formatting Reference

Reference page only. It is not linked from the navbar or sidebar. Everything here is copied from the bio-matrikulasi guide (Components, Equations & formatting, Timeline styles). Each example shows the result, followed by the markdown that produces it.

::: info Badges on this site
The coloured pill badge is called `<UiBadge>` here, so VitePress's own `<Badge type="warning" text="Task" />` used in the labs keeps working.
:::

## Lab Layout (sample)

How lab instructions are written: no boxes around them. A section is a verb heading, then instruction lines (arrow in the margin, slightly heavier text), then the code box. Terminal code boxes show the command and what comes back; the copy button copies only the commands.

### Create Your Course Folder

Run these in Git Bash: {.do}

```console
$ cd ~
$ mkdir YOURNAME-CP125
$ cd YOURNAME-CP125
$ pwd
/c/Users/you/YOURNAME-CP125
```

| Command | What it does |
|---|---|
| `cd ~` | Go to your home folder |
| `mkdir NAME` | Make a new folder called `NAME` |
| `cd NAME` | Go into the folder `NAME` |
| `pwd` | Print the folder you are in now |

### Fork the Class Repository

Open the [`CP125-Class-Repo`](https://github.com/JSK-KML/CP125-Class-Repo) on GitHub, click `Fork`, then `Create fork`. {.do}

*The page now shows GITHUB-USERNAME/CP125-Class-Repo.*

### Make Your First Commit

Create a small file and run it: {.do}

```console
$ echo 'print("Hello, CP125")' > labs/lab01/hello.py
$ python labs/lab01/hello.py
Hello, CP125
```

Commit it and send it to GitHub: {.do}

```console
$ git add labs/lab01/hello.py
$ git commit -m "Add hello.py"
$ git push
...
   a1b2c3d..e4f5a6b  main -> main
```

::: tip
Tips, warnings and danger notes keep their usual style.
:::

### How to write it

````md
Run these in Git Bash: {.do}

```console
$ cd ~
$ mkdir YOURNAME-CP125
$ pwd
/c/Users/you/YOURNAME-CP125
```

Open the CP125-Class-Repo on GitHub and click `Fork`. {.do}

*The page now shows GITHUB-USERNAME/CP125-Class-Repo.*
````

- End an instruction line with `{.do}` to give it the margin arrow.
- Use ` ```console ` for terminal blocks: commands start with `$ `, output lines don't.
- A result that isn't terminal output goes in one italic line under the instruction.

## Components

Ready-made building blocks you can drop into any page. Each example below shows the result, followed by the markdown that produces it.

### Accordion

Good for tutorial answers, FAQs, or anything students should reveal on demand.

<Accordion>
<AccordionItem title="What is the function of the mitochondria?">

The mitochondria carry out **aerobic respiration**, producing ATP for the cell.

</AccordionItem>
<AccordionItem title="Why do plant cells have a cell wall?">

The cellulose cell wall gives structural support and prevents the cell from bursting in hypotonic solutions.

</AccordionItem>
</Accordion>

```md
<Accordion>
<AccordionItem title="What is the function of the mitochondria?">

The mitochondria carry out **aerobic respiration**, producing ATP for the cell.

</AccordionItem>
</Accordion>
```

Add `:multiple="false"` to `<Accordion>` so only one panel stays open at a time.

### Tabs

Compare related content side by side without a long page.

<Tabs label="Cell types">
<Tab label="Prokaryotic">

- No nucleus; DNA lies in the nucleoid
- 70S ribosomes
- e.g. bacteria

</Tab>
<Tab label="Eukaryotic">

- Membrane-bound nucleus
- 80S ribosomes in the cytoplasm
- e.g. plants, animals, fungi

</Tab>
</Tabs>

```md
<Tabs label="Cell types">
<Tab label="Prokaryotic">

- No nucleus; DNA lies in the nucleoid

</Tab>
<Tab label="Eukaryotic">

- Membrane-bound nucleus

</Tab>
</Tabs>
```

### Term

Hover or focus a word to see its definition: the <Term def="Organelle where aerobic respiration takes place, producing ATP.">mitochondrion</Term> is the site of respiration, and the <Term title="Ribosome" def="Site of protein synthesis; made of rRNA and protein.">ribosome</Term> builds proteins.

```md
the <Term def="Organelle where aerobic respiration takes place.">mitochondrion</Term>
<Term title="Ribosome" def="Site of protein synthesis.">ribosome</Term>
```

### Badge

Small labels for status or category: <UiBadge text="Chapter 1" /> <UiBadge type="blue" text="Lab" /> <UiBadge type="yellow" text="Due soon" /> <UiBadge type="red" text="Exam" /> <UiBadge type="gray" text="Optional" />

```md
<UiBadge text="Chapter 1" /> <UiBadge type="yellow" text="Due soon" />
```

Types: `green` (default), `blue`, `yellow`, `red`, `gray`.

### Link cards

Navigation cards for section overviews.

<CardGrid>
  <LinkCard tag="Chapter 1" title="Lecture notes" details="Start with the first chapter." link="/lectures/chapter-01" />
  <LinkCard tag="Tutorial 1" title="Practice problems" details="Questions for chapter 1." link="/tutorials/chapter-functions-tutorial-1" />
  <LinkCard tag="Lab 1" title="Lab guide" details="Practical session one." link="/labs/lab-01" />
</CardGrid>

```md
<CardGrid>
  <LinkCard tag="Chapter 1" title="Lecture notes" details="Start with the first chapter." link="/lectures/chapter-01" />
</CardGrid>
```

### Timeline

For schedules and deadlines. Items slide in as you scroll; `done` fills the dot.

<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Lecture: Chapter 1

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure">

Tutorial 1 · Lab 1

</TimelineItem>
<TimelineItem date="Week 3" title="Quiz 1">

Covers chapters 1 and 2.

</TimelineItem>
</Timeline>

```md
<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Lecture: Chapter 1

</TimelineItem>
</Timeline>
```

### Checklist

<Checklist title="Before the lab" color="green">

- Read the lab guide
- Bring your lab coat and goggles

</Checklist>

```md
<Checklist title="Before the lab" color="green">

- Read the lab guide

</Checklist>
```

Colors: `green`, `blue`, `yellow`, `pink`.

### Quiz

A self-check multiple-choice question. `answer` is the index of the correct option, starting from 0.

<Quiz
  question="Which organelle is the main site of aerobic respiration?"
  :options="['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome']"
  :answer="1"
  explain="The Krebs cycle and oxidative phosphorylation take place in the mitochondrion."
/>

```md
<Quiz
  question="Which organelle is the main site of aerobic respiration?"
  :options="['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome']"
  :answer="1"
  explain="The Krebs cycle and oxidative phosphorylation take place in the mitochondrion."
/>
```

### Flashcards

Click a card (or press Space) to flip it. Use the arrows or ← → keys to move between cards.

<Flashcards :cards="[
  { front: 'What is osmosis?', back: 'Net movement of water molecules across a partially permeable membrane, from a region of higher water potential to lower water potential.' },
  { front: 'Name the monomer of proteins.', back: 'Amino acids' },
  { front: 'Where does the light-dependent reaction occur?', back: 'Thylakoid membranes of the chloroplast' }
]" />

```md
<Flashcards :cards="[
  { front: 'What is osmosis?', back: 'Net movement of water ...' },
  { front: 'Name the monomer of proteins.', back: 'Amino acids' }
]" />
```

### Steps

Turns a numbered list into a procedure. Good for lab methods.

<Steps>

1. **Prepare the slide**

   Place a drop of water in the centre of a clean slide.

2. **Add the specimen**

   Peel a thin layer of onion epidermis and lay it flat in the water.

3. **Stain and cover**

   Add a drop of iodine, then lower a cover slip at an angle to avoid air bubbles.

4. **Observe**

   Start with the low-power objective, then switch to high power.

</Steps>

```md
<Steps>

1. **Prepare the slide**

   Place a drop of water in the centre of a clean slide.

2. **Add the specimen**

   Peel a thin layer of onion epidermis ...

</Steps>
```

### Figure

An image with a caption and number. Click the image to zoom in.

<Figure src="/images/animal-cell.svg" num="1.1" caption="A simplified animal cell." />

```md
<Figure src="/images/animal-cell.svg" num="1.1" caption="A simplified animal cell." />
```

Put images in `docs/public/images/`.

### Labeled diagram

Numbered markers on an image. Hover over a marker to see its name, or click a marker or list item to show its description. `x` and `y` are percentages of the image width and height.

<LabeledDiagram
  src="/images/animal-cell.svg"
  alt="Animal cell"
  :labels="[
    { x: 43.5, y: 59, label: 'Nucleus', text: 'Contains the genetic material (DNA) and controls cell activities.' },
    { x: 52, y: 49.5, label: 'Nucleolus', text: 'Site of ribosomal RNA synthesis and ribosome assembly.' },
    { x: 75.8, y: 35, label: 'Mitochondrion', text: 'Site of aerobic respiration; produces ATP.' },
    { x: 41.7, y: 30, label: 'Rough ER', text: 'Studded with ribosomes; synthesises and transports proteins.' },
    { x: 72.5, y: 62, label: 'Golgi apparatus', text: 'Modifies, packages and secretes proteins in vesicles.' },
    { x: 66.7, y: 80, label: 'Lysosome', text: 'Contains hydrolytic enzymes that digest worn-out organelles.' },
    { x: 64, y: 27.5, label: 'Centrioles', text: 'Organise spindle fibres during cell division.' },
    { x: 5, y: 50, label: 'Plasma membrane', text: 'Partially permeable; controls what enters and leaves the cell.' }
  ]"
/>

```md
<LabeledDiagram
  src="/images/animal-cell.svg"
  :labels="[
    { x: 43.5, y: 59, label: 'Nucleus', text: 'Contains the genetic material.' },
    { x: 75.8, y: 35, label: 'Mitochondrion', text: 'Site of aerobic respiration.' }
  ]"
/>
```

### Stat cards

Big numbers with an icon. Numbers count up when they scroll into view; `progress` (0–100) adds a bar.

<StatGrid>
  <StatCard value="12" label="Chapters" icon="book-open" color="green" note="Semester 1" />
  <StatCard value="8" label="Labs" icon="flask-conical" color="teal" :progress="25" note="2 of 8 done" />
  <StatCard value="85" suffix="%" label="Pass mark target" icon="target" color="blue" />
  <StatCard value="3" label="Quizzes" icon="clipboard-list" color="yellow" />
</StatGrid>

```md
<StatGrid>
  <StatCard value="12" label="Chapters" icon="book-open" color="green" note="Semester 1" />
  <StatCard value="8" label="Labs" icon="flask-conical" color="teal" :progress="25" note="2 of 8 done" />
</StatGrid>
```

### Info cards

Cards with a coloured icon. Add `link` to make the whole card clickable and `badge` for a small pill next to the tag.

<CardGrid>
  <InfoCard title="Cell biology" tag="Chapter 2" icon="microscope" color="green" badge="5 topics" link="/lectures/chapter-01">

  Cell structure, membranes and transport.

  </InfoCard>
  <InfoCard title="Genetics" tag="Chapter 5" icon="dna" color="purple" badge="4 topics">

  Inheritance, DNA replication and protein synthesis.

  </InfoCard>
  <InfoCard title="Photosynthesis" tag="Chapter 7" icon="sun" color="yellow">

  Light-dependent and light-independent reactions.

  </InfoCard>
</CardGrid>

```md
<CardGrid>
  <InfoCard title="Cell biology" tag="Chapter 2" icon="microscope" color="green" badge="5 topics" link="/lectures/chapter-01">

  Cell structure, membranes and transport.

  </InfoCard>
  <InfoCard title="Photosynthesis" tag="Chapter 7" icon="sun" color="yellow">

  Light-dependent and light-independent reactions.

  </InfoCard>
</CardGrid>
```

**Colours:** `green`, `blue`, `teal`, `yellow`, `red`, `purple`.

**Icons:** `book-open`, `graduation-cap`, `flask-conical`, `file-check`, `calendar`, `clipboard-list`, `microscope`, `dna`, `leaf`, `atom`, `brain`, `heart-pulse`, `sprout`, `bug`, `clock`, `target`, `trophy`, `users`, `layers`, `lightbulb`, `file-text`, `list-checks`, `sparkle`, `droplets`, `sun`, `zap`. You can also use them inline: <Icon name="dna" :size="16" />.

### Section colours

In bio-matrikulasi each section has its own colour, applied automatically to every page inside it (links, sidebar, buttons and the label above the title). That is **not** switched on in this site; the palette is shown here for reference:

<UiBadge type="green" text="Lectures" /> <UiBadge type="blue" text="Tutorials" /> <UiBadge type="teal" text="Labs" /> <UiBadge type="yellow" text="Assessments" /> <UiBadge type="purple" text="Past Year Exams" /> <UiBadge type="red" text="Course Info" />

### PDF

Embed the PDF and add an **Open Fullscreen** button under it. Put the file in `docs/public/<section>/` and use the full path including `/Python-Programming-2/`.

```md
<iframe src="/Python-Programming-2/lectures/chapter-01.pdf" width="100%" height="400" allowfullscreen></iframe>

<br>

<a href="/Python-Programming-2/lectures/chapter-01.pdf" target="_blank" rel="noopener">
  <button class="open-pdf-btn">
    Open Fullscreen
  </button>
</a>
```

## Equations & formatting

Built-in ways to format a page using plain markdown.

### Equations

Use `$...$` for inline maths and `$$...$$` for a centred equation.

The overall equation for aerobic respiration:

$$
\mathrm{C_6H_{12}O_6 + 6O_2 \longrightarrow 6CO_2 + 6H_2O + energy}
$$

Photosynthesis is roughly the reverse: $\mathrm{6CO_2 + 6H_2O \xrightarrow{light} C_6H_{12}O_6 + 6O_2}$.

Hardy–Weinberg equilibrium: $p^2 + 2pq + q^2 = 1$.

```md
$$
\mathrm{C_6H_{12}O_6 + 6O_2 \longrightarrow 6CO_2 + 6H_2O + energy}
$$

Hardy–Weinberg: $p^2 + 2pq + q^2 = 1$
```

### Callouts

::: tip Remember
ATP is the immediate energy source for cellular processes.
:::

::: info
Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes in the cytoplasm.
:::

::: warning Common mistake
Diffusion does **not** require ATP. Active transport does.
:::

::: danger Lab safety
Always wear goggles when handling hydrochloric acid.
:::

::: details Show worked answer
Water potential of pure water is 0 kPa; adding solute makes it more negative.
:::

```md
::: tip Remember
ATP is the immediate energy source for cellular processes.
:::

::: warning Common mistake
Diffusion does **not** require ATP.
:::

::: details Show worked answer
...
:::
```

### Tables

| Feature | Mitosis | Meiosis |
|---|---|---|
| Number of divisions | 1 | 2 |
| Daughter cells | 2 | 4 |
| Chromosome number | Diploid (2n) | Haploid (n) |
| Genetically identical? | Yes | No |

### Quotes

> "Nothing in biology makes sense except in the light of evolution."
> — Theodosius Dobzhansky

## Timeline styles

Ways to show a timeline. Scroll through each one, then copy the markdown for the style you like.

### Pinned timeline

The timeline **stays still on screen** while you scroll. Only the step changes: the line fills, the next dot lights up and the content swaps in place. When you reach the last step, the page continues scrolling normally. Click any step to jump to it.

<ScrollTimeline>
<ScrollStep date="Stage 1" title="Interphase">

The cell grows, makes more organelles and **replicates its DNA**. Each chromosome now consists of two identical sister chromatids joined at the centromere.

</ScrollStep>
<ScrollStep date="Stage 2" title="Prophase">

Chromosomes **condense** and become visible. The nuclear envelope breaks down, the nucleolus disappears and spindle fibres start to form from the centrioles.

</ScrollStep>
<ScrollStep date="Stage 3" title="Metaphase">

Chromosomes line up along the **equator** (metaphase plate). Spindle fibres attach to each centromere.

</ScrollStep>
<ScrollStep date="Stage 4" title="Anaphase">

Centromeres divide and spindle fibres shorten, pulling **sister chromatids to opposite poles** of the cell.

</ScrollStep>
<ScrollStep date="Stage 5" title="Telophase">

Chromatids reach the poles and uncoil. A **nuclear envelope re-forms** around each set and nucleoli reappear.

</ScrollStep>
<ScrollStep date="Stage 6" title="Cytokinesis">

The cytoplasm divides, producing **two genetically identical daughter cells**.

</ScrollStep>
</ScrollTimeline>

```md
<ScrollTimeline>
<ScrollStep date="Stage 1" title="Interphase">

The cell grows and **replicates its DNA**.

</ScrollStep>
<ScrollStep date="Stage 2" title="Prophase">

Chromosomes **condense** and become visible.

</ScrollStep>
</ScrollTimeline>
```

The other styles below scroll along with the page instead of staying still.

### 1. Basic

Items slide in once as they appear. The line stays still.

<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Characteristics of living things, levels of organisation.

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure" done>

Prokaryotic vs eukaryotic cells, organelles.

</TimelineItem>
<TimelineItem date="Week 3" title="Biological molecules">

Carbohydrates, lipids, proteins and nucleic acids.

</TimelineItem>
<TimelineItem date="Week 4" title="Enzymes">

Lock-and-key and induced-fit models, factors affecting rate.

</TimelineItem>
<TimelineItem date="Week 5" title="Quiz 1">

Covers weeks 1–4.

</TimelineItem>
</Timeline>

```md
<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Characteristics of living things.

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure">

Prokaryotic vs eukaryotic cells.

</TimelineItem>
</Timeline>
```

### 2. Progress line

The line fills with green as you scroll down, and each dot fills when the line reaches it. Scroll up and it empties again.

<Timeline progress>
<TimelineItem date="1665" title="Robert Hooke">

Observes cork under a microscope and names the tiny compartments "cells".

</TimelineItem>
<TimelineItem date="1674" title="Antonie van Leeuwenhoek">

Sees living single-celled organisms ("animalcules") in pond water.

</TimelineItem>
<TimelineItem date="1838" title="Matthias Schleiden">

Concludes that all plants are made of cells.

</TimelineItem>
<TimelineItem date="1839" title="Theodor Schwann">

Extends the idea to animals: all animals are made of cells.

</TimelineItem>
<TimelineItem date="1855" title="Rudolf Virchow">

"Omnis cellula e cellula": all cells come from pre-existing cells.

</TimelineItem>
<TimelineItem date="1953" title="Watson, Crick and Franklin">

The double-helix structure of DNA is described.

</TimelineItem>
</Timeline>

```md
<Timeline progress>
<TimelineItem date="1665" title="Robert Hooke">

Observes cork under a microscope and names the compartments "cells".

</TimelineItem>
...
</Timeline>
```

### 3. Focus

The item in the middle of your screen is highlighted; the others fade back. Includes the progress line. Good for step-by-step processes.

<Timeline progress focus>
<TimelineItem date="Stage 1" title="Interphase">

The cell grows and DNA replicates. Each chromosome now has two sister chromatids.

</TimelineItem>
<TimelineItem date="Stage 2" title="Prophase">

Chromosomes condense, the nuclear envelope breaks down and spindle fibres form.

</TimelineItem>
<TimelineItem date="Stage 3" title="Metaphase">

Chromosomes line up at the equator of the cell, attached to spindle fibres at the centromere.

</TimelineItem>
<TimelineItem date="Stage 4" title="Anaphase">

Centromeres divide and sister chromatids are pulled to opposite poles.

</TimelineItem>
<TimelineItem date="Stage 5" title="Telophase">

Chromatids reach the poles, decondense, and a nuclear envelope re-forms around each set.

</TimelineItem>
<TimelineItem date="Stage 6" title="Cytokinesis">

The cytoplasm divides, producing two genetically identical daughter cells.

</TimelineItem>
</Timeline>

```md
<Timeline progress focus>
<TimelineItem date="Stage 1" title="Interphase">

The cell grows and DNA replicates.

</TimelineItem>
...
</Timeline>
```

### 4. Alternating

Items sit on both sides of a centre line, each in its own card, and rise in as you scroll. Can be combined with `progress` and `focus`.

<Timeline layout="alternate" progress>
<TimelineItem date="Week 1" title="Lecture: Chapter 1" done>

Introduction to biology.

</TimelineItem>
<TimelineItem date="Week 2" title="Tutorial 1" done>

Practice questions for chapter 1.

</TimelineItem>
<TimelineItem date="Week 3" title="Lab 1">

Using the light microscope.

</TimelineItem>
<TimelineItem date="Week 4" title="Lab report due">

Submit before Friday, 5 pm.

</TimelineItem>
<TimelineItem date="Week 5" title="Quiz 1">

Chapters 1 and 2.

</TimelineItem>
<TimelineItem date="Week 7" title="Mid-semester exam">

Chapters 1–4.

</TimelineItem>
</Timeline>

```md
<Timeline layout="alternate" progress>
<TimelineItem date="Week 1" title="Lecture: Chapter 1" done>

Introduction to biology.

</TimelineItem>
...
</Timeline>
```

### Options

| Option | What it does |
|---|---|
| `progress` | Line fills as you scroll; dots fill when reached |
| `focus` | Highlights the item in the middle of the screen |
| `layout="alternate"` | Items on both sides of a centre line (desktop) |
| `done` (on an item) | Fills that item's dot permanently |
