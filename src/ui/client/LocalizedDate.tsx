/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

class LocalizedDate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.getFormattedDate();
  }

  private getFormattedDate = () => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(new Date());
  };
}

export default LocalizedDate;
