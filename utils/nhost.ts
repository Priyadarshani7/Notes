import { NhostClient } from "@nhost/nextjs";

// TODO: Update subdomain and region to your own project.
const nhost = new NhostClient({
  subdomain: "vlpetgrpmgfjbvrhmqrz",
  region: "ap-south-1",
});

export { nhost };
