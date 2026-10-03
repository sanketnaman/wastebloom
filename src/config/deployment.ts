export const isPreviewDeployment = (): boolean => import.meta.env.VITE_PREVIEW === 'true';

export const PREVIEW_NO_BACKEND_SUFFIX =
  'This public preview is a static build with no backend, so this feature is unavailable here.';
