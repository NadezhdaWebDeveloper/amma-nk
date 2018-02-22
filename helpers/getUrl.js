// export default function getUrl(urlStr) {
// 	let aTag = document.createElement("a");
// 	aTag.href = urlStr;
// 	return aTag;
// }

export default function getUrl(urlStr) {
  var match = urlStr.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match && {
    urlStr: urlStr,
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  }
}