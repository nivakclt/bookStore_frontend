import { useState,createContext } from "react"

export const searchContext = createContext()

function Sharedcontext({children}) {
    const [search,setSearch]=useState("")
  return (
    <searchContext.Provider value={[search,setSearch]}>
        {children}
    </searchContext.Provider>
  )
}

export default Sharedcontext