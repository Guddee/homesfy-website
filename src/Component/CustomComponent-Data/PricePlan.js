// html

const priceplanHtml1 = `
<h3 class="text-center mb-2">Component Type1</h3>
<table border="1" class="table-bordered bg-white">
<thead>
    <tr>
        <th>Configuration</th>
        <th>Carpet Area</th>
        <th>Pricing</th>
        <th>Offer</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1 BHK</td>
        <td> 1200 sqft </td>
        <td> 2.51 Cr* </td>
        <td>
            <button class="btn-primary text-white">Request</button>
        </td>
    </tr>
    <tr>
        <td>2 BHK</td>
        <td>1200 sqft </td>
        <td> 2.51 Cr* </td>
        <td>
            <button class="btn-primary text-white">Request</button>
        </td>
    </tr>
</tbody>
</table>

<style>
.table-bordered {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 0.01rem solid black;
    border-collapse: collapse;
  }
  .table-bordered th, .table-bordered td {
    padding: 1rem;
    text-align: center;
  }
  </style>

`;

const priceplanHtml2 = `
<h3 class="text-center mb-2">Component Type2</h3>
<table border="1" class="table-bordered-white bg-primary-light-8">
<thead>
    <tr>
        <th>Configuration</th>
        <th>Carpet Area</th>
        <th>Pricing</th>
        <th>Offer</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1 BHK</td>
        <td> 1200 sqft </td>
        <td> 2.51 Cr* </td>
        <td>
            <button class="btn-primary text-white">Request</button>
        </td>
    </tr>
    <tr>
        <td>2 BHK</td>
        <td> 1200 sqft </td>
        <td> 2.51 Cr* </td>
        <td>
            <button class="btn-primary text-white">Request</button>
        </td>
    </tr>
</tbody>
</table>
<style>
.table-bordered-white {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border: 0.01rem solid white;
    border-collapse: collapse;
  }
  .table-bordered-white th, .table-bordered-white td {
    padding: 1rem;
    text-align: center;
  }
  </style>
`;

const priceplanHtml3 = `
<h3 class="text-center mb-2">Component Type3</h3>
<div class="price-plan-content">
<div class="card bg-white" style="width: 20rem;">
    <div class="card-img">
        <img src="https://s3.ap-south-1.amazonaws.com/www.godrej24-bangalore.com/runwal-bliss/images/banner/5.jpeg" alt="">
    </div>
    <div class="card-title text-center mb-1">
        1 BHK
    </div>
    <div class="card-body text-center">
        <h4>Rs 60 Lacs*</h4>
        <p>689 sqft</p>
        <button class="btn-primary text-white mb-1" data-open-modal="price-plan">Enquire
            Now</button>
    </div>
</div>
</div>
<style>
.price-plan-content{
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    position: relative;
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0.1rem 0.3rem 0.5rem rgb(0 0 0 / 10%);
}
.card p, .card h1, .card h2, .card h3, .card h4, .card h5, .card h6 {
    margin-bottom: 1rem;
  }
  .card .card-img {
    margin-bottom: 1rem;
  }
  .card .card-img img {
    border-radius: 0.5rem;
  }
  .card .card-body button {
    width: 100%;
  }
</style>

`;




export const pricePlan = [priceplanHtml1, priceplanHtml2,priceplanHtml3]
