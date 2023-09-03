declare namespace JSX {
  interface LocalizedDateElement {
    class?: string;
  }

  interface RelativeTimeElement {
    class?: string;
    "data-timestamp": string;
  }

  interface IntrinsicElements {
    "localized-date": LocalizedDateElement;
    "relative-time": RelativeTimeElement;
  }
}
