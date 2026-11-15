import { reactive } from 'vue'

// Shared choice per tab group: <Tabs group="git-method"> on any page switch
// together, and the choice is remembered in the browser for the next visit.
export const tabGroups = reactive({})

const key = (group) => `ui-tabs:${group}`

export function loadGroup(group) {
  if (tabGroups[group]) return tabGroups[group]
  try {
    return localStorage.getItem(key(group)) || undefined
  } catch {
    return undefined
  }
}

export function saveGroup(group, value) {
  tabGroups[group] = value
  try {
    localStorage.setItem(key(group), value)
  } catch {
    /* private mode / storage blocked: the choice still syncs on this page */
  }
}
