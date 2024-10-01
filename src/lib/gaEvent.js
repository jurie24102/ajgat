const gaEvent = ({ action, category, label, value }) => {
  const origin = window.localStorage.getItem("origin");
  if (typeof window !== undefined) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      origin: origin
    })
  }
}

export default gaEvent;