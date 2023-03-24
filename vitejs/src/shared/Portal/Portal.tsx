import React, { ReactElement, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface IPortal {
    children: ReactElement
}

export const Portal: React.FunctionComponent<IPortal> = ({ children }) => {
    const [container] = useState(() => document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(container)

        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}
