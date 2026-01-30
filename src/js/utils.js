// HTML component/page loader
export async function loadHTML(selector, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}
