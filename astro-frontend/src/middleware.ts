export function onRequest({ request }, next) {
  const url = new URL(request.url);
  const lang = url.pathname.split("/").at(1);

  if (lang !== "en" && lang !== "fr" && lang !== "") {
    return new Response(null, { status: 404 });
  }

  return next();
}
