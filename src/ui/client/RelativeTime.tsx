/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

class RelativeTime extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const timestamp = this.getAttribute("data-timestamp");
    if (!timestamp) return;
    this.innerHTML = this.getRelativeTime(timestamp);
  }

  private getRelativeTime = (timestamp: string) => {
    // Date from hacker news is in seconds
    const date = parseInt(timestamp, 10);
    const now = Math.floor(new Date().getTime() / 1000);
    const rtf = new Intl.RelativeTimeFormat("en", {
      numeric: "auto",
    });
    const hoursDifference = Math.floor((date - now) / 3600) + 1;
    const daysDifference = Math.floor(Math.abs(hoursDifference) / 24);

    if (daysDifference > 0) {
      return rtf.format(-daysDifference, "day");
    }

    if (hoursDifference < 24) {
      return rtf.format(hoursDifference, "hours");
    }

    return "";
  };
}

export default RelativeTime;
