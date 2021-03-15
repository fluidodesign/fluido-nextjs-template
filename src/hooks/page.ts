import { createState, useState } from '@hookstate/core'

interface PageProps {
  [key: string]: any
}

export const PageState = createState<PageProps>({})

const usePage = () => useState<PageProps>(PageState)

export default usePage
