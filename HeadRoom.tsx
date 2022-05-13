import { useRef, useEffect, FC } from 'react'
import Headroom, { HeadroomOptions } from 'headroom.js'

interface OptionsProps {
  options: HeadroomOptions
}

const HeadRoom: FC<OptionsProps> = ({ children, options }) => {
  const header = useRef<any>()

  useEffect(() => {
    const headroom = new Headroom(header.current, options)
    headroom.init()
    return () => headroom.destroy()
  }, [options])

  return <div ref={header}>{children}</div>
}

export default HeadRoom
