// 让antd样式随页面主题变化而变化

import { useEffect, useState } from 'react';
import { theme as antdTheme} from "antd";

const useAntdTheme = () => {
    // darkAlgorithm   defaultAlgorithm
    const [curThemeStr, setCurThemeStr] = useState('defaultAlgorithm')

    useEffect(() => {
      const handleThemeChange = () => {
        const themePreference = localStorage.getItem('theme'); 
        if (themePreference === 'light') {
          setCurThemeStr('defaultAlgorithm');
        } else {
          setCurThemeStr('darkAlgorithm');
        }
      }
  
      handleThemeChange();
  
      window.addEventListener('storage', handleThemeChange);
      return () => window.removeEventListener('storage', handleThemeChange);
    },[])

    return {
      curTheme: antdTheme[curThemeStr]
    }
}

export default useAntdTheme;
