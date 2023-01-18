const url =
  "https://data.tidbcloud.com/api/v1beta/apps/chat2query-yElaQuwQ/v1/chat2chart";

export const config = {
  runtime: "edge",
};

export default async function handler(req, res) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (req.method === "GET" && query) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        cluster_id: '1379661944639654096',
        database: "sample_data",
        instruction: query,
      }),
      headers: {
        "api-key":
          "qgcmboi2FnDAb8nJzPrFOhnsIsjFznwaeuI4GmIlN3fHMceCd6mcP3B3g7c590Ded",
      },
    });

    return new Response(await response.text(), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  res.status(200).json({ name: "John Doe" });
}
