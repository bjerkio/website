declare interface Window {
	$chatwoot: {
		toggle: () => void;
		toggleBubbleVisibility(option: 'show' | 'hide'): void;
	};
	chatwootSettings: {
		hideMessageBubble: boolean;
	};
}
