import { useEffect } from "react";

const useTitle: Function = (title?: string) => {
    useEffect(() => {
        //
        document.title = title || "404 Found";
        //
    }, [title])
}

export default useTitle;