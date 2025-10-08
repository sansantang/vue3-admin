import i18n from '@/i18n'

export function generateRouteTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
