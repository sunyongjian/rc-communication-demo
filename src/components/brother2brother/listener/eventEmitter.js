class EventEmitter {
  _event = {}
  
  on(eventName, handle) {
    let listeners = this._event[eventName];
    if(!listeners || !listeners.length) {
      this._event[eventName] = [handle];
      return;
    }
    listeners.push(handle);
  }

  off(eventName, handle) {
    let listeners = this._event[eventName];
    this._event[eventName] = listeners.filter(l => l !== handle);
    console.log(this._event[eventName]);
  }

  emit(eventName, ...args) {
    const listeners = this._event[eventName];
    if(listeners && listeners.length) {
      listeners.forEach(l => {
        l(...args);
      })
    }
  }
}
const event = new EventEmitter;
export { event };