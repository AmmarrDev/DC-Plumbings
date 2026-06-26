// Embeds a Google Map centered on the Bay Area service corridor.
// No API key required since this uses the public maps embed endpoint.
export default function MapEmbed({ className = "" }) {
  const query = encodeURIComponent(
    "San Francisco to San Jose, California"
  );
  return (
    <div className={`overflow-hidden rounded-lg border border-steel-200 ${className}`}>
      <iframe
        title="DC Plumbing Solutions service area map: San Francisco to San Jose"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 360 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
