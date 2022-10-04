// import {html} from 'lit-html'

export default class NotificationMessage {

    static isOpened = null

    constructor(title, {
        duration = 0,
        type = '',
    } = {}) {

        this.title = title;
        this.duration = duration;
        this.type = type;

        if (NotificationMessage.isOpened) {NotificationMessage.isOpened.remove()};

        this.render();
    }

get template() {
    return `
        <div class="notification ${ this.type }" style="--value: ${this.duration / 1000}s">
            <div class="timer"> </div>
            <div class="inner-wrapper">
                <div class="notification-header">${this.type}</div>
                <div class="notification-body">${this.title}</div>
            </div>
        </div>
    `;

}

render() {

    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;

}

show(elem) {

    if(elem) {
        elem.append(this.element);
    } else {
        document.body.append(this.element);
    }

    NotificationMessage.isOpened = this.element;

    setTimeout(() => this.destroy(), this.duration);
}

remove() {
    if (this.element) {
        this.element.remove();
      }
}

destroy() {
    this.remove();
    this.element = null;
}

}
