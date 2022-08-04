const baseUrl = "https://www.models-resource.com/"
const downloadRoute = "download"
const querySelector = '[href*="/pc_computer/digimonstorycybersleuthcompleteedition/model"]' // get all <a> with href attibute to details and download button
const sliceCount = -7 // digit amount which website use for ids (in example - last 6 digits + backslash) (you need to check it yourself and change or use regex/url path spliter)
const downloadDelay = 3000 // 3 sec per each click simulation/download. HTML have several download restrictions, so it should also depend on your network bandwidth

document.querySelectorAll(querySelector).forEach((name, index) => {
  setTimeout(function() {
    download(baseUrl + downloadRoute + name.getAttribute("href").slice(sliceCount));
  }, downloadDelay * (index + 1), false);
})

function download(url) {
  var link = document.createElement('a');

  link.setAttribute('download', null);
  link.style.display = 'none';

  document.body.appendChild(link);

  link.setAttribute('href', url);
  link.click();


  document.body.removeChild(link);
}
