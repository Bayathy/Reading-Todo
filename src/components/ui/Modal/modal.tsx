import type { PropsWithChildren } from 'react'
import { forwardRef } from 'react'

import { Button } from '@/components/ui'

export type ModalProps = { onClose: () => void } & PropsWithChildren

// eslint-disable-next-line react/display-name
export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, onClose }, ref) => {
    return (
      <dialog className={'m-auto w-4/5 max-w-2xl rounded-md'} ref={ref}>
        <div className="m-4">
          <div className="flex justify-end">
            <Button onClick={onClose} color={'primary'}>
              閉じる
            </Button>
          </div>
          {children}
        </div>
      </dialog>
    )
  },
)
