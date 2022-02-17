console.log("this is my");
// 18dca1c3de8f41fcaffc5957f551c2df

// initialize the news api parameter
// source= 'bbc-news';
// let apiKey='18dca1c3de8f41fcaffc5957f551c2df'

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//create an ajax  get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=18dca1c3de8f41fcaffc5957f551c2df`,
  true
);
xhr.getResponseHeader("content-type", "application/json");
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml="";
    articles.forEach(function(element,index ){
      
      let news = `
<div class="accordion-item">
  <h2 class="accordion-header" id="heading${index}">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse${index}"
      aria-expanded="true"
      aria-controls="collapse${index}"
    >
     ${element["title"]}
    </button>
  </h2>
  <div
    id="collapse${index}"
    class="accordion-collapse collapse "
    aria-labelledby="heading${index}"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      ${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a>
    </div>
  </div>
</div>`;
newsHtml +=news;
    
    });
    newsAccordion.innerHTML= newsHtml;
  } else {
    console.log("some error occured");
  }
};

xhr.send();
