import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key, false)

    const toggleMode = () => {
        setValue(!value);
    }

    return [value, toggleMode]
}