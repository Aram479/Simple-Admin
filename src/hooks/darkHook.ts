import { useDark, useToggle } from "@vueuse/core"

export function useDarkChange() {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  return {
    isDark, toggleDark
  }
}