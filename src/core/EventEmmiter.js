class EventEmmiter {
  constructor() {
    this.eventTarget = document.appendChild(document.createComment('eveny-emmiter'));
  }

  on(type, listner) {
    this.eventTarget.addEventListener(type, listner);
  }

  off(type, listner) {
    this.eventTarget.removeEventListener(type, listner);
  }

  emit(type, detail) {
    const customEvent = new CustomEvent(type, { detail });
    return this.eventTarget.dispatchEvent(customEvent);
  }
}

export const eventEmmiter = new EventEmmiter();
