import { Application } from "@hotwired/stimulus"

import consumer from '../channels/consumer'

const application = Application.start()

// Configure Stimulus development experience
application.debug    = false
application.consumer = consumer
window.Stimulus      = application

export { application }

const originalWebSocketClose = WebSocket.prototype.close
WebSocket.prototype.close = function () {
  if (this.readyState != WebSocket.CONNECTING) {
    originalWebSocketClose.apply(this, arguments)
  }
}