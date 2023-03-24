import {DRAWER_NAMES} from '_assets/constants'
import {ReactNode} from 'react'

export type TDrawerComponentStore = DRAWER_NAMES.DEFAULT

export type TConfigTemplatesDrawer = Record<TDrawerComponentStore, ReactNode>

export type TDrawerStore = {
    isOpen: boolean
    drawerComponent: TDrawerComponentStore
    drawerConfig?: any
}

export type TDrawerTemplateStyleProps = {
    isOpen: boolean
}
