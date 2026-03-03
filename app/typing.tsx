'use client'

import { useState, useEffect } from 'react'

export default function Typing({ roles = ['gustavo bizo', 'developer', 'student'] }: { roles?: string[] }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const word = roles[roleIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < word.length) {
          setCharIdx(charIdx + 1)
          setText(word.slice(0, charIdx + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIdx > 0) {
          setCharIdx(charIdx - 1)
          setText(word.slice(0, charIdx - 1))
        } else {
          setDeleting(false)
          setRoleIdx((roleIdx + 1) % roles.length)
        }
      }
    }, deleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx, roles])

  return (
    <>
      <span id="typed">{text}</span>
      <span className="cursor"></span>
    </>
  )
}
