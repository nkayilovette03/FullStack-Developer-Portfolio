import React from 'react'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const ToggleButton = styled.div`
  --toggle-width: 60px;
  --toggle-height: 28px;
  --toggle-padding: 1px;
  margin-left: 10px;
  margin-top: 0px;
  margin-left: 30px;
  position: fixed;
  // right: 0;
  left: 20;
  z-index: 9999999999999999999999999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: ${(p) => (p.activeTheme === 'dark' ? '#1a8b9d' : '#18d26e')};
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === 'dark'
      ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
      : 'none'};
`

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <ToggleButton type='button' onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span>🌙</span>
      <span>☀️</span>
    </ToggleButton>
  )
}

export default ThemeToggle
