import axios from 'axios'
import dynamicLoadScript from './dynamic-load-script'



export function isGitee() {
  const origin = window.location.origin
  if (origin.includes('gitee.io')) {
    return true
  }
  return false
}

export function loadGitter() {
  const id = 'vue-element-admin/discuss'
  const existingScript = document.getElementById(id)
  if (existingScript) return
  const script = document.createElement('script')
  script.id = id
  script.text =
    "((window.gitter = {}).chat = {}).options = {room: 'vue-element-admin/discuss'};"
  document.body.appendChild(script)
  dynamicLoadScript('https://sidecar.gitter.im/dist/sidecar.v1.js')
}
