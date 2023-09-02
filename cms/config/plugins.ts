export default ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      breakpoints: {
        preview: 50,
        s: 250,
        md: 960,
      },
    },
  },
});
