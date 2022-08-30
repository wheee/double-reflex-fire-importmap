import ApplicationController from './application_controller.js'


export default class extends ApplicationController {
  connect() {
    super.connect()
    console.log("connect")
  }

  beforePoke() {
    console.log("before poke...")
  }
}