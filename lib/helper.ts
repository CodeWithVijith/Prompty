export const isMobileOrTablet = () => {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|Tablet|Mobile/i.test(
    navigator.userAgent
  );
};
