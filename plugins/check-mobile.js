export default function () {
  const htmlEl = document.documentElement
  htmlEl.classList.add('no-dev')
  if ((typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
    htmlEl.classList.remove('no-dev')
  }
}