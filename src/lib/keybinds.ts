import { useEffect } from 'react'

export interface Keybind {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  action: () => void
  description: string
}

export const useKeybinds = (keybinds: Keybind[], enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return
      }

      const matchingKeybind = keybinds.find(kb => {
        const keyMatches = event.key.toLowerCase() === kb.key.toLowerCase()
        const ctrlMatches = kb.ctrl ? (event.ctrlKey || event.metaKey) : (!event.ctrlKey && !event.metaKey)
        const shiftMatches = kb.shift ? event.shiftKey : !event.shiftKey
        const altMatches = kb.alt ? event.altKey : !event.altKey

        return keyMatches && ctrlMatches && shiftMatches && altMatches
      })

      if (matchingKeybind) {
        event.preventDefault()
        matchingKeybind.action()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [keybinds, enabled])
}

export const formatKeybind = (keybind: Keybind): string => {
  const parts: string[] = []
  if (keybind.ctrl) parts.push('Ctrl')
  if (keybind.shift) parts.push('Shift')
  if (keybind.alt) parts.push('Alt')
  parts.push(keybind.key.toUpperCase())
  return parts.join('+')
}