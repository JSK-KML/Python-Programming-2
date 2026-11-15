import { reactive, watch } from 'vue'

// Student details typed into <YourDetails>. They stay in this browser only
// (localStorage) and are used to fill placeholders in the page:
//   YOURNAME         -> first name, lowercase, letters/digits only (e.g. aiman)
//   GITHUB-USERNAME  -> GitHub username
//   GITHUB-EMAIL     -> email used to log in to GitHub
export const details = reactive({ name: '', username: '', email: '' })

const STORE_KEY = 'ui-your-details'
let loaded = false

export const slugName = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

const values = () => ({
  YOURNAME: slugName(details.name),
  'GITHUB-USERNAME': details.username.trim(),
  'GITHUB-EMAIL': details.email.trim()
})
const TOKEN_RE = /YOURNAME|GITHUB-USERNAME|GITHUB-EMAIL/g
const HAS_TOKEN = /YOURNAME|GITHUB-USERNAME|GITHUB-EMAIL/ // non-global: safe for .test()

export function loadDetails() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  try {
    Object.assign(details, JSON.parse(localStorage.getItem(STORE_KEY) || '{}'))
  } catch {
    /* storage blocked or bad JSON: start empty */
  }
  watch(details, () => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(details))
    } catch {
      /* storage blocked: values still fill this page */
    }
    fillPage()
  })
}

// Wrap every placeholder in page content in a <span class="ud-fill">, then
// show the student's value (or the placeholder if empty). Works inside code
// blocks too, so the copy button copies the filled-in command.
export function fillPage() {
  const root = typeof document !== 'undefined' && document.querySelector('.vp-doc')
  if (!root) return
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement.closest('.ud-fill, input, textarea, .ui-details')
        ? NodeFilter.FILTER_REJECT
        : HAS_TOKEN.test(n.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP
  })
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  for (const node of nodes) {
    const frag = document.createDocumentFragment()
    let last = 0
    node.nodeValue.replace(TOKEN_RE, (tok, at) => {
      frag.append(node.nodeValue.slice(last, at))
      const span = document.createElement('span')
      span.className = 'ud-fill'
      span.dataset.token = tok
      span.textContent = tok
      frag.append(span)
      last = at + tok.length
      return tok
    })
    frag.append(node.nodeValue.slice(last))
    node.replaceWith(frag)
  }
  const v = values()
  root.querySelectorAll('.ud-fill').forEach((span) => {
    const val = v[span.dataset.token]
    span.textContent = val || span.dataset.token
    span.classList.toggle('is-filled', !!val)
  })
}
