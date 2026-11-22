<template>
  <figure class="fp">
    <div class="fp__frame">
      <svg viewBox="0 0 860 476" role="img" aria-label="Parts of a function: the header (def keyword, function name, parameter, colon), the indented body ending in return, and the call with its argument and stored result">
      <defs>
        <marker id="fp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" class="fp-arrowhead"/>
        </marker>
      </defs>
      <line x1="122.4" y1="152" x2="122.4" y2="284" class="fp-guide"/>
      <rect x="343.8" y="111" width="138.0" height="29" rx="5" class="fp-tint"/>
      <rect x="409.8" y="361" width="58.8" height="29" rx="5" class="fp-tint"/>
      <text x="96.0" y="132" textLength="39.6" lengthAdjust="spacingAndGlyphs" class="fp-kw">def</text>
      <text x="148.8" y="132" textLength="184.8" lengthAdjust="spacingAndGlyphs" class="fp-fn">calculate_bill</text>
      <text x="333.6" y="132" textLength="171.6" lengthAdjust="spacingAndGlyphs" class="fp-tx">(meal_price):</text>
      <text x="148.8" y="172" textLength="39.6" lengthAdjust="spacingAndGlyphs" class="fp-tx">tax</text>
      <text x="201.6" y="172" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">=</text>
      <text x="228.0" y="172" textLength="132.0" lengthAdjust="spacingAndGlyphs" class="fp-tx">meal_price</text>
      <text x="373.2" y="172" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">*</text>
      <text x="399.6" y="172" textLength="52.8" lengthAdjust="spacingAndGlyphs" class="fp-num">0.06</text>
      <text x="148.8" y="207" textLength="184.8" lengthAdjust="spacingAndGlyphs" class="fp-tx">service_charge</text>
      <text x="346.8" y="207" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">=</text>
      <text x="373.2" y="207" textLength="52.8" lengthAdjust="spacingAndGlyphs" class="fp-num">2.00</text>
      <text x="148.8" y="242" textLength="66.0" lengthAdjust="spacingAndGlyphs" class="fp-tx">total</text>
      <text x="228.0" y="242" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">=</text>
      <text x="254.4" y="242" textLength="132.0" lengthAdjust="spacingAndGlyphs" class="fp-tx">meal_price</text>
      <text x="399.6" y="242" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">+</text>
      <text x="426.0" y="242" textLength="39.6" lengthAdjust="spacingAndGlyphs" class="fp-tx">tax</text>
      <text x="478.8" y="242" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">+</text>
      <text x="505.2" y="242" textLength="184.8" lengthAdjust="spacingAndGlyphs" class="fp-tx">service_charge</text>
      <text x="148.8" y="277" textLength="79.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">return</text>
      <text x="241.2" y="277" textLength="66.0" lengthAdjust="spacingAndGlyphs" class="fp-tx">total</text>
      <text x="96.0" y="382" textLength="79.2" lengthAdjust="spacingAndGlyphs" class="fp-tx">total1</text>
      <text x="188.4" y="382" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-kw">=</text>
      <text x="214.8" y="382" textLength="198.0" lengthAdjust="spacingAndGlyphs" class="fp-tx">calculate_bill(</text>
      <text x="412.8" y="382" textLength="52.8" lengthAdjust="spacingAndGlyphs" class="fp-num">8.50</text>
      <text x="465.6" y="382" textLength="13.2" lengthAdjust="spacingAndGlyphs" class="fp-tx">)</text>
      <text x="115.8" y="62" class="fp-label fp-red" text-anchor="middle">keyword</text>
      <line x1="115.8" y1="72" x2="115.8" y2="108" class="fp-lead"/>
      <text x="241.2" y="62" class="fp-label fp-purple" text-anchor="middle">function name</text>
      <line x1="241.2" y1="72" x2="241.2" y2="108" class="fp-lead"/>
      <text x="412.8" y="62" class="fp-label fp-blue" text-anchor="middle">parameter</text>
      <line x1="412.8" y1="72" x2="412.8" y2="108" class="fp-lead"/>
      <text x="498.6" y="62" class="fp-label fp-muted" text-anchor="middle">colon</text>
      <line x1="498.6" y1="72" x2="498.6" y2="108" class="fp-lead"/>
      <line x1="135.6" y1="392" x2="135.6" y2="428" class="fp-lead"/>
      <text x="135.6" y="452" class="fp-label fp-muted" text-anchor="middle">stored result</text>
      <line x1="307.2" y1="392" x2="307.2" y2="428" class="fp-lead"/>
      <text x="307.2" y="452" class="fp-label fp-purple" text-anchor="middle">function call</text>
      <line x1="439.2" y1="392" x2="439.2" y2="428" class="fp-lead"/>
      <text x="439.2" y="452" class="fp-label fp-blue" text-anchor="middle">argument</text>
      <path d="M712 112 h8 v26 h-8" class="fp-brace"/>
      <text x="732.0" y="130" class="fp-label fp-muted" text-anchor="start">header</text>
      <path d="M712 152 h8 v133 h-8" class="fp-brace"/>
      <text x="732.0" y="216" class="fp-label fp-muted" text-anchor="start">body</text>
      <text x="732" y="238" class="fp-note">indented</text>
      <path d="M712 362 h8 v26 h-8" class="fp-brace"/>
      <text x="732.0" y="380" class="fp-label fp-muted" text-anchor="start">call</text>
      <path d="M138.8 270 H52 V375 H86" class="fp-ret" marker-end="url(#fp-arrow)"/>
      <text x="66.0" y="333" class="fp-label fp-green" text-anchor="start">return sends 11.01 back to total1</text>
      </svg>
    </div>
    <figcaption v-if="caption || num" class="fp__caption"><strong v-if="num">Figure {{ num }}.</strong> {{ caption }}</figcaption>
  </figure>
