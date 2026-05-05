(function() {
  let xhr = new XMLHttpRequest();
  let apiKey = "Zxm9CWgOAI5FiPzTNhmzjHwwcGcpTVlw";
  let url =
    "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=" + apiKey;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let giphyObj = JSON.parse(xhr.responseText);
      let gifDrop = document.querySelector(".gif");
      let link = giphyObj.data[5].images.downsized_medium.url;
      gifDrop.src = link;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
})();
