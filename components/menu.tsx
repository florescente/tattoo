import { Stack } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { Router } from 'next/router'
import LinkItem from './link'

function MenuComponent({ router }: { router: Router }) {
  const { t } = useTranslation('common')
  return (
    <Stack direction="row" spacing="24px">
      <LinkItem href="/" name={t('menu.first')} path={router.asPath} />
      <LinkItem href="/trampos" name={t('menu.second')} path={router.asPath} />
      <LinkItem href="/contato" name={t('menu.third')} path={router.asPath} />
    </Stack>
  )
}

export default MenuComponent