</template>

<script setup>
// Figure for Lab 1: the parts of a function, drawn inline so it uses the
// site's fonts and colours and follows light/dark mode.
//   <FunctionParts num="1.1" caption="..." />
defineProps({
  num: { type: String, default: '' },
  caption: { type: String, default: '' }
})
</script>

<style scoped>
.fp { margin: 24px 0; }
.fp__frame {
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-code-block-bg);
}
.fp__frame svg { display: block; width: 100%; height: auto; }
.fp__caption {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  color: var(--vp-c-text-2);
}
.fp__caption strong { color: var(--vp-c-text-1); }

/* Code: same font and colours as the site's code blocks */
.fp text[class^='fp-'] { font-family: var(--vp-font-family-mono); font-size: 22px; }
.fp-tx  { fill: #24292e; }
.fp-kw  { fill: #d73a49; }
.fp-fn  { fill: #6f42c1; }
.fp-num { fill: #005cc5; }
.dark .fp-tx  { fill: #e1e4e8; }
.dark .fp-kw  { fill: #f97583; }
.dark .fp-fn  { fill: #b392f0; }
.dark .fp-num { fill: #79b8ff; }

/* Labels: site font and accent colours */
.fp text.fp-label { font-family: var(--vp-font-family-base); font-size: 18px; font-weight: 600; }
.fp text.fp-note  { font-family: var(--vp-font-family-base); font-size: 15px; fill: var(--vp-c-text-3); }
.fp-red    { fill: var(--c-red); }
.fp-purple { fill: var(--c-purple); }
.fp-blue   { fill: var(--c-blue); }
.fp-green  { fill: var(--c-green); }
.fp-muted  { fill: var(--vp-c-text-2); }

.fp-lead, .fp-brace { fill: none; stroke: var(--vp-c-text-3); stroke-width: 1.5; }
.fp-guide { stroke: var(--vp-c-divider); stroke-width: 2; }
.fp-tint  { fill: color-mix(in srgb, var(--c-blue) 14%, transparent); }
.fp-ret   { fill: none; stroke: var(--c-green); stroke-width: 2.5; stroke-linejoin: round; }
.fp-arrowhead { fill: var(--c-green); }
</style>
