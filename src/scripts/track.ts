// Envía un evento a Plausible o Google Analytics, si alguno está activo (ver Layout.astro).
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: Record<string, string> = {}) {
  window.plausible?.(event, { props });
  window.gtag?.('event', event, props);
}
