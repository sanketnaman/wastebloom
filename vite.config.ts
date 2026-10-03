import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

const previewSeoPlugin: Plugin = {
  name: 'wastebloom:preview-seo',
  transformIndexHtml(html) {
    return html
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
      .replace('</head>', '    <meta name="robots" content="noindex, nofollow">\n  </head>');
  },
};

const spa404Plugin: Plugin = {
  name: 'wastebloom:spa-404-fallback',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const index = path.join(dist, 'index.html');
    if (fs.existsSync(index)) {
      fs.copyFileSync(index, path.join(dist, '404.html'));
    }
  },
};

export default defineConfig(() => {
  const isPreview = process.env.VITE_PREVIEW === 'true';
  return {
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [react(), tailwindcss(), ...(isPreview ? [previewSeoPlugin] : []), spa404Plugin],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
