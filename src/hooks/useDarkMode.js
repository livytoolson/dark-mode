import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('displayDarkMode')

    const toggleMode = () => {
        setSomeValue(!someValue);
    }

    return [someValue, toggleMode]
}