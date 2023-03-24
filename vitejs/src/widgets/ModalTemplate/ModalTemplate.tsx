import React, {useState} from 'react'
import {Portal} from '_shared/Portal'
import * as Styled from './ModalTemplate.styles'

const ModalTemplate: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    if (!isOpen) {
        return null
    }

    const configModalFooter = {
        default: <>Modal footer</>,
    }

    const onClose = (e: any) => {
        // onCloseModal()
    }

    return (
        <Portal>
            <Styled.ModalTemplateWrapper isOpen={isOpen} role="dialog">
                <Styled.ModalOverlay onClick={onClose} role="button"/>

                <Styled.ModalContentWrapper>
                    <Styled.ModalHeader>
                        Заголовок модального окна
                    </Styled.ModalHeader>

                    <Styled.ModalBody>
                        Тело модального окна
                    </Styled.ModalBody>

                    <Styled.ModalFooter>
                        <Styled.ModalActionButton onClick={onClose}>
                            Кнопка отмены
                        </Styled.ModalActionButton>
                        <Styled.ModalActionButton>
                            Кнопка ок
                        </Styled.ModalActionButton>
                    </Styled.ModalFooter>
                </Styled.ModalContentWrapper>
            </Styled.ModalTemplateWrapper>
        </Portal>
    )
}

export default ModalTemplate
