import { useRecoilState } from 'recoil'

import { darkModeState } from '../utils/state'

interface Props {
  light: React.ReactNode
  dark: React.ReactNode
}

const ModeToggler = ({ light, dark }: Props) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div
      className="flex items-center relative cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} theme`}
    >
      <div className="absolute top-0 left-0 transition-opacity opacity-0 dark:opacity-100">
        {dark}
      </div>
      <div className="absolute top-0 left-0 transition-opacity dark:opacity-0">
        {light}
      </div>
    </div>
  )
}

export default ModeToggler
