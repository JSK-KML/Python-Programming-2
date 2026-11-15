// Terminal-style code blocks: write them as ```console with the command on
// lines starting with "$ " and the output underneath, as in a real terminal:
//
//   $ pwd
//   /c/Users/aiman/aiman-CP125
//
// The "$ " prompts and output lines are marked .vp-copy-ignore, which
// VitePress's copy button already skips, so copying gives only the commands.
export function markTerminalBlocks() {
  if (typeof document === 'undefined') return
  document
    .querySelectorAll('.vp-doc div.language-console:not([data-term]), .vp-doc div.language-shellsession:not([data-term])')
    .forEach((block) => {
      block.dataset.term = ''
      block.querySelectorAll('pre code .line').forEach((line) => {
        if (!line.textContent.startsWith('$ ')) {
          line.classList.add('vp-copy-ignore', 'term-output')
          // Also skip the line break after it, so copied commands have no blank lines.
          const nl = line.nextSibling
          if (nl && nl.nodeType === Node.TEXT_NODE && nl.nodeValue === '\n') {
            const skip = document.createElement('span')
            skip.className = 'vp-copy-ignore'
            skip.textContent = '\n'
            nl.replaceWith(skip)
          }
          return
        }
        // Split the "$ " prompt off into its own ignored span.
        const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT)
        let left = 2
        while (left > 0 && walker.nextNode()) {
          const node = walker.currentNode
          const take = Math.min(left, node.nodeValue.length)
          const prompt = document.createElement('span')
          prompt.className = 'vp-copy-ignore term-prompt'
          prompt.textContent = node.nodeValue.slice(0, take)
          node.nodeValue = node.nodeValue.slice(take)
          node.parentNode.insertBefore(prompt, node)
          left -= take
        }
      })
    })
}
