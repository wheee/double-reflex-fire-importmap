import ApplicationController from './application_controller.js'


export default class extends ApplicationController {
  // If the connect is commented out the double fire happens.  If it's uncomment then the reflex fires once.
  // connect() {
  //   console.log("connect")
  // }

  beforePoke(element) {
    // alert('test')
    console.log("before poke...")
  }
}