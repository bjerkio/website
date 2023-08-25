declare interface Window {
  chatwootSDK?: {
    run: (config: Record<string, string>) => void;
  };
  $chatwoot: {
    toggle: (state?: 'open' | 'close') => void;
  };
}
