import {lazy} from 'react'
import {Header} from '_widgets/Header'
import {GlobalStyles} from '_styles/globalStyles'


const LazyDrawerTemplate = lazy(
    async () => await import('_widgets/DrawerTemplate/DrawerTemplate')
)

const LazyModalTemplate = lazy(
    async () => await import('_widgets/ModalTemplate/ModalTemplate')
)

export const App = () => {

    return (
        <>
            <GlobalStyles/>
            <Header/>
            {/*RoutingContainer*/}
            <LazyDrawerTemplate />
            <LazyModalTemplate />
        </>)
}
