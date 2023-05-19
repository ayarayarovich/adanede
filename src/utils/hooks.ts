import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useDocumentTitle = () => {
    const [title, setTitle] = useState('')
    const pathname = useLocation()

    useEffect(() => {
        setTitle(window.document.title)
    }, [pathname])

    return title
}

export {useUpdateEffect} from 'react-use'
