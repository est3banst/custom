import { useEffect } from "react";

export default function useScrollTop () {
    useEffect(() => {
        scrollTo(0, 0)
      }, [])
}