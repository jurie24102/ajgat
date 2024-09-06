const gaEvent = ({ action, category, label, value }) => {
  if (typeof window !== undefined) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export default gaEvent;