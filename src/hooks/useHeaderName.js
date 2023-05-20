import { useEffect } from "react";

const useHeaderName=(title)=>{
    useEffect(()=>{
        document.title = `ToyWorld | ${title}`
    },[title])
}

export default useHeaderName;