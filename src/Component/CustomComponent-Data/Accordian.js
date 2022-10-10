const accordianHtml1 = `
<h3 class="text-center mb-3">Accordion Type 1 </h3>
<div class="accordionWrapper">
<div class="accordionItem open">
  <h2 class="accordionItemHeading">About accordions</h2>
  <div class="accordionItemContent">
    <p>JavaScript accordions let you squeeze a lot of content into a small space in a Web page.</p>
    <p>This simple accordion degrades gracefully in browsers that don't support JavaScript or CSS.</p>
  </div>
</div>

<div class="accordionItem close">
  <h2 class="accordionItemHeading">Accordion items</h2>
  <div class="accordionItemContent">
    <p>A JavaScript accordion is made up of a number of expandable/collapsible items. Only one item is ever shown at
      a time.</p>
    <p>You can include any content you want inside an accordion item. Here's a bullet list:</p>
    <ul>
      <li>List item #1</li>
      <li>List item #2</li>
      <li>List item #3</li>
    </ul>
  </div>
</div>

<div class="accordionItem close">
  <h2 class="accordionItemHeading">How to use a JavaScript accordion</h2>
  <div class="accordionItemContent">
    <p>Click an accordion item's heading to expand it. To collapse the item, click it again, or click another item
      heading.</p>
  </div>
</div>
</div>
<style>
.accordionWrapper .accordionItem {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border:1px solid #ccc;
  }
  .accordionWrapper .accordionItemHeading {
    cursor: pointer;
    margin: 0 0 1rem 0;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    font-size:1.2rem;
  }
  .accordionWrapper .close .accordionItemContent {
    height: 0;
    transition: height 1s ease-out;
    transform: scaleY(0);
    float: left;
    display: block;
  }
  .accordionWrapper .open .accordionItemContent {
    padding: 2rem;
    width: 100%;
    margin: 0 0 1rem 0;
    display: block;
    transition: transform 0.4s ease;
    box-sizing: border-box;
  }
  .accordionWrapper .open .accordionItemHeading {
    margin: 0px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
<script>
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  console.log(itemClass, "itemClass")
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}
</script>
`;

export const accordion = [accordianHtml1]
