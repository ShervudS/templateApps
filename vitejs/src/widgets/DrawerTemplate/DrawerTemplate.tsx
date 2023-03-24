import React, {useState} from 'react'
import {DRAWER_NAMES} from '_assets/constants'
import {TConfigTemplatesDrawer} from '_widgets/DrawerTemplate/DrawerTemplate.types'
import * as Styled from './DrawerTemplate.styles'

const DrawerTemplate: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);


    const onBackDropClick = () => {

    }

    const configTemplatesDrawer: TConfigTemplatesDrawer = {
        [DRAWER_NAMES.DEFAULT]: <>Нет данных</>,
    }

    return (
        <Styled.DrawerTemplateWrapper isOpen={isOpen} onClick={onBackDropClick}>
            this is Drawer
            <Styled.DrawerPanelWrapper isOpen={isOpen}>
                dfasdf
            </Styled.DrawerPanelWrapper>
        </Styled.DrawerTemplateWrapper>
    )
}
export default DrawerTemplate
