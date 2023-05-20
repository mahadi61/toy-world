import { useEffect } from "react";

const useHeaderName=(title)=>{
    useEffect(()=>{
        document.title = `${title} | ToyWorld`
    },[title])
}

export default useHeaderName;