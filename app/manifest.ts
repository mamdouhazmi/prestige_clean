import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prestige Clean - خدمات غسيل وتلميع السيارات بالبخار",
    short_name: "Prestige Clean",
    description:
      "شركة Prestige Clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض. خدمة متنقلة احترافية، تنظيف المراتب، تلميع داخلي وخارجي.",
    start_url: "/",
    display: "standalone",
    background_color: "#112D4E",
    theme_color: "#112D4E",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
