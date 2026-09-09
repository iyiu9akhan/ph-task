import type { ReactNode } from "react"

function Container({children}:{children:ReactNode}) {
  return (
    <div className="max-w-330 mx-auto">
        {children}
    </div>
  )
}

export default Container