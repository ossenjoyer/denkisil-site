interface LayoutLoadInput {
  url: URL;
}

export function load({ url }: LayoutLoadInput) {
  return {
    url: url.pathname,
  };
}
